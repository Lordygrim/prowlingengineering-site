import Script from 'next/script'

// Loads HubSpot's tracking code so visits and form activity show up on your contacts.
// Does nothing until NEXT_PUBLIC_HUBSPOT_PORTAL_ID is set in .env.local.
export default function HubSpotTracking() {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
  if (!portalId) return null
  return <Script id="hs-script-loader" src={`https://js.hs-scripts.com/${portalId}.js`} strategy="afterInteractive" />
}
