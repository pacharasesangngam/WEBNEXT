"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText, Code, Database, Globe, Laptop, Server, Smartphone, Monitor } from "lucide-react"

const icons = [
  <FileText key="filetext" className="w-8 h-8 text-white/30" />,
  <Code key="code" className="w-8 h-8 text-white/30" />,
  <Database key="database" className="w-8 h-8 text-white/30" />,
  <Globe key="globe" className="w-8 h-8 text-white/30" />,
  <Laptop key="laptop" className="w-8 h-8 text-white/30" />,
  <Server key="server" className="w-8 h-8 text-white/30" />,
  <Smartphone key="smartphone" className="w-8 h-8 text-white/30" />,
  <Monitor key="monitor" className="w-8 h-8 text-white/30" />,
]

function genRandoms(count: number, width: number, height: number) {
  return Array.from({ length: count }).map(() => {
    // random position, animate, duration
    const x1 = Math.random() * width
    const y1 = Math.random() * height
    const x2 = Math.random() * width
    const y2 = Math.random() * height
    const x3 = Math.random() * width
    const y3 = Math.random() * height
    const rotate = [0, 180, 360]
    const duration = 20 + Math.random() * 10
    return { x: [x1, x2, x3], y: [y1, y2, y3], rotate, duration }
  })
}

export function FloatingPaper({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [papers, setPapers] = useState<{ x: number[], y: number[], rotate: number[], duration: number }[]>([])

  // Set dimensions and regenerate randoms on resize
  useEffect(() => {
    function updateSize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Generate random papers when dimension or count changes
  useEffect(() => {
    setPapers(genRandoms(count, dimensions.width, dimensions.height))
  }, [count, dimensions.width, dimensions.height])

  // Render nothing (avoid hydration mismatch) if papers are not ready
  if (papers.length === 0) return null

  return (
    <div className="relative w-full h-full">
      {papers.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: p.x[0], y: p.y[0] }}
          animate={{ x: p.x, y: p.y, rotate: p.rotate }}
          transition={{
            duration: p.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            {icons[i % icons.length]}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
