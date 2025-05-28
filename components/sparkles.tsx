"use client"

import { useEffect, useRef, useState } from "react"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

export const SparklesCore = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className = "h-full w-full",
  particleColor = "#FFFFFF",
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === "undefined") return

    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let animationFrameId: number

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // เพิ่ม mouse event listener ตรงนี้
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      vx: number
      vy: number
      baseVx: number
      baseVy: number
      opacity: number
      twinkleSpeed: number
      twinkleOffset: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * (maxSize - minSize) + minSize
        this.baseSize = this.size
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = (Math.random() - 0.5) * 0.2
        this.baseVx = this.vx
        this.baseVy = this.vy
        this.opacity = Math.random() * 0.5 + 0.5 // ความโปร่งใส 0.5-1.0
        this.twinkleSpeed = Math.random() * 0.02 + 0.01 // ความเร็วกระพริบ
        this.twinkleOffset = Math.random() * Math.PI * 2 // เริ่มต้นกระพริบต่างกัน
      }

      update() {
        // รีเซ็ตความเร็วก่อน
        this.vx = this.baseVx
        this.vy = this.baseVy

        // คำนวณระยะห่างจากเมาส์
        const mouseX = mouseRef.current.x
        const mouseY = mouseRef.current.y
        const dx = this.x - mouseX
        const dy = this.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // ถ้าเมาส์ใกล้ ให้ผลักออก
        if (distance < 80 && distance > 0) {
          const pushForce = ((80 - distance) / 80) * 3
          this.vx += (dx / distance) * pushForce
          this.vy += (dy / distance) * pushForce
        }

        // อัพเดทตำแหน่ง
        this.x += this.vx
        this.y += this.vy

        // อัพเดทการกระพริบ
        this.twinkleOffset += this.twinkleSpeed
        this.opacity = 0.3 + Math.sin(this.twinkleOffset) * 0.4 + 0.3 // กระพริบระหว่าง 0.3-1.0
        this.size = this.baseSize + Math.sin(this.twinkleOffset * 1.5) * 0.3 // ขนาดเปลี่ยนเล็กน้อย

        // ห่อรอบขอบจอ
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return

        // แปลงสีเป็น rgba เพื่อใส่ opacity
        const r = Number.parseInt(particleColor.slice(1, 3), 16)
        const g = Number.parseInt(particleColor.slice(3, 5), 16)
        const b = Number.parseInt(particleColor.slice(5, 7), 16)

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // เพิ่มเอฟเฟกต์เรืองแสงเมื่อกระพริบแรง
        if (this.opacity > 0.8) {
          ctx.shadowBlur = 10
          ctx.shadowColor = particleColor
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.3})`
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }
    }

    const init = () => {
      particles = []
      for (let i = 0; i < particleDensity; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (typeof window === "undefined") return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      init()
    }

    init()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [maxSize, minSize, particleColor, particleDensity])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        background,
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  )
}
