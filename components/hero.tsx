'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ChevronDown, Download } from 'lucide-react'
import FloatingShapes from './floating-shapes'

function TikTokIcon({ size = 15, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

const roles = ['Senior Full Stack Developer', 'Cybersecurity Enthusiast', 'React & React Native Dev', 'Problem Solver']

const socialLinks = [
  { icon: Github, href: 'https://github.com/Drealpapi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/lawal-oluwaseun-370a42268', label: 'LinkedIn' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@drealpapie', label: 'TikTok' },
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
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial gradient center glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Floating shapes */}
      <FloatingShapes count={6} />

      {/* Border frame (like reference image) */}
      <div
        className="absolute inset-4 lg:inset-8 rounded-3xl pointer-events-none"
        style={{ border: '1px solid rgba(249,115,22,0.12)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            {/* Social links - vertical sidebar */}
            <motion.div
              className="hidden lg:flex flex-col gap-4 fixed left-6 top-1/2 -translate-y-1/2 z-40"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center group"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    pointerEvents: 'auto',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{
                    scale: 1.15,
                    background: 'rgba(249,115,22,0.15)',
                    borderColor: 'rgba(249,115,22,0.4)',
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={15} className="text-white/50 group-hover:text-orange-400 transition-colors" />
                </motion.a>
              ))}
              <div className="w-px h-16 mx-auto" style={{ background: 'linear-gradient(to bottom, rgba(249,115,22,0.4), transparent)' }} />
            </motion.div>

            {/* Main text */}
            <div className="lg:pl-16">
              {/* Hello badge */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-8 h-px" style={{ background: '#f97316' }} />
                <span className="text-orange-400 text-sm font-medium tracking-[0.2em] uppercase">
                  Hello — Welcome
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-white">I&apos;m </span>
                <span className="gradient-text">Lawal A.</span>
                <br />
                <span className="text-white">Oluwaseun</span>
              </motion.h1>

              {/* Typing role */}
              <motion.div
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <span
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {displayed}
                </span>
                <span className="typing-cursor" />
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="text-base lg:text-lg max-w-md leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
              >
                Building modern web &amp; mobile apps across{' '}
                <span className="text-orange-400 font-medium">insurance, fintech, and service platforms</span>{' '}
                — with{' '}
                <span className="text-orange-400 font-medium">cybersecurity</span> at the core.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.button
                  onClick={scrollDown}
                  className="btn-orange px-8 py-4 rounded-2xl text-base font-semibold text-white relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <ChevronDown size={18} />
                  </span>
                </motion.button>

                <motion.a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-outline-orange px-8 py-4 rounded-2xl text-base font-semibold"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Projects
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  download="Lawal_A_Oluwaseun_CV.pdf"
                  className="btn-outline-orange px-8 py-4 rounded-2xl text-base font-semibold flex items-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={18} />
                  CV
                </motion.a>
              </motion.div>

              {/* Currently working on badge */}
              <motion.div
                className="flex items-center gap-2 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.5 }}
              >
                <span
                  className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: 'rgba(249,115,22,0.1)',
                    border: '1px solid rgba(249,115,22,0.25)',
                    color: '#fb923c',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  Currently working on: AMMC Insurance Platform
                </span>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex gap-8 mt-2 pt-8"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {[
                  { value: '3+', label: 'Years Exp.' },
                  { value: '5+', label: 'Projects' },
                  { value: '3+', label: 'Organisations' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black gradient-text">{stat.value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right — Profile Photo */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.1)',
                }}
              />

              {/* Decorative corner brackets */}
              <div
                className="absolute -top-3 -left-3 w-10 h-10 pointer-events-none"
                style={{
                  borderTop: '2px solid #f97316',
                  borderLeft: '2px solid #f97316',
                  borderRadius: '4px 0 0 0',
                }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-10 h-10 pointer-events-none"
                style={{
                  borderBottom: '2px solid #f97316',
                  borderRight: '2px solid #f97316',
                  borderRadius: '0 0 4px 0',
                }}
              />
              <div
                className="absolute -top-3 -right-3 w-10 h-10 pointer-events-none"
                style={{
                  borderTop: '2px solid rgba(249,115,22,0.3)',
                  borderRight: '2px solid rgba(249,115,22,0.3)',
                  borderRadius: '0 4px 0 0',
                }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-10 h-10 pointer-events-none"
                style={{
                  borderBottom: '2px solid rgba(249,115,22,0.3)',
                  borderLeft: '2px solid rgba(249,115,22,0.3)',
                  borderRadius: '0 0 0 4px',
                }}
              />

              {/* Photo container */}
              <motion.div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid rgba(249,115,22,0.2)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(249,115,22,0.08)',
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src="/profile.png"
                  alt="Lawal Ab Oluwaseun"
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: '4/5' }}
                />
                {/* Subtle orange bottom gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 100%)',
                  }}
                />
              </motion.div>

              {/* Floating badge — experience */}
              <motion.div
                className="absolute -bottom-5 -left-5 glass-orange rounded-2xl px-4 py-2.5"
                style={{ boxShadow: '0 8px 32px rgba(249,115,22,0.2)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="text-xl font-black gradient-text">2+</div>
                <div className="text-[10px] text-white/60 leading-tight">Yrs Experience</div>
              </motion.div>

              {/* Floating badge — status */}
              <motion.div
                className="absolute -top-5 -right-5 glass-orange rounded-2xl px-4 py-2.5"
                style={{ boxShadow: '0 8px 32px rgba(249,115,22,0.2)' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white/80">Available</span>
                </div>
                <div className="text-[10px] text-white/40 mt-0.5">for hire</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll down"
      >
        <span className="text-xs text-white/30 tracking-[0.2em] uppercase group-hover:text-orange-400 transition-colors">
          Scroll
        </span>
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: '1.5px solid rgba(255,255,255,0.15)' }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#f97316' }}
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.button>
    </section>
  )
}
