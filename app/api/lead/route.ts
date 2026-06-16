import { NextRequest, NextResponse } from 'next/server'

const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN || ''
const BASE_ID = 'appFQDsdaTMjVVhUj'
const TABLE_ID = 'tblCGwEhM2MzxoRqd'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, email, telefono, empresa, interes, mensaje, fuente } = body

    if (!nombre || !telefono) {
      return NextResponse.json({ error: 'Nombre y teléfono son requeridos' }, { status: 400 })
    }

    const fields: any = {
      'Nombre Completo': nombre,
      'Teléfono / WhatsApp': telefono,
      'Estado': '🆕 Nuevo',
      'Fecha de Entrada': new Date().toISOString().split('T')[0],
      'Fuente': fuente || '🌐 Website',
    }

    if (email) fields['Email'] = email
    if (empresa) fields['Empresa / Negocio'] = empresa
    if (interes) fields['Interés'] = interes
    if (mensaje) fields['Mensaje / Notas'] = mensaje

    const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.error?.message || 'Airtable error')

    return NextResponse.json({ success: true, recordId: data.id })

  } catch (err: any) {
    console.error('Lead capture error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
