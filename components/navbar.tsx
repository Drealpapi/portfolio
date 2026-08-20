'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: '#home', href: '#home' },
  { label: '#projects', href: '#projects' },
  { label: '#skills', href: '#skills' },
  { label: '#blog', href: '#blog' },
  { label: '#about-me', href: '#about' },
  { label: '#contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string, label: string) => {
    setActive(label)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.95)' : '#0a0a0a',
        borderBottom: '1px solid #1a1a1a',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home', '#home') }}
          className="flex items-center gap-2"
          style={{ textDecoration: 'none' }}
        >
          <div className="w-7 h-7 rounded overflow-hidden flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={28} height={28} className="w-full h-full object-cover" />
          </div>
          <span style={{ color: '#fff', fontFamily: 'inherit', fontSize: '0.875rem', fontWeight: 600 }}>
            Lawal
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href, link.label)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'inherit',
                fontSize: '0.8125rem',
                cursor: 'pointer',
                color: active === link.label ? '#f97316' : '#888',
                transition: 'color 0.2s',
                padding: 0,
              }}
              onMouseEnter={(e) => { if (active !== link.label) (e.target as HTMLButtonElement).style.color = '#ccc' }}
              onMouseLeave={(e) => { if (active !== link.label) (e.target as HTMLButtonElement).style.color = '#888' }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '1.25rem' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: '#0d0d0d',
            borderTop: '1px solid #1a1a1a',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href, link.label)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'inherit',
                fontSize: '0.875rem',
                cursor: 'pointer',
                color: active === link.label ? '#f97316' : '#888',
                textAlign: 'left',
                padding: '0.25rem 0',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
