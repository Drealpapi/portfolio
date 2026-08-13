'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Palette, Zap, Award, Download } from 'lucide-react'
import FloatingShapes from './floating-shapes'

const highlights = [
  { icon: Code2, label: 'Clean Code', desc: 'Writing maintainable, scalable solutions' },
  { icon: Palette, label: 'UI/UX Design', desc: 'Pixel-perfect, accessible interfaces' },
  { icon: Zap, label: 'Performance', desc: 'Optimized for speed and efficiency' },
  { icon: Award, label: 'Best Practices', desc: 'Industry standards & modern patterns' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      {/* Subtle section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)' }}
      />

      <FloatingShapes count={4} />

      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-orange-400 text-sm font-medium tracking-[0.3em] uppercase">
            Get to know me
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Profile image */}
          <motion.div
            className="relative"
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Image frame */}
            <div className="relative mx-auto max-w-sm">
              {/* Decorative border */}
              <div
                className="absolute -inset-3 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.3), transparent, rgba(249,115,22,0.1))',
                  padding: '1px',
                }}
              >
                <div className="w-full h-full rounded-3xl" style={{ background: '#0d0d0d' }} />
              </div>

              {/* Profile image */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/5]"
                style={{ border: '1px solid rgba(249,115,22,0.15)' }}
              >
                <img
                  src="/profile.png"
                  alt="Lawal A. Oluwaseun"
                  className="w-full h-full object-cover object-top"
                />

                {/* Orange corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                  style={{
                    background: 'linear-gradient(225deg, rgba(249,115,22,0.2) 0%, transparent 60%)',
                  }}
                />
                {/* Bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 100%)',
                  }}
                />
              </div>

              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-orange rounded-2xl px-5 py-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-2xl font-black gradient-text">2+</div>
                <div className="text-xs text-white/60">Years of Experience</div>
              </motion.div>

              {/* Projects badge */}
              <motion.div
                className="absolute -top-4 -left-4 glass-orange rounded-2xl px-5 py-3"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="text-2xl font-black gradient-text">5+</div>
                <div className="text-xs text-white/60">Projects Shipped</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            <motion.div variants={slideRight}>
              <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                I{' '}
                <span className="shimmer-text">Design, Build &amp; Secure</span>
                <br />
                real-world digital products
              </h3>
              <p className="text-white/50 leading-relaxed text-base">
                I&apos;m a Senior Full Stack Developer based in Lagos, Nigeria, with hands-on experience
                building modern web and mobile applications. I&apos;ve worked across insurance, e-commerce,
                service platforms, and fintech — translating business requirements into practical digital solutions.
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-white/40 leading-relaxed text-sm"
            >
              Beyond code, I bring an entrepreneurial mindset — co-founding DripBox.ng, delivering live
              cybersecurity training at thesocschool, and currently building the AMMC Builders Liability
              Insurance Platform. I&apos;m continuously expanding in cloud deployment, Web3 security, and
              scalable architecture.
            </motion.p>

            {/* Highlights grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-3 mt-2"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="glass rounded-2xl p-4 group card-hover"
                  style={{ border: '1px solid rgba(249,115,22,0.08)' }}
                  whileHover={{ borderColor: 'rgba(249,115,22,0.25)' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: 'rgba(249,115,22,0.1)' }}
                  >
                    <item.icon size={18} className="text-orange-400" />
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-xs text-white/40">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex gap-4 mt-2">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-orange px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Lawal_A_Oluwaseun_CV.pdf"
                className="btn-outline-orange px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)' }}
      />
    </section>
  )
}
