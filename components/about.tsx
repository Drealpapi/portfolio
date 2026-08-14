'use client'

import Image from 'next/image'
import { Download } from 'lucide-react'

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'transparent',
        padding: '5rem 1.5rem',
        borderTop: '1px solid #111',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section heading */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 className="section-heading">
            <span className="hash">#</span>about-me
          </h2>
          <div className="section-divider" />
        </div>

        {/* Two columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left — text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: '#888', fontSize: '0.875rem', lineHeight: 1.8, fontFamily: 'inherit' }}>
              Hello, I&apos;m <span style={{ color: '#fff' }}>Lawal Ab Oluwaseun</span>.
            </p>
            <p style={{ color: '#777', fontSize: '0.875rem', lineHeight: 1.8, fontFamily: 'inherit' }}>
              I&apos;m a Senior Full Stack Developer based in Lagos, Nigeria, with hands-on
              experience building modern web and mobile applications. I&apos;ve worked across
              insurance, e-commerce, service platforms, and fintech — translating business
              requirements into practical digital solutions.
            </p>
            <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: 1.8, fontFamily: 'inherit' }}>
              Beyond code, I bring an entrepreneurial mindset — co-founding DripBox.ng,
              delivering live cybersecurity training at thesocschool (Maryland, US), and
              shipping the{' '}
              <a
                href="https://www.ammcbuildersinsurance.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#f97316', textDecoration: 'none', borderBottom: '1px solid rgba(249,115,22,0.3)' }}
              >
                AMMC Builders Insurance Platform
              </a>
              . Continuously expanding in cloud deployment, Web3 security, and scalable
              application architecture.
            </p>
            <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: 1.8, fontFamily: 'inherit' }}>
              If you have other requests or questions, don&apos;t hesitate to contact me.
            </p>

            {/* Stats */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #1a1a1a',
                flexWrap: 'wrap',
              }}
            >
              {[
                { val: '4+', label: 'Years Experience' },
                { val: '5+', label: 'Projects Shipped' },
                { val: '3',  label: 'Organisations' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ color: '#f97316', fontSize: '1.25rem', fontWeight: 700 }}>{s.val}</div>
                  <div style={{ color: '#555', fontSize: '0.75rem', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
              >
                Contact Me
              </a>
              <a href="/resume.pdf" download="Lawal_Ab_Oluwaseun_CV.pdf" className="btn-ghost">
                <Download size={14} />
                Resume ↓
              </a>
            </div>
          </div>

          {/* Right — avatar illustration */}
          <div
            className="about-avatar"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Dot grid decoration behind avatar */}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '-10px',
              width: '80px',
              height: '80px',
              backgroundImage: 'radial-gradient(circle, #2a2a2a 1.5px, transparent 1.5px)',
              backgroundSize: '10px 10px',
              zIndex: 0,
            }} />
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '-10px',
              width: '80px',
              height: '80px',
              backgroundImage: 'radial-gradient(circle, #2a2a2a 1.5px, transparent 1.5px)',
              backgroundSize: '10px 10px',
              zIndex: 0,
            }} />

            {/* Avatar image */}
            <div
              style={{
                position: 'relative',
                width: '280px',
                height: '280px',
                zIndex: 1,
              }}
            >
              <Image
                src="/avatar.png"
                alt="Developer avatar"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-avatar {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
