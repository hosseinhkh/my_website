// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).send('Method Not Allowed')
  }

  try {
    const { name, email, phone, subject, budget, message, honeypot } = req.body || {}

    // Honeypot: silently succeed for bots
    if (honeypot) return res.status(200).json({ ok: true })

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY')
      return res.status(500).json({ error: 'Server misconfigured' })
    }

    const html = `
      <div style="font-family:Inter,Arial,sans-serif">
        <h2 style="margin:0 0 12px">New contact from ${escapeHtml(name)}</h2>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        ${phone ? `<p><b>Phone:</b> ${escapeHtml(phone)}</p>` : ''}
        ${budget ? `<p><b>Budget:</b> ${escapeHtml(budget)}</p>` : ''}
        <p><b>Subject:</b> ${escapeHtml(subject || '—')}</p>
        <hr style="margin:16px 0;border:0;border-top:1px solid #eee" />
        <pre style="white-space:pre-wrap;margin:0">${escapeHtml(message || '')}</pre>
      </div>
    `

    await resend.emails.send({
      from: 'Portfolio <noreply@yourdomain.com>',   // <-- set up in Resend
      to: ['you@your-email.com'],                   // <-- change to your inbox
      subject: subject ? `Portfolio: ${subject}` : 'Portfolio: New message',
      reply_to: email,
      html,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact error:', err)
    return res.status(500).json({ error: 'Server error' })
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
