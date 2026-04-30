'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, BookOpen } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'ClipClip',
    category: 'Security Research',
    description:
      'Documented and demonstrated a clipboard hijacking attack targeting cryptocurrency addresses. The tool detects wallet address prefixes (e.g. bc1) and silently swaps them — exploiting the fact that victims rarely verify all 26–35 characters. Published as a security awareness writeup.',
    tech: ['Python', 'Cybersecurity', 'Blockchain', 'Security Research'],
    color: '#f97316',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.05) 100%)',
    live: '',
    github: '',
    article: 'https://medium.com/@seunlawal18/how-clipboard-hijacking-silently-steals-crypto-and-why-youll-never-notice-f37cc3baef13',
  },
  {
    id: 2,
    title: 'DripBox.ng',
    category: 'E-Commerce Platform',
    description:
      'Co-founded and launched a Nigerian e-commerce store. Handled product selection, UX design, and retail operations. The venture ran for a year before closing — a valuable lesson in product-market fit and early-stage execution.',
    tech: ['E-Commerce', 'UX Design', 'Business'],
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, rgba(251,146,60,0.12) 0%, rgba(249,115,22,0.04) 100%)',
    live: '',
    github: '',
    article: '',
  },
  {
    id: 3,
    title: 'FutureFestcln',
    category: 'Events Platform',
    description:
      'A web platform for artists to promote and manage upcoming live events. Focused on UI design, event discovery, and audience engagement. Currently in prototype stage with ongoing feature development.',
    tech: ['React', 'Next.js', 'Tailwind'],
    color: '#f97316',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(251,146,60,0.04) 100%)',
    live: 'https://v0-futurefest-clone.vercel.app/',
    github: 'https://github.com/Drealpapi',
    article: '',
  },
  {
    id: 4,
    title: 'GETEASY',
    category: 'Service Aggregator',
    description:
      'A platform connecting service providers with users seeking on-demand services. Working on system architecture, user flow, and matching logic. Focused on simplifying service discovery and accessibility.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, rgba(251,146,60,0.1) 0%, rgba(249,115,22,0.03) 100%)',
    live: '',
    github: 'https://github.com/Drealpapi/GetEasy',
    article: '',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const hasAnyLink = project.live || project.github || project.article

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden"
      style={{
        background: project.gradient,
        border: '1px solid rgba(249,115,22,0.1)',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -8,
        borderColor: 'rgba(249,115,22,0.3)',
        boxShadow: '0 20px 60px rgba(249,115,22,0.12), 0 0 0 1px rgba(249,115,22,0.2)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)`,
        }}
      />

      {/* Card number */}
      <div
        className="absolute top-4 right-4 text-5xl font-black opacity-5 select-none"
        style={{ color: project.color }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="p-6 lg:p-7">
        {/* Category */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
            style={{
              background: 'rgba(249,115,22,0.1)',
              color: '#f97316',
              border: '1px solid rgba(249,115,22,0.2)',
            }}
          >
            {project.category}
          </span>
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight size={18} className="text-orange-400" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/45 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-lg font-medium"
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange flex-1 py-2.5 rounded-xl text-sm font-semibold text-white text-center flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={14} />
              View Live
            </motion.a>
          )}
          {project.article && (
            <motion.a
              href={project.article}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange flex-1 py-2.5 rounded-xl text-sm font-semibold text-white text-center flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <BookOpen size={14} />
              Read Article
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-outline-orange rounded-xl flex items-center justify-center gap-2 ${
                project.live || project.article
                  ? 'w-10 h-10 flex-shrink-0'
                  : 'flex-1 py-2.5 text-sm font-semibold'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View on GitHub"
            >
              <Github size={16} />
              {!project.live && !project.article && <span>View on GitHub</span>}
            </motion.a>
          )}
          {!hasAnyLink && (
            <div
              className="flex-1 py-2.5 rounded-xl text-sm font-medium text-center"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.2)',
              }}
            >
              No longer active
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }}
      />

      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="text-orange-400 text-sm font-medium tracking-[0.3em] uppercase">
              My Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-white/40 mt-3 max-w-md text-sm leading-relaxed">
              A selection of projects spanning web development, cybersecurity research, and entrepreneurship.
            </p>
          </div>

          <motion.a
            href="https://github.com/Drealpapi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-orange px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 self-start lg:self-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} />
            View All on GitHub
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)' }}
      />
    </section>
  )
}
