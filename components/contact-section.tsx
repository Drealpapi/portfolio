'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const FORMSPREE_URL = 'https://formspree.io/f/xojrvnyg'

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#231f1b',
  border: '1px solid #3a3028',
  color: '#e0d8cc',
  fontFamily: 'inherit',
  fontSize: '0.875rem',
  padding: '0.625rem 0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const heading = useInView(0.1)
  const infoCol = useInView(0.1)
  const formCol = useInView(0.1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true); setError(false)
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
      } else { setError(true) }
    } catch { setError(true) }
    finally { setSending(false) }
  }

  return (
    <section
      id="contact"
      style={{
        background: '#1c1814',
        padding: '5rem 1.5rem',
        borderTop: '1px solid #2a231c',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '24px 24px', pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Orange glow top-right */}
      <div style={{
        position: 'absolute', top: '-50px', right: '8%',
        width: '280px', height: '280px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading — slides down */}
        <div
          ref={heading.ref}
          style={{
            display: 'flex', alignItems: 'center', marginBottom: '2.5rem',
            opacity: heading.visible ? 1 : 0,
            transform: heading.visible ? 'translateY(0)' : 'translateY(-22px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h2 className="section-heading" style={{ color: '#e8e0d4' }}>
            <span style={{ color: '#f97316' }}>#</span>contacts
          </h2>
          <div style={{ flex: 1, height: '1px', background: '#2e2720', marginLeft: '1rem' }} />
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Left info — slides from left */}
          <div
            ref={infoCol.ref}
            style={{
              display: 'flex', flexDirection: 'column', gap: '1rem',
              opacity: infoCol.visible ? 1 : 0,
              transform: infoCol.visible ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s',
              pointerEvents: 'auto',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <p style={{ color: '#b0a898', fontSize: '0.875rem', lineHeight: 1.8, fontFamily: 'inherit' }}>
              I&apos;m interested in freelance opportunities. However, if you have any
              other request or question, don&apos;t hesitate to contact me.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '0.5rem' }}>
              {[
                { icon: Mail,   label: 'seunlawal18@gmail.com', href: 'mailto:seunlawal18@gmail.com' },
                { icon: Phone,  label: '+2349021914839',        href: 'tel:+2349021914839' },
                { icon: MapPin, label: 'Lagos, Nigeria',        href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#a09890', fontSize: '0.8125rem', fontFamily: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f97316')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#a09890')}
                >
                  <Icon size={14} style={{ color: '#f97316', flexShrink: 0 }} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right form — slides from right */}
          <div
            ref={formCol.ref}
            style={{
              background: '#231f1b',
              border: '1px solid #2e2720',
              padding: '1.75rem',
              opacity: formCol.visible ? 1 : 0,
              transform: formCol.visible ? 'translateX(0)' : 'translateX(36px)',
              transition: 'opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s',
              pointerEvents: 'auto',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <p style={{ color: '#6a6258', fontSize: '0.75rem', fontFamily: 'inherit', marginBottom: '1rem' }}>
              Message me here
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input type="text" placeholder="Name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} required
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = '#f97316')}
                onBlur={e => (e.currentTarget.style.borderColor = '#3a3028')}
              />
              <input type="email" placeholder="Email" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} required
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = '#f97316')}
                onBlur={e => (e.currentTarget.style.borderColor = '#3a3028')}
              />
              <textarea placeholder="Message" rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} required
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#f97316')}
                onBlur={e => (e.currentTarget.style.borderColor = '#3a3028')}
              />
              <button type="submit" className="btn-primary"
                disabled={sending || sent}
                style={{ justifyContent: 'center', opacity: sending ? 0.7 : 1, background: sent ? 'rgba(249,115,22,0.15)' : 'transparent' }}
              >
                {sent ? '✓ Sent!' : sending ? 'Sending…' : <><Send size={13} /> Send Message</>}
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
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
