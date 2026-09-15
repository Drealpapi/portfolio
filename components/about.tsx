'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Download } from 'lucide-react'

const ModelViewer = dynamic(() => import('./model-viewer'), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '0.75rem' }}>
      Loading 3D…
    </div>
  ),
})

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

export default function About() {
  const heading  = useInView(0.1)
  const textCol  = useInView(0.1)
  const modelCol = useInView(0.1)

  return (
    <section
      id="about"
      style={{
        padding: '5rem 1.5rem',
        background: '#1c1814',
        borderTop: '1px solid #2a231c',
        borderBottom: '1px solid #2a231c',
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
      {/* Orange glow bottom-right */}
      <div style={{
        position: 'absolute', bottom: '-60px', right: '5%',
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Warm top-left glow */}
      <div style={{
        position: 'absolute', top: '-40px', left: '8%',
        width: '260px', height: '260px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(180,120,60,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading — slides down */}
        <div
          ref={heading.ref}
          style={{
            display: 'flex', alignItems: 'center', marginBottom: '3rem',
            opacity: heading.visible ? 1 : 0,
            transform: heading.visible ? 'translateY(0)' : 'translateY(-22px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h2 className="section-heading" style={{ color: '#e8e0d4' }}>
            <span style={{ color: '#f97316' }}>#</span>about-me
          </h2>
          <div style={{ flex: 1, height: '1px', background: '#2e2720', marginLeft: '1rem' }} />
        </div>

        {/* Grid: text | 3D model */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'center' }}>

          {/* Left text — slides from left */}
          <div
            ref={textCol.ref}
            style={{
              display: 'flex', flexDirection: 'column', gap: '1.1rem',
              opacity: textCol.visible ? 1 : 0,
              transform: textCol.visible ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
              pointerEvents: 'auto',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <p style={{ color: '#e0d8cc', fontSize: '0.9rem', lineHeight: 1.8, fontFamily: 'inherit' }}>
              Hello, I&apos;m <span style={{ color: '#fff', fontWeight: 700 }}>Lawal Ab Oluwaseun</span>.
            </p>
            <p style={{ color: '#b8b0a4', fontSize: '0.875rem', lineHeight: 1.9, fontFamily: 'inherit' }}>
              I&apos;m a Senior Software Developer &amp; Cybersecurity Enthusiast based in Lagos, Nigeria, with hands-on
              experience building modern web and mobile applications. I&apos;ve worked across
              insurance, e-commerce, service platforms, and fintech — translating business
              requirements into practical digital solutions.
            </p>
            <p style={{ color: '#a09890', fontSize: '0.875rem', lineHeight: 1.9, fontFamily: 'inherit' }}>
              Beyond code, I bring an entrepreneurial mindset — co-founding DripBox.ng,
              delivering live cybersecurity training at thesocschool (Maryland, US), and
              shipping the{' '}
              <a href="https://www.ammcbuildersinsurance.com" target="_blank" rel="noopener noreferrer"
                style={{ color: '#f97316', textDecoration: 'none', borderBottom: '1px solid rgba(249,115,22,0.4)', fontWeight: 600 }}>
                AMMC Builders Insurance Platform
              </a>
              . Continuously expanding in cloud deployment, Web3 security, and scalable application architecture.
            </p>
            <p style={{ color: '#a09890', fontSize: '0.875rem', lineHeight: 1.9, fontFamily: 'inherit' }}>
              If you have other requests or questions, don&apos;t hesitate to contact me.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #2e2720', flexWrap: 'wrap' }}>
              {[
                { val: '4+', label: 'Years Experience' },
                { val: '5+', label: 'Projects Shipped' },
                { val: '3',  label: 'Organisations' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ color: '#f97316', fontSize: '1.4rem', fontWeight: 700 }}>{s.val}</div>
                  <div style={{ color: '#6a6258', fontSize: '0.75rem', marginTop: '3px', fontFamily: 'inherit' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
              >
                Contact Me
              </a>
              <a href="/resume.pdf" download="Lawal_Ab_Oluwaseun_CV.pdf" className="btn-ghost">
                <Download size={14} /> Download CV
              </a>
            </div>
          </div>

          {/* Right 3D model — slides from right */}
          <div
            ref={modelCol.ref}
            className="about-avatar"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              opacity: modelCol.visible ? 1 : 0,
              transform: modelCol.visible ? 'translateX(0)' : 'translateX(36px)',
              transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
            }}
          >
            <ModelViewer
              src="/model.glb" width="100%" height={520}
              scale={2.6} autoRotate={true} float={true} orbitControls={true}
              style={{ height: '100%', minHeight: '320px' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-avatar {
            width: 100% !important;
            height: 320px !important;
            min-height: 320px !important;
          }
        }
      `}</style>
    </section>
  )
}
