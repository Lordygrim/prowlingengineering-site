import { NextResponse } from 'next/server'
import { validateContact } from '@/lib/contact'
import { hubspotConfigured, submitToHubSpot } from '@/lib/hubspot'

function getCookie(header: string | null, name: string): string | undefined {
  return header
    ?.split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(name + '='))
    ?.slice(name.length + 1)
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const result = validateContact(body)
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }

  // HubSpot not set up yet (for example in local development): just log the request.
  if (!hubspotConfigured()) {
    console.log('HubSpot is not configured. New quote request:', result.data)
    return NextResponse.json({ ok: true })
  }

  const sent = await submitToHubSpot(result.data, {
    hutk: getCookie(req.headers.get('cookie'), 'hubspotutk'),
    pageUri: req.headers.get('referer') ?? undefined,
  })
  if (!sent.ok) {
    return NextResponse.json(
      { error: 'We could not send your request. Please try again or contact us directly.' },
      { status: 502 },
    )
  }
  return NextResponse.json({ ok: true })
}
