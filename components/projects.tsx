'use client'

import { ExternalLink, Github, BookOpen } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AMMC Insurance Platform',
    category: 'Insurance & Compliance',
    description:
      'Digital platform streamlining Builders Liability Insurance for construction projects. Centralized experience for stakeholders to submit, manage, verify, and track insurance policies.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    live: '',
    github: '',
    article: '',
    featured: true,
  },
  {
    id: 2,
    title: 'GETEASY',
    category: 'Service Aggregator',
    description:
      'Connects service providers with users seeking on-demand services. Focused on system architecture, user flow, and matching logic.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    live: '',
    github: 'https://github.com/Drealpapi/GetEasy',
    article: '',
    featured: false,
  },
  {
    id: 3,
    title: 'FutureFest',
    category: 'Events Platform',
    description:
      'Web platform for artists to promote and manage upcoming live events. Built event listing, promotion, and audience engagement features.',
    tech: ['React', 'Next.js', 'Tailwind'],
    live: 'https://v0-futurefest-clone.vercel.app/',
    github: 'https://github.com/Drealpapi',
    article: '',
    featured: false,
  },
  {
    id: 4,
    title: 'ClipClip',
    category: 'Security Research',
    description:
      'Clipboard hijacking attack demonstration targeting crypto addresses. Detects wallet prefixes and swaps them silently. Published as security awareness writeup.',
    tech: ['Python', 'Cybersecurity', 'Blockchain'],
    live: '',
    github: '',
    article: 'https://medium.com/@seunlawal18/how-clipboard-hijacking-silently-steals-crypto-and-why-youll-never-notice-f37cc3baef13',
    featured: false,
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
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const hasLink = project.live || project.github || project.article

  return (
    <div className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header bar */}
      <div
        style={{
          padding: '0.625rem 1rem',
          borderBottom: '1px solid #1e1e1e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ color: '#f97316', fontSize: '0.75rem', fontFamily: 'inherit' }}>
          {project.category}
        </span>
        {project.featured && (
          <span
            style={{
              fontSize: '0.65rem',
              padding: '2px 8px',
              border: '1px solid #f97316',
              color: '#f97316',
              fontFamily: 'inherit',
            }}
          >
            featured
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, fontFamily: 'inherit' }}>
          {project.title}
        </h3>
        <p style={{ color: '#666', fontSize: '0.8125rem', lineHeight: 1.6, fontFamily: 'inherit', flex: 1 }}>
          {project.description}
        </p>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.7rem',
                color: '#555',
                border: '1px solid #1e1e1e',
                padding: '2px 8px',
                fontFamily: 'inherit',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.375rem 0.875rem' }}>
              <ExternalLink size={12} />
              live
            </a>
          )}
          {project.article && (
            <a href={project.article} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.375rem 0.875rem' }}>
              <BookOpen size={12} />
              article
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '0.75rem', padding: '0.375rem 0.875rem' }}>
              <Github size={12} />
              github
            </a>
          )}
          {!hasLink && (
            <span style={{ color: '#333', fontSize: '0.75rem', fontFamily: 'inherit', alignSelf: 'center' }}>
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
        background: '#0a0a0a',
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
              color: '#555',
              fontSize: '0.8125rem',
              fontFamily: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              whiteSpace: 'nowrap',
              marginLeft: '1rem',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f97316')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
          >
            View all ~~&gt;
          </a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
