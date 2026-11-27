export type ContactPayload = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export type ContactResult = { ok: true; data: ContactPayload } | { ok: false; error: string }

export function validateContact(input: unknown): ContactResult {
  if (typeof input !== 'object' || input === null) return { ok: false, error: 'Invalid request.' }
  const o = input as Record<string, unknown>
  const s = (k: string) => (typeof o[k] === 'string' ? (o[k] as string).trim() : '')
  const data: ContactPayload = {
    firstName: s('firstName'),
    lastName: s('lastName'),
    email: s('email'),
    phone: s('phone'),
    message: s('message'),
  }
  if (!data.firstName) return { ok: false, error: 'Please enter your first name.' }
  if (!data.lastName) return { ok: false, error: 'Please enter your last name.' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return { ok: false, error: 'Please enter a valid email.' }
  if (!data.phone) return { ok: false, error: 'Please enter your phone number.' }
  if (data.message.length < 5) return { ok: false, error: 'Please describe your project.' }
  return { ok: true, data }
}
