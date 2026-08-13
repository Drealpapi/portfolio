'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const FORMSPREE_URL = 'https://formspree.io/f/xojrvnyg'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      style={{
        background: '#0a0a0a',
        padding: '5rem 1.5rem',
        borderTop: '1px solid #111',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section heading */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5rem' }}>
          <h2 className="section-heading">
            <span className="hash">#</span>contacts
          </h2>
          <div className="section-divider" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left — info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: '#888', fontSize: '0.875rem', lineHeight: 1.7, fontFamily: 'inherit' }}>
              I&apos;m interested in freelance opportunities. However, if you have any
              other request or question, don&apos;t hesitate to contact me.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              {[
                { icon: Mail, label: 'seunlawal18@gmail.com', href: 'mailto:seunlawal18@gmail.com' },
                { icon: Phone, label: '+2349021914839', href: 'tel:+2349021914839' },
                { icon: MapPin, label: 'Lagos, Nigeria', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    color: '#666',
                    fontSize: '0.8125rem',
                    fontFamily: 'inherit',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f97316')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                >
                  <Icon size={14} style={{ color: '#f97316', flexShrink: 0 }} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{
              background: '#0d0d0d',
              border: '1px solid #1e1e1e',
              padding: '1.5rem',
            }}
          >
            <p style={{ color: '#555', fontSize: '0.75rem', fontFamily: 'inherit', marginBottom: '1rem' }}>
              Message me here
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input
                type="text"
                className="input-field"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <textarea
                className="input-field"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                style={{ resize: 'vertical' }}
              />

              <button
                type="submit"
                className="btn-primary"
                disabled={sending || sent}
                style={{ justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
              >
                {sent ? (
                  '✓ Sent!'
                ) : sending ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={13} />
                    Send Message
                  </>
                )}
              </button>

              {error && (
                <p style={{ color: '#e55', fontSize: '0.75rem', fontFamily: 'inherit' }}>
                  Something went wrong. Try emailing me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
