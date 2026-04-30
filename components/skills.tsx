'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiJavascript,
  SiReact,
  SiGithub,
  SiFigma,
  SiLinux,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiSolidity,
} from 'react-icons/si'

function ReactNativeIcon({ size = 30, color = '#61dafb' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47m-7.07-7.14c-.63.35-.82 1.82-.31 3.96.77-.11 1.62-.25 2.4-.36.48-.67.99-1.31 1.51-1.9-1.59-1.5-2.97-2.08-3.6-1.7M19.43 15c.32-.87.43-1.79.43-2.71 0-.91-.11-1.83-.43-2.71-.51-1.42-1.5-2.5-2.71-3.14-.63-.35-1.5-.2-2.5.35.52.59 1.03 1.23 1.51 1.9.78.11 1.63.25 2.4.36.51 2.14.32 3.61-.31 3.96-.63.38-2.01-.2-3.6-1.7.52.59 1.03 1.23 1.51 1.9.78.11 1.63.25 2.4.36.51-2.14.32-3.61-.31-3.96m-1.4-8.14c-1.59-1.5-2.97-2.08-3.6-1.7-.63.35-.82 1.82-.31 3.96.77-.11 1.62-.25 2.4-.36.48-.67.99-1.31 1.51-1.9M12 6.5c-.39 0-.74.04-1.08.1.35.47.69.97 1.08 1.5.39-.53.73-1.03 1.08-1.5C12.74 6.54 12.39 6.5 12 6.5m0 11c.39 0 .74-.04 1.08-.1-.35-.47-.69-.97-1.08-1.5-.39.53-.73 1.03-1.08 1.5.34.06.69.1 1.08.1" />
    </svg>
  )
}

function MetasploitIcon({ size = 30, color = '#2596be' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
    </svg>
  )
}

const techIcons: Array<{
  name: string
  Icon: React.ComponentType<{ size?: number; color?: string }>
  color: string
}> = [
  { name: 'JavaScript',   Icon: SiJavascript,    color: '#f7df1e' },
  { name: 'TypeScript',   Icon: SiTypescript,    color: '#3178c6' },
  { name: 'React',        Icon: SiReact,         color: '#61dafb' },
  { name: 'React Native', Icon: ReactNativeIcon, color: '#61dafb' },
  { name: 'Next.js',      Icon: SiNextdotjs,     color: '#ffffff' },
  { name: 'Tailwind',     Icon: SiTailwindcss,   color: '#38bdf8' },
  { name: 'Node.js',      Icon: SiNodedotjs,     color: '#6cc24a' },
  { name: 'Python',       Icon: SiPython,        color: '#3776ab' },
  { name: 'MongoDB',      Icon: SiMongodb,       color: '#47a248' },
  { name: 'Solidity',     Icon: SiSolidity,      color: '#a0aec0' },
  { name: 'GitHub',       Icon: SiGithub,        color: '#ffffff' },
  { name: 'Linux / Kali', Icon: SiLinux,         color: '#fcc624' },
  { name: 'Figma',        Icon: SiFigma,         color: '#f24e1e' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }}
      />

      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-orange-400 text-sm font-medium tracking-[0.3em] uppercase">
            What I work with
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/40 mt-3 max-w-md mx-auto text-sm">
            Tools and technologies I use to build real-world products.
          </p>
        </motion.div>

        {/* Icon grid */}
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6 justify-items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-2 group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <tech.Icon size={28} color={tech.color} />
              </div>
              <span className="text-[10px] text-white/40 group-hover:text-white/70 transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-white/25 text-sm mb-4">Always learning, always growing</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.4))' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#f97316' }} />
            <div className="w-16 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(249,115,22,0.4))' }} />
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)' }}
      />
    </section>
  )
}
