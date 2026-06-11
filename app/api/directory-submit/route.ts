import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function uploadToCloudinary(file: File, folder: string): Promise<string | null> {
  if (!file || file.size === 0) return null
  try {
    const bytes = await file.arrayBuffer()
    const base64 = `data:${file.type};base64,${Buffer.from(bytes).toString('base64')}`
    const result = await cloudinary.uploader.upload(base64, {
      folder: `jaxunico/${folder}`,
      transformation: [{ quality: 'auto', fetch_format: 'auto' }],
    })
    return result.secure_url
  } catch (err) {
    console.error('Cloudinary upload error:', err)
    return null
  }
}

async function createSanityListing(data: any): Promise<string | null> {
  const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '24ezss24'
  const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  const TOKEN = process.env.SANITY_API_TOKEN

  if (!TOKEN) return null

  const doc: any = {
    _type: 'listing',
    businessName: data.businessName,
    category: data.category,
    zone: data.zone || '',
    description: data.description,
    phone: data.phone || '',
    website: data.website || '',
    instagram: data.instagram || '',
    approved: false, // Always starts pending
    featured: false,
  }

  // Add cover image if uploaded
  if (data.coverImageUrl) {
    // Upload image to Sanity assets
    const imageRes = await fetch(data.coverImageUrl)
    const imageBlob = await imageRes.arrayBuffer()
    const uploadRes = await fetch(
      `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/assets/images/${DATASET}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'image/jpeg',
          Authorization: `Bearer ${TOKEN}`,
        },
        body: imageBlob,
      }
    )
    if (uploadRes.ok) {
      const assetData = await uploadRes.json()
      doc.coverImage = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: assetData.document._id,
        },
      }
    }
  }

  const mutationRes = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${DATASET}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        mutations: [{ create: doc }],
      }),
    }
  )

  if (mutationRes.ok) {
    const result = await mutationRes.json()
    return result.results?.[0]?.id || null
  }
  return null
}

async function createAirtableRecord(data: any, sanityId: string | null) {
  const AIRTABLE_TOKEN = process.env.AIRTABLE_API_TOKEN
  const BASE_ID = process.env.AIRTABLE_DIRECTORY_BASE_ID

  if (!AIRTABLE_TOKEN || !BASE_ID) return

  // Get the Solicitudes table ID
  const tablesRes = await fetch(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, {
    headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` },
  })

  if (!tablesRes.ok) return

  const tablesData = await tablesRes.json()
  const solicitudesTable = tablesData.tables?.find((t: any) => t.name === 'Solicitudes de Registro')
  if (!solicitudesTable) return

  await fetch(`https://api.airtable.com/v0/${BASE_ID}/${solicitudesTable.id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        'Solicitud': `${data.businessName} — ${new Date().toLocaleDateString('es-US')}`,
        'Nombre del Negocio': data.businessName,
        'Dueño': data.ownerName || '',
        'Email': data.email || '',
        'Teléfono': data.phone || '',
        'Categoría': data.category || '',
        'Estado de Solicitud': '🟡 Nueva',
        'Fecha de Solicitud': new Date().toISOString().split('T')[0],
        'Plan Seleccionado': data.plan || 'Gratis',
        'Notas': [
          data.description ? `Descripción: ${data.description}` : '',
          data.website ? `Web: ${data.website}` : '',
          data.instagram ? `IG: @${data.instagram}` : '',
          data.zone ? `Zona: ${data.zone}` : '',
          data.coverImageUrl ? `Foto: ${data.coverImageUrl}` : '',
          data.logoUrl ? `Logo: ${data.logoUrl}` : '',
          sanityId ? `Sanity ID: ${sanityId}` : '',
        ].filter(Boolean).join('\n'),
      },
    }),
  })
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    // Extract text fields
    const businessName = formData.get('businessName') as string
    const ownerName = formData.get('ownerName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const category = formData.get('category') as string
    const zone = formData.get('zone') as string
    const description = formData.get('description') as string
    const website = formData.get('website') as string
    const instagram = formData.get('instagram') as string
    const plan = formData.get('plan') as string

    if (!businessName || !email || !category || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Upload photos to Cloudinary in parallel
    const coverImageFile = formData.get('coverImage') as File | null
    const logoFile = formData.get('logo') as File | null

    const [coverImageUrl, logoUrl] = await Promise.all([
      coverImageFile && coverImageFile.size > 0 ? uploadToCloudinary(coverImageFile, 'directory/covers') : Promise.resolve(null),
      logoFile && logoFile.size > 0 ? uploadToCloudinary(logoFile, 'directory/logos') : Promise.resolve(null),
    ])

    const submissionData = {
      businessName, ownerName, email, phone, category,
      zone, description, website, instagram, plan,
      coverImageUrl, logoUrl,
    }

    // Create pending listing in Sanity + record in Airtable in parallel
    const [sanityId] = await Promise.all([
      createSanityListing(submissionData),
      createAirtableRecord(submissionData, null),
    ])

    return NextResponse.json({
      success: true,
      message: 'Business registration received. Pending review.',
      sanityId,
    })

  } catch (error: any) {
    console.error('Directory submit error:', error)
    return NextResponse.json({ error: error.message || 'Submission failed' }, { status: 500 })
  }
}
