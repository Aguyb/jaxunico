import { NextRequest, NextResponse } from 'next/server'

const BASE_ID = 'app6CeBxi2inbKZ6z'
const TABLE_ID = 'tblSiUrwg6wdolqig'
const SANITY_PROJECT = '24ezss24'
const SANITY_DATASET = 'production'

async function createSanityDraft(data: {
  businessName: string
  category: string
  zone: string
  description: string
  phone: string
  website: string
  instagram: string
  coverImageUrl: string
}): Promise<string | null> {
  const token = process.env.SANITY_API_TOKEN
  if (!token) {
    console.warn('SANITY_API_TOKEN not set — skipping Sanity draft')
    return null
  }

  const doc: any = {
    _type: 'listing',
    businessName: data.businessName,
    category: data.category,
    zone: data.zone || '',
    description: data.description || '',
    phone: data.phone || '',
    website: data.website || '',
    instagram: data.instagram || '',
    approved: false,
    featured: false,
  }

  if (data.coverImageUrl) {
    try {
      const imgRes = await fetch(data.coverImageUrl)
      if (imgRes.ok) {
        const imgBuffer = await imgRes.arrayBuffer()
        const uploadRes = await fetch(
          `https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/assets/images/${SANITY_DATASET}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'image/jpeg',
              Authorization: `Bearer ${token}`,
            },
            body: imgBuffer,
          }
        )
        if (uploadRes.ok) {
          const assetData = await uploadRes.json()
          doc.coverImage = {
            _type: 'image',
            asset: { _type: 'reference', _ref: assetData.document._id },
          }
        }
      }
    } catch (e) {
      console.error('Sanity image upload failed:', e)
    }
  }

  const mutRes = await fetch(
    `https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/data/mutate/${SANITY_DATASET}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mutations: [{ create: doc }] }),
    }
  )

  if (mutRes.ok) {
    const result = await mutRes.json()
    return result.results?.[0]?.id || null
  }
  const errData = await mutRes.json()
  console.error('Sanity create failed:', errData)
  return null
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      businessName, ownerName, email, phone,
      category, zone, description, website, instagram,
      plan, coverImageUrl, logoUrl,
    } = body

    const token = process.env.AIRTABLE_TOKEN
    if (!token) {
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
    }

    // 1. Create Sanity draft (approved: false)
    const sanityId = await createSanityDraft({
      businessName, category, zone: zone || '', description: description || '',
      phone: phone || '', website: website || '', instagram: instagram || '',
      coverImageUrl: coverImageUrl || '',
    })

    // 2. Build notes including sanityId for admin approval linking
    const notes = [
      description ? `Descripción: ${description}` : '',
      website ? `Web: ${website}` : '',
      instagram ? `IG: @${instagram}` : '',
      zone ? `Zona: ${zone}` : '',
      coverImageUrl ? `📷 Foto: ${coverImageUrl}` : '',
      logoUrl ? `🎨 Logo: ${logoUrl}` : '',
      sanityId ? `Sanity ID: ${sanityId}` : '',
    ].filter(Boolean).join('\n')

    // 3. Create Airtable record
    const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          'Solicitud': `${businessName} — ${new Date().toLocaleDateString('es-US')}`,
          'Nombre del Negocio': businessName,
          'Dueño': ownerName || '',
          'Email': email || '',
          'Teléfono': phone || '',
          'Categoría': category || '',
          'Estado de Solicitud': '🟡 Nueva',
          'Fecha de Solicitud': new Date().toISOString().split('T')[0],
          'Plan Seleccionado': plan || 'Gratis',
          'Notas': notes,
        },
        typecast: true,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      return NextResponse.json({ error: err?.error?.message || 'Submission failed' }, { status: res.status })
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 })
  }
}
