'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const roles = [
  'Senior Software Developer',
  'Cybersecurity Enthusiast',
  'React & React Native Dev',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        paddingTop: '3.5rem',
        overflow: 'hidden',
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '3rem 1.5rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        {/* Left — text */}
        <div
          style={{
            display: 'flex', flexDirection: 'column', gap: '1.25rem',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s',
            position: 'relative', zIndex: 2,
          }}
        >
          <p style={{ color: '#666', fontSize: '0.875rem', fontFamily: 'inherit' }}>
            Hi, I&apos;m
          </p>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 800, lineHeight: 1.1,
            color: '#fff', fontFamily: 'inherit',
          }}>
            Lawal Ab{' '}
            <span style={{ color: '#f97316' }}>Oluwaseun</span>
          </h1>

          <div style={{ height: '2rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#aaa', fontSize: '1rem', fontFamily: 'inherit' }}>
              {displayed}
              <span className="typing-cursor" />
            </span>
          </div>

          <p style={{
            color: '#666', fontSize: '0.875rem',
            lineHeight: 1.7, maxWidth: '480px', fontFamily: 'inherit',
          }}>
            Building modern web &amp; mobile apps across insurance, fintech,
            and service platforms. Recently shipped{' '}
            <a
              href="https://www.ammcbuildersinsurance.com"
              target="_blank" rel="noopener noreferrer"
              style={{ color: '#f97316', textDecoration: 'none', borderBottom: '1px solid rgba(249,115,22,0.3)' }}
            >
              AMMC Insurance Platform
            </a>.
          </p>

          {/* No buttons here — CV is in About, no Scroll Down needed */}
        </div>

        {/* Right — circular photo */}
        <div
          className="hero-photo"
          style={{
            position: 'relative',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 0.75s ease 0.25s, transform 0.75s ease 0.25s',
          }}
        >
          {/* Glow */}
          <div className="hero-glow" style={{
            position: 'absolute', width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
            zIndex: 0,
          }} />
          {/* Photo circle */}
          <div className="hero-circle" style={{
            width: '260px', height: '260px', borderRadius: '50%',
            overflow: 'hidden', border: '2px solid #f97316',
            position: 'relative', zIndex: 1,
            boxShadow: '0 0 0 5px #0d0d0d, 0 0 0 7px rgba(249,115,22,0.25)',
            flexShrink: 0,
          }}>
            <Image
              src="/profile.png"
              alt="Lawal Ab Oluwaseun"
              fill
              sizes="(max-width: 640px) 160px, 260px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            justify-items: center;
            gap: 2rem !important;
          }
          .hero-photo {
            order: -1;
          }
          .hero-circle {
            width: 160px !important;
            height: 160px !important;
          }
          .hero-glow {
            width: 190px !important;
            height: 190px !important;
          }
        }
      `}</style>
    </section>
  )
}
