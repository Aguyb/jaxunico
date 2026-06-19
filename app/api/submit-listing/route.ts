import { NextRequest, NextResponse } from 'next/server'

const BASE_ID = 'app6CeBxi2inbKZ6z'
const TABLE_ID = 'tblSiUrwg6wdolqig'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fields } = body

    const token = process.env.AIRTABLE_TOKEN
    if (!token) {
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
    }

    const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    })

    if (!res.ok) {
      const err = await res.json()
      return NextResponse.json({ error: err?.error?.message || 'Airtable error' }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json({ success: true, id: data.id })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 })
  }
}
