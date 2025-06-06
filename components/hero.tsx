"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Github, Linkedin, Check } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"
import { TypingEffect } from "@/components/typing-effect"

const PERSONAL_INFO = {
  name: "Pachara",
  email: "Pacharasesangngam@gmail.com",
  github: "https://github.com/pacharasesangngam",
  linkedin:
    "https://www.linkedin.com/in/%E0%B8%9E%E0%B8%8A%E0%B8%A3-%E0%B9%80%E0%B8%AA%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%A1-2a90b5312/",
}

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setShowTooltip(false)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 1500)
    } catch {
      alert("Copy failed. Please copy manually.")
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div className="relative flex items-center justify-center">
      <button
        className="bg-transparent p-0 hover:text-white transition"
        onClick={handleCopy}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Copy Email"
      >
        {copied ? <Check className="w-6 h-6 text-green-400" /> : <Mail className="w-6 h-6 text-white" />}
      </button>
<AnimatePresence>
  {(showTooltip || copied) && (
    <motion.div
      key={copied ? "copied" : "tooltip"}
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: -10 }}
      exit={{ opacity: 0, scale: 0.85, y: 10 }}
      transition={{ type: "spring", stiffness: 350, damping: 24 }}
      className="absolute left-1/2 -translate-x-1/2 -top-4 z-20 bg-gray-900/95 px-3 py-2 rounded-lg text-xs text-white shadow-lg pointer-events-none flex flex-row items-center gap-1 whitespace-nowrap"
      style={{ display: "inline-flex", whiteSpace: "nowrap" }} 
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-400" style={{ display: "inline" }} />
          <span style={{ display: "inline" }}>คัดลอกแล้ว!</span>
        </>
      ) : <span style={{ display: "inline" }}>คัดลอกอีเมล</span>}
    </motion.div>
  )}
</AnimatePresence>
    </div>
  )
}

export default function Hero() {
  const heroTexts = [
    "Hi, I'm Pachara — Computer Science Student",
    "Eager to Learn & Build Real Projects",
    "Passionate About Web Development",
    "Exploring JavaScript, React & Next.js",
    "Ready to Take on New Challenges",
  ]

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={8} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 min-h-[200px] flex items-center justify-center">
              <TypingEffect
                texts={heroTexts}
                speed={80}
                deleteSpeed={40}
                pauseTime={3000}
                className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
              This website is built using <strong>TypeScript</strong> and the <strong>Next.js</strong> framework. It
              uses <strong>React</strong> for building interactive user interfaces, <strong>Tailwind CSS</strong> for
              styling, <strong>Framer Motion</strong> for animations, and <strong>Lucide React</strong> for icons. The
              project is structured to be clean, responsive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            <button
              onClick={() => window.open(PERSONAL_INFO.github, "_blank")}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </button>

            <button
              onClick={() => window.open(PERSONAL_INFO.linkedin, "_blank")}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </button>

            {isMobile ? (
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            ) : (
              <CopyEmailButton email={PERSONAL_INFO.email} />
            )}
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex flex-wrap justify-center gap-2 mt-6 text-sm text-gray-400"
          >
            <span className="border border-gray-500 px-2 py-1 rounded-full">Next.js</span>
            <span className="border border-gray-500 px-2 py-1 rounded-full">TypeScript</span>
            <span className="border border-gray-500 px-2 py-1 rounded-full">Tailwind CSS</span>
            <span className="border border-gray-500 px-2 py-1 rounded-full">Framer Motion</span>
          </motion.div>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-gray-400 text-sm italic mt-4"
          >
            “Learning never exhausts the mind.” — Leonardo da Vinci
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="h-[2px] w-48 bg-gradient-to-r from-white/20 via-white to-white/20 rounded-full mx-auto mt-6"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 hidden lg:block">
        <RoboAnimation />
      </div>
    </div>
  )
}
