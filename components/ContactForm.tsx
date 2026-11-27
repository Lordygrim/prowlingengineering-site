'use client'

import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field = 'w-full border ln rounded px-3 py-2.5 mt-1 bg-transparent'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data: { error?: string } = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }
      setStatus('sent')
    } catch {
      setError('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="card" style={{ borderLeft: '4px solid var(--teal)' }}>
        <h2 className="text-2xl font-bold">Request sent</h2>
        <p className="mut mt-2">Thanks. An engineer will contact you within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="card">
      <h2 className="text-2xl font-bold mb-5">Request a quote</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">First name<input name="firstName" required className={field} /></label>
        <label className="block">Last name<input name="lastName" required className={field} /></label>
      </div>
      <label className="block mt-4">Email<input name="email" type="email" required className={field} /></label>
      <label className="block mt-4">Phone<input name="phone" type="tel" required className={field} /></label>
      <label className="block mt-4">Project details<textarea name="message" rows={5} required className={field} /></label>
      {status === 'error' && <p role="alert" className="mt-4 font-semibold">{error}</p>}
      <button type="submit" disabled={status === 'sending'} className="btn navy mt-6">
        {status === 'sending' ? 'Sending...' : 'Send request'}
      </button>
    </form>
  )
}
