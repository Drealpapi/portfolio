'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

const navLinks = [
  { label: '#home',     href: '#home' },
  { label: '#projects', href: '#projects' },
  { label: '#skills',   href: '#skills' },
  { label: '#blog',     href: '#blog' },
  { label: '#about-me', href: '#about' },
  { label: '#contact',  href: '#contact' },
]

const socials = [
  { Icon: Github,     href: 'https://github.com/Drealpapi',                           label: 'GitHub' },
  { Icon: Linkedin,   href: 'https://www.linkedin.com/in/lawal-oluwaseun-370a42268', label: 'LinkedIn' },
  { Icon: TikTokIcon, href: 'https://www.tiktok.com/@drealpapie',                    label: 'TikTok' },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <footer
      ref={ref}
      style={{
        background: '#1c1814',
        borderTop: '1px solid #2a231c',
        padding: '2.5rem 1.5rem',
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
      {/* Orange glow */}
      <div style={{
        position: 'absolute', top: '-30px', right: '10%',
        width: '200px', height: '200px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>

        {/* Top row — slides up */}
        <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1.25rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
          }}
        >
          {/* Logo + name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div style={{ width: '24px', height: '24px', overflow: 'hidden', borderRadius: '3px' }}>
              <Image src="/logo.png" alt="Logo" width={24} height={24} className="object-cover" />
            </div>
            <span style={{ color: '#e0d8cc', fontSize: '0.8125rem', fontFamily: 'inherit', fontWeight: 600 }}>
              Lawal Ab Oluwaseun
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{ color: '#7a7268', fontSize: '0.75rem', fontFamily: 'inherit', textDecoration: 'none', transition: 'color 0.2s', padding: '2px 4px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f97316')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#7a7268')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: '#4a4440', fontSize: '0.75rem', fontFamily: 'inherit' }}>Media</span>
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{ color: '#7a7268', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f97316')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#7a7268')}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom — slides up with delay */}
        <div
          style={{
            borderTop: '1px solid #2e2720',
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s',
          }}
        >
          <p style={{ color: '#4a4440', fontSize: '0.75rem', fontFamily: 'inherit' }}>
            © {new Date().getFullYear()} Lawal Ab Oluwaseun. Made with ♥ in Nigeria.
          </p>
        </div>
      </div>
    </footer>
  )
}
