'use client'

import { ExternalLink, Github, BookOpen } from 'lucide-react'

// Screenshot via microlink — free, no key needed
const shot = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

const projects = [
  {
    id: 1,
    title: 'AMMC Insurance Platform',
    category: 'Insurance & Compliance',
    description:
      'Digital platform streamlining Builders Liability Insurance for construction projects. Centralized experience to submit, manage, verify, and track insurance policies.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    live: 'https://www.ammcbuildersinsurance.com',
    github: '',
    article: '',
    featured: true,
    preview: shot('https://www.ammcbuildersinsurance.com'),
  },
  {
    id: 2,
    title: 'FutureFest',
    category: 'Events Platform',
    description:
      'Web platform for artists to promote and manage upcoming live events. Built event listing, promotion, and audience engagement features.',
    tech: ['React', 'Next.js', 'Tailwind'],
    live: 'https://v0-futurefest-clone.vercel.app/',
    github: 'https://github.com/Drealpapi',
    article: '',
    featured: false,
    preview: shot('https://v0-futurefest-clone.vercel.app/'),
  },
  {
    id: 3,
    title: 'ClipClip',
    category: 'Security Research',
    description:
      'Clipboard hijacking attack demonstration targeting crypto addresses. Detects wallet prefixes and swaps them silently. Published as security awareness writeup.',
    tech: ['Python', 'Cybersecurity', 'Blockchain'],
    live: '',
    github: '',
    article: 'https://medium.com/@seunlawal18/how-clipboard-hijacking-silently-steals-crypto-and-why-youll-never-notice-f37cc3baef13',
    featured: false,
    preview: shot('https://medium.com/@seunlawal18/how-clipboard-hijacking-silently-steals-crypto-and-why-youll-never-notice-f37cc3baef13'),
  },
  {
    id: 4,
    title: 'GETEASY',
    category: 'Service Aggregator',
    description:
      'Connects service providers with users seeking on-demand services. Focused on system architecture, user flow, and matching logic.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    live: '',
    github: 'https://github.com/Drealpapi/GetEasy',
    article: '',
    featured: false,
    preview: null,
  },
  {
    id: 5,
    title: 'DripBox.ng',
    category: 'E-Commerce',
    description:
      'Co-founded and launched a Nigerian e-commerce store. Handled product selection, UX design, and retail operations for a year.',
    tech: ['E-Commerce', 'UX Design'],
    live: '',
    github: '',
    article: '',
    featured: false,
    preview: null,
  },
]

function PreviewPlaceholder({ title, category }: { title: string; category: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: '160px',
        background: '#0d0d0d',
        borderBottom: '1px solid #1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid lines decoration */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5,
      }} />
      <span style={{ color: '#2a2a2a', fontSize: '2rem', zIndex: 1 }}>⬛</span>
      <span style={{ color: '#333', fontSize: '0.7rem', fontFamily: 'inherit', zIndex: 1 }}>{category}</span>
    </div>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const hasLink = project.live || project.github || project.article
  const primaryLink = project.live || project.article || project.github || ''

  return (
    <div className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>

      {/* Preview image */}
      {project.preview ? (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', overflow: 'hidden', borderBottom: '1px solid #1a1a1a' }}
        >
          <img
            src={project.preview}
            alt={`${project.title} preview`}
            style={{
              width: '100%',
              height: '160px',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onError={(e) => {
              // fallback to placeholder on error
              const wrapper = e.currentTarget.parentElement
              if (wrapper) {
                wrapper.innerHTML = `
                  <div style="width:100%;height:160px;background:#0d0d0d;border-bottom:1px solid #1a1a1a;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
                    <div style="position:absolute;inset:0;background-image:linear-gradient(#1a1a1a 1px,transparent 1px),linear-gradient(90deg,#1a1a1a 1px,transparent 1px);background-size:40px 40px;opacity:0.5;"></div>
                    <span style="color:#2e2e2e;font-size:0.75rem;font-family:monospace;z-index:1;">${project.category}</span>
                  </div>
                `
              }
            }}
          />
        </a>
      ) : (
        <PreviewPlaceholder title={project.title} category={project.category} />
      )}

      {/* Header bar */}
      <div
        style={{
          padding: '0.5rem 1rem',
          borderBottom: '1px solid #1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ color: '#f97316', fontSize: '0.7rem', fontFamily: 'inherit' }}>
          {project.category}
        </span>
        {project.featured && (
          <span style={{
            fontSize: '0.6rem', padding: '1px 7px',
            border: '1px solid #f97316', color: '#f97316', fontFamily: 'inherit',
          }}>
            featured
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '0.875rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        <h3 style={{ color: '#fff', fontSize: '0.9375rem', fontWeight: 600, fontFamily: 'inherit' }}>
          {project.title}
        </h3>
        <p style={{ color: '#666', fontSize: '0.8rem', lineHeight: 1.6, fontFamily: 'inherit', flex: 1 }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              fontSize: '0.68rem', color: '#555',
              border: '1px solid #1e1e1e', padding: '1px 7px', fontFamily: 'inherit',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ fontSize: '0.72rem', padding: '0.3rem 0.8rem' }}>
              <ExternalLink size={11} /> live
            </a>
          )}
          {project.article && (
            <a href={project.article} target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ fontSize: '0.72rem', padding: '0.3rem 0.8rem' }}>
              <BookOpen size={11} /> article
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="btn-ghost" style={{ fontSize: '0.72rem', padding: '0.3rem 0.8rem' }}>
              <Github size={11} /> github
            </a>
          )}
          {!hasLink && (
            <span style={{ color: '#333', fontSize: '0.72rem', fontFamily: 'inherit', alignSelf: 'center' }}>
              — in development
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: 'transparent',
        padding: '5rem 1.5rem',
        borderTop: '1px solid #111',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section heading */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <h2 className="section-heading">
              <span className="hash">#</span>projects
            </h2>
            <div className="section-divider" style={{ maxWidth: '200px' }} />
          </div>
          <a
            href="https://github.com/Drealpapi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#555', fontSize: '0.8125rem', fontFamily: 'inherit',
              textDecoration: 'none', whiteSpace: 'nowrap', marginLeft: '1rem',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f97316')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
          >
            View all ~~&gt;
          </a>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
        }}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
