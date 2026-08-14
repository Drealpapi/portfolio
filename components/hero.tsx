'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'

const roles = [
  'Senior Full Stack Developer',
  'React & React Native Dev',
  'Cybersecurity Enthusiast',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

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

  const scrollDown = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        paddingTop: '3.5rem',
      }}
    >
      <div
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
        className="hero-grid"
      >
        {/* Left — text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Greeting */}
          <p style={{ color: '#888', fontSize: '0.875rem', fontFamily: 'inherit' }}>
            Hi, I&apos;m
          </p>

          {/* Name */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#fff',
              fontFamily: 'inherit',
            }}
          >
            Lawal Ab{' '}
            <span style={{ color: '#f97316' }}>Oluwaseun</span>
          </h1>

          {/* Typing role */}
          <div style={{ height: '2rem', display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                color: '#aaa',
                fontSize: '1rem',
                fontFamily: 'inherit',
              }}
            >
              {displayed}
              <span className="typing-cursor" />
            </span>
          </div>

          {/* Bio */}
          <p
            style={{
              color: '#666',
              fontSize: '0.875rem',
              lineHeight: 1.7,
              maxWidth: '480px',
              fontFamily: 'inherit',
            }}
          >
            Building modern web &amp; mobile apps across insurance, fintech,
            and service platforms. Recently shipped{' '}
            <a
              href="https://www.ammcbuildersinsurance.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#f97316', textDecoration: 'none', borderBottom: '1px solid rgba(249,115,22,0.3)' }}
            >
              AMMC Insurance Platform
            </a>
            .
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <button className="btn-primary" onClick={scrollDown}>
              Scroll Down ↓
            </button>
            <a
              href="/resume.pdf"
              download="Lawal_Ab_Oluwaseun_CV.pdf"
              className="btn-ghost"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>
        </div>

        {/* Right — Photo */}
        <div
          style={{
            position: 'relative',
            width: '260px',
            flexShrink: 0,
          }}
          className="hero-photo"
        >
          {/* Dot grid decoration — top right */}
          <div style={{
            position: 'absolute',
            top: '-16px',
            right: '-16px',
            width: '70px',
            height: '70px',
            backgroundImage: 'radial-gradient(circle, #2a2a2a 1.5px, transparent 1.5px)',
            backgroundSize: '10px 10px',
            zIndex: 0,
          }} />
          {/* Dot grid decoration — bottom left */}
          <div style={{
            position: 'absolute',
            bottom: '-16px',
            left: '-16px',
            width: '70px',
            height: '70px',
            backgroundImage: 'radial-gradient(circle, #2a2a2a 1.5px, transparent 1.5px)',
            backgroundSize: '10px 10px',
            zIndex: 0,
          }} />

          {/* Corner brackets */}
          <div style={{
            position: 'absolute', top: '-8px', left: '-8px', width: '20px', height: '20px',
            borderTop: '2px solid #f97316', borderLeft: '2px solid #f97316', zIndex: 2,
          }} />
          <div style={{
            position: 'absolute', bottom: '-8px', right: '-8px', width: '20px', height: '20px',
            borderBottom: '2px solid #f97316', borderRight: '2px solid #f97316', zIndex: 2,
          }} />

          {/* Currently working on tag — below photo like reference */}
          <div
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              background: '#111',
              border: '1px solid #222',
              padding: '4px 10px',
              fontSize: '0.7rem',
              color: '#666',
              fontFamily: 'inherit',
              zIndex: 2,
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', display: 'inline-block' }} />
            Currently working on{' '}
            <a
              href="https://www.ammcbuildersinsurance.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#f97316', textDecoration: 'none' }}
            >
              AMMC
            </a>
          </div>

          <div
            style={{
              width: '260px',
              height: '320px',
              overflow: 'hidden',
              border: '1px solid #222',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Image
              src="/profile.png"
              alt="Lawal Ab Oluwaseun"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-photo {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
