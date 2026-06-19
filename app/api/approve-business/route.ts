import { NextRequest, NextResponse } from 'next/server'

const SANITY_PROJECT = '24ezss24'
const SANITY_DATASET = 'production'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { businessName, category, zone, description, phone, website, instagram, coverUrl, sanityId } = body

    if (!businessName || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const SANITY_TOKEN = process.env.SANITY_API_TOKEN
    if (!SANITY_TOKEN) {
      return NextResponse.json({ error: 'Sanity token not configured' }, { status: 500 })
    }

    let resultId: string

    if (sanityId) {
      // Patch existing draft → approved: true (fast path for new submissions)
      const patchRes = await fetch(
        `https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/data/mutate/${SANITY_DATASET}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${SANITY_TOKEN}`,
          },
          body: JSON.stringify({
            mutations: [{ patch: { id: sanityId, set: { approved: true } } }],
          }),
        }
      )
      if (!patchRes.ok) {
        const err = await patchRes.json()
        return NextResponse.json({ error: err.error?.description || 'Sanity patch failed' }, { status: 500 })
      }
      resultId = sanityId
    } else {
      // Create new listing (legacy path for records without sanityId)
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
                asset: { _type: 'reference', _ref: assetData.document._id },
              }
            }
          }
        } catch (imgErr) {
          console.error('Image upload failed, continuing without:', imgErr)
        }
      }

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

      if (!sanityRes.ok) {
        const sanityData = await sanityRes.json()
        return NextResponse.json(
          { error: sanityData.error?.description || 'Sanity publish failed' },
          { status: 500 }
        )
      }

      const sanityData = await sanityRes.json()
      resultId = sanityData.results?.[0]?.id
    }

    return NextResponse.json({ success: true, sanityId: resultId })

  } catch (error: any) {
    console.error('Approve error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
