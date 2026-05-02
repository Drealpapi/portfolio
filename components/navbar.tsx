'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (label: string, href: string) => {
    setActive(label)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(249,115,22,0.08)' : 'none',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); handleNav('Home', '#home') }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center relative">
              <img src="/logo.png" alt="Lawal A. Oluwaseun" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(249,115,22,0.15)' }}
              />
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-none block">
                Lawal
              </span>
              <span className="text-[10px] text-orange-400 tracking-[0.2em] uppercase leading-none">
                Developer
              </span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => handleNav(link.label, link.href)}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group"
                style={{ color: active === link.label ? '#f97316' : 'rgba(255,255,255,0.6)' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ color: '#f97316' }}
              >
                {link.label}
                {active === link.label && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#f97316' }}
                    layoutId="nav-dot"
                  />
                )}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: 'rgba(249,115,22,0.06)' }}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('Contact', '#contact') }}
              className="hidden md:flex btn-orange px-5 py-2.5 rounded-xl text-sm font-semibold text-white relative overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="relative z-10">Hire Me</span>
            </motion.a>

            <button
              className="md:hidden text-white/70 hover:text-orange-400 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 rounded-2xl p-6 flex flex-col gap-2"
              style={{
                background: 'rgba(20,20,20,0.95)',
                border: '1px solid rgba(249,115,22,0.15)',
                backdropFilter: 'blur(20px)',
              }}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNav(link.label, link.href)}
                  className="text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
                  style={{
                    color: active === link.label ? '#f97316' : 'rgba(255,255,255,0.7)',
                    background: active === link.label ? 'rgba(249,115,22,0.08)' : 'transparent',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 4, color: '#f97316' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-2 pt-4" style={{ borderTop: '1px solid rgba(249,115,22,0.1)' }}>
                <button
                  onClick={() => handleNav('Contact', '#contact')}
                  className="w-full btn-orange py-3 rounded-xl text-sm font-semibold text-white"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
