'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, TechVentures Inc.',
    avatar: 'SM',
    rating: 5,
    text: "Lawal delivered an exceptional e-commerce platform that exceeded all our expectations. His attention to detail, clean code, and ability to translate our vision into reality was remarkable. The site performance improved by 60% and our conversion rate doubled.",
    color: '#f97316',
  },
  {
    id: 2,
    name: 'David Okonkwo',
    role: 'Product Manager, FinEdge',
    avatar: 'DO',
    rating: 5,
    text: "Working with Lawal was a game-changer for our fintech startup. He built our entire dashboard from scratch with real-time data visualization and complex financial calculations. His technical expertise and communication throughout the project were outstanding.",
    color: '#fb923c',
  },
  {
    id: 3,
    name: 'Amara Johnson',
    role: 'Founder, EduLearn Platform',
    avatar: 'AJ',
    rating: 5,
    text: "Lawal transformed our outdated learning platform into a modern, engaging experience. Students love the new interface, and our engagement metrics are through the roof. He's not just a developer — he's a true digital craftsman who cares about the end user.",
    color: '#f97316',
  },
  {
    id: 4,
    name: 'Marcus Chen',
    role: 'CTO, CloudSync Solutions',
    avatar: 'MC',
    rating: 5,
    text: "I've worked with many developers, but Lawal stands out for his ability to understand complex requirements and deliver elegant solutions. His full-stack expertise meant we had a single point of contact for our entire project, which saved us time and money.",
    color: '#fb923c',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }}
      />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.04) 0%, transparent 70%)',
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
            Client Feedback
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl p-8 lg:p-12 relative"
                style={{
                  background: 'rgba(20,20,20,0.8)',
                  border: '1px solid rgba(249,115,22,0.12)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Quote icon */}
                <div
                  className="absolute top-8 right-8 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(249,115,22,0.1)' }}
                >
                  <Quote size={20} className="text-orange-400" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm"
                    style={{
                      background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}80)`,
                      color: 'white',
                    }}
                  >
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonials[current].name}</div>
                    <div className="text-white/40 text-sm">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      background: i === current ? '#f97316' : 'rgba(255,255,255,0.15)',
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <motion.button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  whileHover={{ background: 'rgba(249,115,22,0.1)', borderColor: 'rgba(249,115,22,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} className="text-white/60" />
                </motion.button>
                <motion.button
                  onClick={next}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(249,115,22,0.1)',
                    border: '1px solid rgba(249,115,22,0.2)',
                  }}
                  whileHover={{ background: 'rgba(249,115,22,0.2)', borderColor: 'rgba(249,115,22,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} className="text-orange-400" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)' }}
      />
    </section>
  )
}
