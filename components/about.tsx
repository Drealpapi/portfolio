'use client'

import dynamic from 'next/dynamic'
import { Download } from 'lucide-react'

const ModelViewer = dynamic(() => import('./model-viewer'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#888', fontSize: '0.75rem',
    }}>
      Loading 3D…
    </div>
  ),
})

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(135deg, #0f0e0c 0%, #13110e 40%, #0f0d0b 100%)',
        borderTop: '1px solid #2a2418',
        borderBottom: '1px solid #2a2418',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Warm cream glow — top left */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        left: '-80px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,200,120,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Warm glow — bottom right */}
      <div style={{
        position: 'absolute',
        bottom: '-60px',
        right: '-60px',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section heading */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 className="section-heading">
            <span className="hash">#</span>about-me
          </h2>
          <div style={{ flex: 1, height: '1px', background: '#2a2418', marginLeft: '1rem' }} />
        </div>

        {/* Grid: text | 3D model */}
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '3rem',
          alignItems: 'center',
        }}>
          {/* Left — text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <p style={{ color: '#d4c9b8', fontSize: '0.9rem', lineHeight: 1.8, fontFamily: 'inherit' }}>
              Hello, I&apos;m <span style={{ color: '#fff', fontWeight: 600 }}>Lawal Ab Oluwaseun</span>.
            </p>
            <p style={{ color: '#bfb5a4', fontSize: '0.875rem', lineHeight: 1.9, fontFamily: 'inherit' }}>
              I&apos;m a Senior Full Stack Developer based in Lagos, Nigeria, with hands-on
              experience building modern web and mobile applications. I&apos;ve worked across
              insurance, e-commerce, service platforms, and fintech — translating business
              requirements into practical digital solutions.
            </p>
            <p style={{ color: '#a89e8e', fontSize: '0.875rem', lineHeight: 1.9, fontFamily: 'inherit' }}>
              Beyond code, I bring an entrepreneurial mindset — co-founding DripBox.ng,
              delivering live cybersecurity training at thesocschool (Maryland, US), and
              shipping the{' '}
              <a
                href="https://www.ammcbuildersinsurance.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#f97316', textDecoration: 'none', borderBottom: '1px solid rgba(249,115,22,0.4)' }}
              >
                AMMC Builders Insurance Platform
              </a>
              . Continuously expanding in cloud deployment, Web3 security, and scalable
              application architecture.
            </p>
            <p style={{ color: '#a89e8e', fontSize: '0.875rem', lineHeight: 1.9, fontFamily: 'inherit' }}>
              If you have other requests or questions, don&apos;t hesitate to contact me.
            </p>

            {/* Stats */}
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #2a2418',
              flexWrap: 'wrap',
            }}>
              {[
                { val: '4+', label: 'Years Experience' },
                { val: '5+', label: 'Projects Shipped' },
                { val: '3',  label: 'Organisations' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ color: '#f97316', fontSize: '1.4rem', fontWeight: 700 }}>{s.val}</div>
                  <div style={{ color: '#7a7060', fontSize: '0.75rem', marginTop: '3px', fontFamily: 'inherit' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
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

          {/* Right — 3D model */}
          <div className="about-avatar" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <ModelViewer
              src="/model.glb"
              width="100%"
              height={460}
              scale={1.6}
              autoRotate={true}
              float={true}
              orbitControls={true}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-avatar {
            width: 100%;
            height: 320px;
          }
          .about-avatar > div {
            height: 320px !important;
          }
        }
      `}</style>
    </section>
  )
}
