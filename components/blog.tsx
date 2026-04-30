'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Clock, Calendar } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'Back VS Front-end first when implementing new API calls',
    excerpt:
      'Exploring the strategic decision of whether to build your API layer or UI components first, and how this choice impacts development velocity and code quality.',
    category: 'Architecture',
    readTime: '5 min read',
    date: 'Mar 15, 2024',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #2d1200 100%)',
    accentColor: '#f97316',
    tags: ['API', 'Architecture', 'Best Practices'],
  },
  {
    id: 2,
    title: 'User-testing my Pini N\' Patches app — what I learned',
    excerpt:
      'A deep dive into the user testing process for my latest project, uncovering surprising insights about UX patterns and how real users interact with interfaces.',
    category: 'UX Research',
    readTime: '7 min read',
    date: 'Feb 28, 2024',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #12122d 100%)',
    accentColor: '#fb923c',
    tags: ['UX', 'Testing', 'Product'],
  },
  {
    id: 3,
    title: 'Why I Took a Break from Social Media as a Developer',
    excerpt:
      'Reflecting on a 30-day social media detox and its surprising impact on my productivity, creativity, and overall mental health as a software developer.',
    category: 'Lifestyle',
    readTime: '4 min read',
    date: 'Jan 20, 2024',
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #122d12 100%)',
    accentColor: '#f97316',
    tags: ['Productivity', 'Mental Health', 'Dev Life'],
  },
]

// Abstract blog post image SVGs
function BlogImage({ gradient, accentColor, index }: { gradient: string; accentColor: string; index: number }) {
  return (
    <div
      className="w-full h-48 relative overflow-hidden"
      style={{ background: gradient }}
    >
      {/* Abstract pattern */}
      <svg
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grid */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="200" stroke={`${accentColor}10`} strokeWidth="1" />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <line key={`h${i}`} x1="0" y1={i * 67} x2="400" y2={i * 67} stroke={`${accentColor}10`} strokeWidth="1" />
        ))}

        {/* Decorative elements based on index */}
        {index === 0 && (
          <>
            <circle cx="300" cy="60" r="80" fill={`${accentColor}08`} />
            <circle cx="300" cy="60" r="50" fill={`${accentColor}10`} />
            <path d="M50 150 L150 50 L250 120 L350 30" stroke={accentColor} strokeWidth="2" fill="none" strokeOpacity="0.4" />
            <rect x="60" y="80" width="80" height="8" rx="4" fill={`${accentColor}30`} />
            <rect x="60" y="96" width="120" height="6" rx="3" fill={`${accentColor}20`} />
            <rect x="60" y="110" width="100" height="6" rx="3" fill={`${accentColor}15`} />
            <text x="60" y="60" fill={accentColor} fontSize="14" fontFamily="monospace" opacity="0.6">API</text>
            <text x="100" y="60" fill="rgba(255,255,255,0.3)" fontSize="14" fontFamily="monospace">&lt;/&gt;</text>
          </>
        )}
        {index === 1 && (
          <>
            <rect x="240" y="20" width="140" height="160" rx="12" fill={`${accentColor}08`} stroke={`${accentColor}20`} strokeWidth="1" />
            <rect x="255" y="35" width="110" height="8" rx="4" fill={`${accentColor}25`} />
            <rect x="255" y="50" width="80" height="6" rx="3" fill={`${accentColor}15`} />
            <rect x="255" y="63" width="95" height="6" rx="3" fill={`${accentColor}12`} />
            <circle cx="100" cy="100" r="60" fill={`${accentColor}06`} />
            <circle cx="100" cy="100" r="40" fill={`${accentColor}08`} />
            <text x="70" y="105" fill={accentColor} fontSize="20" opacity="0.5">UX</text>
          </>
        )}
        {index === 2 && (
          <>
            <path d="M0 100 Q100 40 200 100 Q300 160 400 100" stroke={accentColor} strokeWidth="2" fill="none" strokeOpacity="0.3" />
            <path d="M0 120 Q100 60 200 120 Q300 180 400 120" stroke={accentColor} strokeWidth="1" fill="none" strokeOpacity="0.15" />
            <circle cx="200" cy="100" r="50" fill={`${accentColor}08`} />
            <text x="160" y="108" fill={accentColor} fontSize="28" opacity="0.4">✦</text>
            <rect x="40" y="60" width="60" height="6" rx="3" fill={`${accentColor}20`} />
            <rect x="40" y="74" width="80" height="5" rx="2.5" fill={`${accentColor}12`} />
          </>
        )}
      </svg>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 60%)' }}
      />

      {/* Category badge */}
      <div className="absolute top-4 left-4">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: `${accentColor}20`,
            color: accentColor,
            border: `1px solid ${accentColor}30`,
          }}
        >
          {posts[index].category}
        </span>
      </div>
    </div>
  )
}

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="blog"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="text-orange-400 text-sm font-medium tracking-[0.3em] uppercase">
              Thoughts & Insights
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
              Blog <span className="gradient-text">Posts</span>
            </h2>
            <p className="text-white/40 mt-3 max-w-md text-sm leading-relaxed">
              Sharing knowledge, experiences, and perspectives from my journey as a developer.
            </p>
          </div>

          <motion.a
            href="#"
            className="btn-outline-orange px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 self-start lg:self-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View All Posts
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              className="group rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(20,20,20,0.8)',
                border: '1px solid rgba(249,115,22,0.08)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(249,115,22,0.25)',
                boxShadow: '0 20px 50px rgba(249,115,22,0.1)',
              }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <BlogImage gradient={post.gradient} accentColor={post.accentColor} index={i} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-white/35">
                    <Calendar size={11} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/35">
                    <Clock size={11} />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-orange-300 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-white/40 leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md font-medium"
                      style={{
                        background: 'rgba(249,115,22,0.08)',
                        color: 'rgba(249,115,22,0.7)',
                        border: '1px solid rgba(249,115,22,0.12)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <motion.a
                  href="#"
                  className="flex items-center gap-2 text-sm font-semibold text-orange-400 group/link"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Read Article
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:rotate-45 transition-transform duration-200"
                  />
                </motion.a>
              </div>
            </motion.article>
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
