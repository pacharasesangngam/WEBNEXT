"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText, Code, Database, Globe, Laptop, Server, Smartphone, Monitor } from "lucide-react"

export function FloatingPaper({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-full">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            {(() => {
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
              return icons[i % icons.length]
            })()}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
