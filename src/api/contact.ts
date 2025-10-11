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
    const { name, email, phone, subject, budget, message, honeypot } = (req.body || {}) as {
      name?: string; email?: string; phone?: string; subject?: string; budget?: string; message?: string; honeypot?: string
    }

    // Honeypot: silently succeed for bots
    if (honeypot) return res.status(200).json({ ok: true })

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Basic size limits (avoid abuse / oversized payloads)
    if ((message?.length ?? 0) > 5000) {
      return res.status(413).json({ error: 'Message too long' })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY')
      return res.status(500).json({ error: 'Server misconfigured' })
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = phone ? escapeHtml(phone) : ''
    const safeBudget = budget ? escapeHtml(budget) : ''
    const safeSubject = escapeHtml(subject || '—')
    const safeMessage = escapeHtml(message || '')

    const html = `
      <div style="font-family:Inter,Arial,sans-serif">
        <h2 style="margin:0 0 12px">New contact from ${safeName}</h2>
        <p><b>Email:</b> ${safeEmail}</p>
        ${phone ? `<p><b>Phone:</b> ${safePhone}</p>` : ''}
        ${budget ? `<p><b>Budget:</b> ${safeBudget}</p>` : ''}
        <p><b>Subject:</b> ${safeSubject}</p>
        <hr style="margin:16px 0;border:0;border-top:1px solid #eee" />
        <pre style="white-space:pre-wrap;margin:0">${safeMessage}</pre>
      </div>
    `

    await resend.emails.send({
      from: 'Portfolio <noreply@yourdomain.com>',       // ✅ use your verified Resend domain
      to: ['you@your-email.com'],                       // ✅ change to your inbox
      subject: subject ? `Portfolio: ${subject}` : 'Portfolio: New message',
      replyTo: email,                                   // ✅ camelCase
      html,
      // text fallback for clients that block HTML
      text:
        `New contact message

Name:   ${name}
Email:  ${email}
Phone:  ${phone || '-'}
Budget: ${budget || '-'}
Subject:${subject || '-'}

${message || ''}`
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
