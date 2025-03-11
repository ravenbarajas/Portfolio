"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface InteractiveGradientProps {
  children: React.ReactNode
  className?: string
}

export const InteractiveGradient: React.FC<InteractiveGradientProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateGradient = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate percentage positions
      const px = (x / rect.width) * 100
      const py = (y / rect.height) * 100

      // Update CSS custom properties
      container.style.setProperty("--x", `${px}%`)
      container.style.setProperty("--y", `${py}%`)
    }

    container.addEventListener("mousemove", updateGradient)

    return () => {
      container.removeEventListener("mousemove", updateGradient)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={
        {
          "--x": "50%",
          "--y": "50%",
          background: `
          radial-gradient(circle 800px at var(--x) var(--y), 
            rgba(29, 78, 216, 0.15), 
            transparent 80%),
          radial-gradient(circle 600px at calc(100% - var(--x)) var(--y), 
            rgba(220, 38, 38, 0.1), 
            transparent 80%),
          radial-gradient(circle 800px at calc(100% - var(--x)) calc(100% - var(--y)), 
            rgba(202, 138, 4, 0.15), 
            transparent 80%),
          radial-gradient(circle 600px at var(--x) calc(100% - var(--y)), 
            rgba(16, 185, 129, 0.1), 
            transparent 80%),
          #ffffff
        `,
          transition: "background 0.3s ease",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

