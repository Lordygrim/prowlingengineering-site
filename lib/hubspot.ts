import type { ContactPayload } from './contact'

export type HubSpotResult = { ok: true } | { ok: false; error: string }

type Context = { hutk?: string; pageUri?: string }

export function hubspotConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID && process.env.HUBSPOT_FORM_GUID)
}

// HubSpot accounts hosted in Europe use a different API address.
// Set HUBSPOT_REGION=eu1 in .env.local for those accounts (your hubspot URL starts with app-eu1).
function formsHost(): string {
  const region = process.env.HUBSPOT_REGION?.trim()
  return region ? `api-${region}.hsforms.com` : 'api.hsforms.com'
}

// Sends the quote request to a HubSpot form. HubSpot creates or updates the contact
// and records the form submission. The field names below are HubSpot's internal names
// and must exist in your HubSpot form.
export async function submitToHubSpot(data: ContactPayload, ctx: Context): Promise<HubSpotResult> {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
  const formGuid = process.env.HUBSPOT_FORM_GUID
  if (!portalId || !formGuid) return { ok: false, error: 'HubSpot is not configured.' }

  const fields = [
    { name: 'firstname', value: data.firstName },
    { name: 'lastname', value: data.lastName },
    { name: 'email', value: data.email },
    { name: '0-2/phone', value: data.phone },
    { name: 'message', value: data.message },
  ].filter((f) => f.value)

  try {
    const res = await fetch(
      `https://${formsHost()}/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields,
          context: { hutk: ctx.hutk, pageUri: ctx.pageUri, pageName: 'Contact' },
        }),
      },
    )
    if (res.ok) return { ok: true }
    const body = await res.text()
    console.error('HubSpot rejected the submission:', res.status, body)
    return { ok: false, error: 'HubSpot rejected the submission.' }
  } catch (err) {
    console.error('HubSpot request failed:', err)
    return { ok: false, error: 'Could not reach HubSpot.' }
  }
}
