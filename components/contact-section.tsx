'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'seunlawal18@gmail.com', href: 'mailto:seunlawal18@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+2349021914839', href: 'tel:+2349021914839' },
  { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: '#' },
]

const socials = [
  { icon: Github, href: 'https://github.com/Drealpapi', label: 'GitHub', color: '#ffffff' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/lawal-oluwaseun-370a42268', label: 'LinkedIn', color: '#0077b5' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: '#e1306c' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1800))
    setSending(false)
    setSent(true)
    setFormState({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)' }}
      />

      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-orange-400 text-sm font-medium tracking-[0.3em] uppercase">
            Let&apos;s work together
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
            Get a <span className="gradient-text">Quote</span>
          </h2>
          <p className="text-white/40 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left — Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Avatar / brand */}
            <div className="flex items-center gap-4 mb-2">
              <div
                className="w-14 h-14 hexagon flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
              >
                <span className="text-white font-black text-xl">L</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Lawal A. Oluwaseun</div>
                <div className="text-orange-400 text-sm">Full Stack Dev & Cybersecurity Enthusiast</div>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let&apos;s create something amazing together.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.2)',
                    }}
                  >
                    <item.icon size={16} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">{item.label}</div>
                    <div className="text-sm text-white/70 group-hover:text-white transition-colors">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <div className="text-xs text-white/30 mb-3 tracking-[0.15em] uppercase">Follow me</div>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      pointerEvents: 'auto',
                    }}
                    whileHover={{
                      scale: 1.15,
                      background: `${social.color}20`,
                      borderColor: `${social.color}60`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={16} style={{ color: social.color, opacity: 0.7 }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{
                background: 'rgba(20,20,20,0.8)',
                border: '1px solid rgba(249,115,22,0.12)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)' }}
              />

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-white/50 tracking-wide">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="input-glow w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-white/50 tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="input-glow w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-white/50 tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Project Inquiry / Collaboration"
                    required
                    className="input-glow w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-white/50 tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, goals, and timeline..."
                    required
                    rows={5}
                    className="input-glow w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 transition-all duration-300 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className="btn-orange w-full py-4 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-70"
                  whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                  whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                >
                  {sent ? (
                    <>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-base"
                      >
                        ✓
                      </motion.span>
                      Message Sent!
                    </>
                  ) : sending ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
