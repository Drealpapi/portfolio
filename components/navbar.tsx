'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: '#home',     href: '#home' },
  { label: '#projects', href: '#projects' },
  { label: '#skills',   href: '#skills' },
  { label: '#blog',     href: '#blog' },
  { label: '#about-me', href: '#about' },
  { label: '#contact',  href: '#contact' },
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

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href))
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const match = navLinks.find(l => l.href === `#${entry.target.id}`)
            if (match) setActive(match.label)
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(s => s && obs.observe(s))
    return () => obs.disconnect()
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
        background: scrolled ? 'rgba(10,10,10,0.96)' : '#0a0a0a',
        borderBottom: scrolled ? '1px solid #1e1e1e' : '1px solid #141414',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
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
          <span style={{ color: '#fff', fontFamily: 'inherit', fontSize: '0.875rem', fontWeight: 700 }}>
            Lawal
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.label
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.label)}
                style={{
                  background: isActive ? 'rgba(249,115,22,0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(249,115,22,0.3)' : '1px solid transparent',
                  borderRadius: '4px',
                  fontFamily: 'inherit',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  color: isActive ? '#f97316' : '#777',
                  padding: '0.3rem 0.7rem',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget
                    el.style.color = '#ddd'
                    el.style.background = 'rgba(255,255,255,0.05)'
                    el.style.border = '1px solid rgba(255,255,255,0.08)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget
                    el.style.color = '#777'
                    el.style.background = 'transparent'
                    el.style.border = '1px solid transparent'
                  }
                }}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center"
          style={{
            background: menuOpen ? 'rgba(249,115,22,0.1)' : 'transparent',
            border: menuOpen ? '1px solid rgba(249,115,22,0.3)' : '1px solid #222',
            borderRadius: '4px',
            color: menuOpen ? '#f97316' : '#888',
            cursor: 'pointer',
            width: '34px', height: '34px',
            fontSize: '1rem',
            transition: 'all 0.2s',
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          background: '#0d0d0d',
          borderTop: '1px solid #1a1a1a',
          overflow: 'hidden',
          maxHeight: menuOpen ? '400px' : '0',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{ padding: '0.75rem 1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navLinks.map((link) => {
            const isActive = active === link.label
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.label)}
                style={{
                  background: isActive ? 'rgba(249,115,22,0.1)' : 'transparent',
                  border: isActive ? '1px solid rgba(249,115,22,0.25)' : '1px solid transparent',
                  borderRadius: '4px',
                  fontFamily: 'inherit',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  color: isActive ? '#f97316' : '#888',
                  textAlign: 'left',
                  padding: '0.6rem 0.875rem',
                  transition: 'all 0.15s',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#ccc'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#888'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
