'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Clock, Calendar } from 'lucide-react'

// Screenshot via microlink — free, no key needed
const shot = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

const MEDIUM_PROFILE = 'https://medium.com/@seunlawal18'

const posts = [
  {
    id: 1,
    title: 'How Clipboard Hijacking Silently Steals Crypto — And Why You\'ll Never Notice',
    excerpt:
      'A deep-dive security writeup on clipboard hijacking attacks targeting crypto wallet addresses. Demonstrates how malware silently swaps wallet prefixes and what developers and users can do to stay protected.',
    category: 'Cybersecurity',
    readTime: '6 min read',
    date: 'Mar 2024',
    tags: ['Security', 'Crypto', 'Malware'],
    href: 'https://medium.com/@seunlawal18/how-clipboard-hijacking-silently-steals-crypto-and-why-youll-never-notice-f37cc3baef13',
    preview: shot('https://medium.com/@seunlawal18/how-clipboard-hijacking-silently-steals-crypto-and-why-youll-never-notice-f37cc3baef13'),
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #2d1200 100%)',
    accentColor: '#f97316',
  },
  {
    id: 2,
    title: 'Back VS Front-end First When Implementing New API Calls',
    excerpt:
      'Exploring the strategic decision of whether to build your API layer or UI components first, and how this choice impacts development velocity and code quality across different project types.',
    category: 'Architecture',
    readTime: '5 min read',
    date: 'Feb 2024',
    tags: ['API', 'Architecture', 'Best Practices'],
    href: MEDIUM_PROFILE,
    preview: shot(MEDIUM_PROFILE),
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #12122d 100%)',
    accentColor: '#fb923c',
  },
  {
    id: 3,
    title: 'Why I Took a Break from Social Media as a Developer',
    excerpt:
      'Reflecting on a 30-day social media detox and its surprising impact on my productivity, creativity, and overall mental health as a software developer.',
    category: 'Lifestyle',
    readTime: '4 min read',
    date: 'Jan 2024',
    tags: ['Productivity', 'Mental Health', 'Dev Life'],
    href: MEDIUM_PROFILE,
    preview: shot(MEDIUM_PROFILE),
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #122d12 100%)',
    accentColor: '#f97316',
  },
]

function PreviewImage({
  src,
  alt,
  gradient,
  accentColor,
  category,
}: {
  src: string
  alt: string
  gradient: string
  accentColor: string
  category: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="w-full h-48 relative overflow-hidden"
        style={{ background: gradient }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${accentColor}10 1px, transparent 1px), linear-gradient(90deg, ${accentColor}10 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 60%)' }}
        />
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: `${accentColor}20`,
              color: accentColor,
              border: `1px solid ${accentColor}30`,
            }}
          >
            {category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span style={{ color: accentColor, opacity: 0.3, fontSize: '2rem' }}>✦</span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-48 relative overflow-hidden" style={{ background: gradient }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          display: 'block',
        }}
        onError={() => setFailed(true)}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 55%)' }}
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
          {category}
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
              Thoughts &amp; Insights
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
              Blog <span className="gradient-text">Posts</span>
            </h2>
            <p className="text-white/40 mt-3 max-w-md text-sm leading-relaxed">
              Sharing knowledge, experiences, and perspectives from my journey as a developer.
            </p>
          </div>

          <motion.a
            href={MEDIUM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start lg:self-auto flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
            style={{
              border: '1px solid rgba(249,115,22,0.4)',
              color: '#f97316',
              background: 'transparent',
              textDecoration: 'none',
            }}
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(249,115,22,0.08)' }}
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
              {/* Preview image */}
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
                tabIndex={-1}
                aria-hidden="true"
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PreviewImage
                    src={post.preview}
                    alt={`${post.title} preview`}
                    gradient={post.gradient}
                    accentColor={post.accentColor}
                    category={post.category}
                  />
                </motion.div>
              </a>

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
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-orange-400 group/link"
                  style={{ textDecoration: 'none' }}
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
