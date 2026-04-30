'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 400)
          return 100
        }
        return prev + Math.random() * 12 + 3
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#0d0d0d' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-1/4 left-1/4 w-32 h-32 hexagon animate-float-slow opacity-20"
              style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-20 h-20 hexagon animate-float-medium opacity-15"
              style={{ background: 'linear-gradient(135deg, #fb923c, #f97316)' }}
            />
          </div>

          <motion.div
            className="relative flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo mark */}
            <div className="relative">
              <div
                className="w-16 h-16 hexagon flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
              >
                <span className="text-white font-black text-2xl" style={{ fontFamily: 'var(--font-poppins)' }}>
                  L
                </span>
              </div>
              <div
                className="absolute inset-0 hexagon animate-pulse-glow"
                style={{ background: 'rgba(249,115,22,0.2)', filter: 'blur(8px)' }}
              />
            </div>

            {/* Name */}
            <div className="text-center">
              <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-1">
                Loading Portfolio
              </p>
              <h2 className="text-white font-bold text-xl tracking-wide">
                Lawal <span className="gradient-text">A. Oluwaseun</span>
              </h2>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #f97316, #fb923c)' }}
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <p className="text-white/30 text-xs tabular-nums">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
