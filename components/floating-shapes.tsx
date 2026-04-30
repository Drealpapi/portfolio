'use client'

import { motion } from 'framer-motion'

interface Shape {
  size: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  delay: number
  duration: number
  opacity: number
  rotate?: number
}

const shapes: Shape[] = [
  { size: 80, top: '10%', left: '5%', delay: 0, duration: 6, opacity: 0.25 },
  { size: 50, top: '20%', right: '8%', delay: 1.5, duration: 5, opacity: 0.2 },
  { size: 100, bottom: '15%', left: '3%', delay: 0.8, duration: 7, opacity: 0.15 },
  { size: 60, bottom: '25%', right: '5%', delay: 2, duration: 5.5, opacity: 0.2 },
  { size: 40, top: '50%', left: '15%', delay: 1, duration: 4.5, opacity: 0.15 },
  { size: 70, top: '35%', right: '12%', delay: 2.5, duration: 6.5, opacity: 0.18 },
]

export default function FloatingShapes({ count = 6 }: { count?: number }) {
  const activeShapes = shapes.slice(0, count)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute hexagon"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            bottom: shape.bottom,
            left: shape.left,
            right: shape.right,
            background: `linear-gradient(135deg, rgba(249,115,22,${shape.opacity}), rgba(234,88,12,${shape.opacity * 0.7}))`,
            filter: `blur(${shape.size > 70 ? 1 : 0}px)`,
          }}
          animate={{
            y: [0, -20, -8, -18, 0],
            rotate: [0, 5, -3, 7, 0],
            scale: [1, 1.05, 0.98, 1.03, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: '20%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: '10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  )
}
