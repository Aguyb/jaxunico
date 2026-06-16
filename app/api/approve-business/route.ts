import { NextRequest, NextResponse } from 'next/server'

const SANITY_PROJECT = '24ezss24'
const SANITY_DATASET = 'production'
const SANITY_TOKEN = 'skyu0yJ3mGnDMiXDw8pjw6QMLuErf1AXkrtV1hph00rUCJbYCUkkUi6rGK4kibPus9HRLrPQDiDoF8hQSvMZqd17p0kQKPzwowt6dU1hwhubr9o0f7aOPyzASRtt3L9kes65ca8OxZ38p0QAnRjTVCHdiYLfFP0lNBdWbnoFe88wzx7J8E8e'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { businessName, category, zone, description, phone, website, instagram, coverUrl } = body

    if (!businessName || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Build Sanity document
    const doc: any = {
      _type: 'listing',
      businessName,
      category,
      zone: zone || '',
      description: description || '',
      phone: phone || '',
      approved: true,
      featured: false,
    }

    if (website) doc.website = website
    if (instagram) doc.instagram = instagram

    // If there's a cover image URL from Cloudinary, upload it to Sanity
    if (coverUrl) {
      try {
        const imgRes = await fetch(coverUrl)
        if (imgRes.ok) {
          const imgBuffer = await imgRes.arrayBuffer()
          const uploadRes = await fetch(
            `https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/assets/images/${SANITY_DATASET}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'image/jpeg',
                Authorization: `Bearer ${SANITY_TOKEN}`,
              },
              body: imgBuffer,
            }
          )
          if (uploadRes.ok) {
            const assetData = await uploadRes.json()
            doc.coverImage = {
              _type: 'image',
              asset: { _type: 'reference', _ref: assetData.document._id }
            }
          }
        }
      } catch (imgErr) {
        console.error('Image upload failed, continuing without:', imgErr)
      }
    }

    // Create listing in Sanity
    const sanityRes = await fetch(
      `https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/data/mutate/${SANITY_DATASET}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SANITY_TOKEN}`,
        },
        body: JSON.stringify({ mutations: [{ create: doc }] }),
      }
    )

    const sanityData = await sanityRes.json()

    if (!sanityRes.ok) {
      console.error('Sanity error:', sanityData)
      return NextResponse.json(
        { error: sanityData.error?.description || 'Sanity publish failed' },
        { status: 500 }
      )
    }

    const sanityId = sanityData.results?.[0]?.id

    return NextResponse.json({ success: true, sanityId })

  } catch (error: any) {
    console.error('Approve error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
