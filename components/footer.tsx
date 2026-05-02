'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react'

function TikTokIcon({ size = 13, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/Drealpapi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/lawal-oluwaseun-370a42268', label: 'LinkedIn' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@drealpapie', label: 'TikTok' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{ background: '#080808', borderTop: '1px solid rgba(249,115,22,0.08)' }}
    >
      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0">
              <img src="/logo.png" alt="Lawal A. Oluwaseun" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-white font-bold text-base">Lawal A. Oluwaseun</span>
              <div className="text-[10px] text-orange-400/60 tracking-[0.15em] uppercase">Full Stack Dev & Cybersecurity</div>
            </div>
          </motion.div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-sm text-white/35 hover:text-orange-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{
                  scale: 1.15,
                  background: 'rgba(249,115,22,0.12)',
                  borderColor: 'rgba(249,115,22,0.3)',
                }}
                aria-label={social.label}
              >
                <social.icon size={13} className="text-white/40" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.1), transparent)' }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 flex items-center gap-1.5">
            © {new Date().getFullYear()} Lawal A. Oluwaseun. Made with{' '}
            <Heart size={11} className="text-orange-400 fill-orange-400" /> in Nigeria.
          </p>

          <p className="text-xs text-white/20">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.2)',
            }}
            whileHover={{ scale: 1.1, background: 'rgba(249,115,22,0.2)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={14} className="text-orange-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
