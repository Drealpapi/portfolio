'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ChevronDown, Download } from 'lucide-react'
import FloatingShapes from './floating-shapes'

const roles = ['Full Stack Developer', 'Cybersecurity Enthusiast', 'React Specialist', 'Problem Solver']

const socialLinks = [
  { icon: Github, href: 'https://github.com/Drealpapi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/lawal-oluwaseun-370a42268', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

function DeveloperIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto"
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main illustration container */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* SVG Developer Character */}
        <svg viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {/* Glow behind character */}
          <ellipse cx="200" cy="380" rx="120" ry="20" fill="rgba(249,115,22,0.15)" />

          {/* Body */}
          <rect x="140" y="200" width="120" height="130" rx="20" fill="#1a1a1a" />
          <rect x="140" y="200" width="120" height="130" rx="20" fill="url(#bodyGrad)" />

          {/* Hoodie details */}
          <path d="M140 220 Q200 240 260 220" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5" fill="none" />
          <rect x="185" y="200" width="30" height="25" rx="5" fill="#111" />

          {/* Head */}
          <circle cx="200" cy="160" r="55" fill="#2a2a2a" />
          <circle cx="200" cy="160" r="55" fill="url(#headGrad)" />

          {/* Face */}
          <circle cx="183" cy="158" r="8" fill="#111" />
          <circle cx="217" cy="158" r="8" fill="#111" />
          <circle cx="185" cy="156" r="3" fill="white" opacity="0.8" />
          <circle cx="219" cy="156" r="3" fill="white" opacity="0.8" />
          {/* Smile */}
          <path d="M188 172 Q200 182 212 172" stroke="rgba(249,115,22,0.8)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Headphones */}
          <path d="M148 155 Q148 105 200 105 Q252 105 252 155" stroke="#f97316" strokeWidth="6" fill="none" strokeLinecap="round" />
          <rect x="138" y="148" width="18" height="28" rx="9" fill="#f97316" />
          <rect x="244" y="148" width="18" height="28" rx="9" fill="#f97316" />
          <rect x="140" y="152" width="14" height="20" rx="7" fill="#ea580c" />
          <rect x="246" y="152" width="14" height="20" rx="7" fill="#ea580c" />

          {/* Arms */}
          {/* Left arm */}
          <path d="M140 220 Q100 250 90 290" stroke="#2a2a2a" strokeWidth="28" strokeLinecap="round" fill="none" />
          <path d="M140 220 Q100 250 90 290" stroke="url(#armGrad)" strokeWidth="26" strokeLinecap="round" fill="none" />
          {/* Right arm */}
          <path d="M260 220 Q300 250 310 290" stroke="#2a2a2a" strokeWidth="28" strokeLinecap="round" fill="none" />
          <path d="M260 220 Q300 250 310 290" stroke="url(#armGrad)" strokeWidth="26" strokeLinecap="round" fill="none" />

          {/* Laptop */}
          <rect x="80" y="285" width="240" height="5" rx="2.5" fill="#333" />
          <rect x="95" y="220" width="210" height="140" rx="12" fill="#111" />
          <rect x="95" y="220" width="210" height="140" rx="12" fill="url(#laptopGrad)" />
          <rect x="100" y="225" width="200" height="130" rx="10" fill="#0a0a0a" />

          {/* Screen content */}
          <rect x="110" y="235" width="80" height="8" rx="4" fill="rgba(249,115,22,0.6)" />
          <rect x="110" y="250" width="120" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
          <rect x="110" y="262" width="100" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
          <rect x="110" y="274" width="140" height="5" rx="2.5" fill="rgba(249,115,22,0.3)" />
          <rect x="110" y="286" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
          <rect x="110" y="298" width="110" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
          <rect x="110" y="310" width="130" height="5" rx="2.5" fill="rgba(249,115,22,0.2)" />
          <rect x="110" y="322" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />

          {/* Cursor blink */}
          <motion.rect
            x="182"
            y="235"
            width="3"
            height="8"
            rx="1.5"
            fill="#f97316"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />

          {/* Legs */}
          <path d="M165 330 Q155 370 150 400" stroke="#1a1a1a" strokeWidth="30" strokeLinecap="round" fill="none" />
          <path d="M235 330 Q245 370 250 400" stroke="#1a1a1a" strokeWidth="30" strokeLinecap="round" fill="none" />
          {/* Shoes */}
          <ellipse cx="148" cy="402" rx="22" ry="10" fill="#111" />
          <ellipse cx="252" cy="402" rx="22" ry="10" fill="#111" />

          {/* Floating code snippets */}
          <motion.g
            animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <rect x="290" y="140" width="90" height="50" rx="10" fill="rgba(20,20,20,0.9)" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
            <text x="300" y="158" fill="#f97316" fontSize="9" fontFamily="monospace">const dev =</text>
            <text x="300" y="172" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace">  &quot;awesome&quot;</text>
          </motion.g>

          <motion.g
            animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <rect x="20" y="160" width="80" height="40" rx="10" fill="rgba(20,20,20,0.9)" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
            <text x="30" y="178" fill="#f97316" fontSize="9" fontFamily="monospace">&lt;React /&gt;</text>
            <text x="30" y="192" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">Next.js</text>
          </motion.g>

          {/* Gradients */}
          <defs>
            <linearGradient id="bodyGrad" x1="140" y1="200" x2="260" y2="330" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </linearGradient>
            <linearGradient id="headGrad" x1="145" y1="105" x2="255" y2="215" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3a3a3a" />
              <stop offset="100%" stopColor="#222" />
            </linearGradient>
            <linearGradient id="armGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </linearGradient>
            <linearGradient id="laptopGrad" x1="95" y1="220" x2="305" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(249,115,22,0.05)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Orbiting elements */}
      <motion.div
        className="absolute top-8 right-4 w-12 h-12 hexagon"
        style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
        animate={{ rotate: 360, y: [0, -10, 0] }}
        transition={{ rotate: { duration: 8, repeat: Infinity, ease: 'linear' }, y: { duration: 3, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-16 left-4 w-8 h-8 hexagon"
        style={{ background: 'rgba(249,115,22,0.4)' }}
        animate={{ rotate: -360, y: [0, 10, 0] }}
        transition={{ rotate: { duration: 6, repeat: Infinity, ease: 'linear' }, y: { duration: 4, repeat: Infinity } }}
      />
    </motion.div>
  )
}

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
                Crafting pixel-perfect digital experiences that blend{' '}
                <span className="text-orange-400 font-medium">elegant design</span> with{' '}
                <span className="text-orange-400 font-medium">cybersecurity awareness</span>.
                Turning ideas into reality, one line at a time.
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

              {/* Stats */}
              <motion.div
                className="flex gap-8 mt-10 pt-8"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {[
                  { value: '3+', label: 'Years Exp.' },
                  { value: '20+', label: 'Projects' },
                  { value: '10+', label: 'Clients' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black gradient-text">{stat.value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="flex items-center justify-center">
            <DeveloperIllustration />
          </div>
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
