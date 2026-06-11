import { NextRequest, NextResponse } from 'next/server'

// This endpoint is called by Airtable automation when you approve a listing
// Airtable sends: { sanityId, action: 'approve' | 'reject' }
export async function POST(req: NextRequest) {
  try {
    // Verify webhook secret
    const secret = req.headers.get('x-webhook-secret')
    if (secret !== process.env.DIRECTORY_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { sanityId, action, businessName } = body

    if (!sanityId || !action) {
      return NextResponse.json({ error: 'Missing sanityId or action' }, { status: 400 })
    }

    const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '24ezss24'
    const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
    const TOKEN = process.env.SANITY_API_TOKEN

    if (!TOKEN) {
      return NextResponse.json({ error: 'Sanity token not configured' }, { status: 500 })
    }

    if (action === 'approve') {
      // Set approved = true in Sanity — listing goes live immediately
      const res = await fetch(
        `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${DATASET}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
          },
          body: JSON.stringify({
            mutations: [{
              patch: {
                id: sanityId,
                set: { approved: true },
              },
            }],
          }),
        }
      )

      if (!res.ok) {
        const err = await res.json()
        return NextResponse.json({ error: 'Sanity update failed', details: err }, { status: 500 })
      }

      return NextResponse.json({
        success: true,
        message: `✅ "${businessName}" is now live on jaxunico.com/directorio`,
      })

    } else if (action === 'reject') {
      // Delete the draft from Sanity
      const res = await fetch(
        `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${DATASET}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
          },
          body: JSON.stringify({
            mutations: [{ delete: { id: sanityId } }],
          }),
        }
      )

      return NextResponse.json({
        success: true,
        message: `❌ "${businessName}" rejected and removed.`,
      })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })

  } catch (error: any) {
    console.error('Directory approve error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
