'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const onMouseMove = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    const onMouseEnterLink = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(2.5)'
      dot.style.opacity = '0.7'
    }

    const onMouseLeaveLink = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)'
      dot.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMouseMove)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    const observer = new MutationObserver(() => {
      const newLinks = document.querySelectorAll('a, button, [role="button"]')
      newLinks.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink)
        el.removeEventListener('mouseleave', onMouseLeaveLink)
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
    }
  }, [])

  return <div ref={dotRef} className="cursor-dot" />
}
