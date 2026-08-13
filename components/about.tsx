'use client'

import Image from 'next/image'
import { Download } from 'lucide-react'

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#0a0a0a',
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
            gridTemplateColumns: '1fr 280px',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left — text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: '#888', fontSize: '0.875rem', lineHeight: 1.8, fontFamily: 'inherit' }}>
              I&apos;m a Senior Full Stack Developer based in Lagos, Nigeria, with hands-on
              experience building modern web and mobile applications. I&apos;ve worked across
              insurance, e-commerce, service platforms, and fintech — translating business
              requirements into practical digital solutions.
            </p>
            <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: 1.8, fontFamily: 'inherit' }}>
              Beyond code, I bring an entrepreneurial mindset — co-founding DripBox.ng,
              delivering live cybersecurity training at thesocschool (Maryland, US), and
              currently building the AMMC Builders Liability Insurance Platform at Eleaders
              Network. I&apos;m continuously expanding in cloud deployment, Web3 security, and
              scalable application architecture.
            </p>
            <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: 1.8, fontFamily: 'inherit' }}>
              I speak <span style={{ color: '#aaa' }}>English</span> and{' '}
              <span style={{ color: '#aaa' }}>Yoruba</span>, and I&apos;m always open to
              freelance projects, collaborations, or full-time opportunities.
            </p>

            {/* Stats row */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '0.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #1a1a1a',
                flexWrap: 'wrap',
              }}
            >
              {[
                { val: '2+', label: 'Years Experience' },
                { val: '5+', label: 'Projects Shipped' },
                { val: '3', label: 'Organisations' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ color: '#f97316', fontSize: '1.25rem', fontWeight: 700 }}>{s.val}</div>
                  <div style={{ color: '#555', fontSize: '0.75rem', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
              >
                Contact Me
              </a>
              <a href="/resume.pdf" download="Lawal_Ab_Oluwaseun_CV.pdf" className="btn-ghost">
                <Download size={14} />
                Resume
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div style={{ position: 'relative' }} className="about-photo">
            {/* Corner brackets */}
            <div style={{
              position: 'absolute', top: '-6px', left: '-6px', width: '16px', height: '16px',
              borderTop: '2px solid #f97316', borderLeft: '2px solid #f97316',
            }} />
            <div style={{
              position: 'absolute', bottom: '-6px', right: '-6px', width: '16px', height: '16px',
              borderBottom: '2px solid #f97316', borderRight: '2px solid #f97316',
            }} />
            <div
              style={{
                width: '280px',
                height: '340px',
                overflow: 'hidden',
                border: '1px solid #1e1e1e',
                position: 'relative',
              }}
            >
              <Image
                src="/profile.png"
                alt="Lawal Ab Oluwaseun"
                fill
                className="object-cover object-top"
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
          .about-photo {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
