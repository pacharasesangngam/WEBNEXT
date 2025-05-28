"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"
import { TypingEffect } from "@/components/typing-effect"

const PERSONAL_INFO = {
  name: "Pachara",
  email: "Pacharasesangngam@gmail.com",
  github: "https://github.com/pacharasesangngam",
  linkedin: "https://linkedin.com/in/yourusername",
}

const downloadResume = () => {
  window.open("/resume.pdf", "_blank")
}

const openEmail = (email: string, subject?: string) => {
  const mailtoLink = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`
  window.open(mailtoLink, "_blank")
}

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer")
}

export default function Hero() {
  const heroTexts = [
    "Hi, I'm a Fullstack Developer",
    "สวัสดีครับ ผมเป็น Fullstack Developer",
    "Building Amazing Web Applications",
    "สร้างเว็บแอปพลิเคชันที่น่าทึ่ง",
    "Frontend & Backend Expert",
    "ผู้เชี่ยวชาญ Frontend และ Backend",
    "Let's Create Something Great Together",
    "มาสร้างสิ่งยิ่งใหญ่ด้วยกัน",
  ]

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Floating papers background */}
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
              ผมเป็น Fullstack Developer ที่มีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันครบวงจร ตั้งแต่ Frontend ที่สวยงาม ไปจนถึง Backend
              ที่มีประสิทธิภาพ พร้อมสร้างโซลูชันที่ตอบโจทย์ธุรกิจของคุณ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Button
              size="lg"
              className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-6 w-6" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              onClick={() => openEmail(PERSONAL_INFO.email, "Let's work together!")}
            >
              <Mail className="mr-2 h-6 w-6" />
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            <button
              onClick={() => openLink(PERSONAL_INFO.github)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </button>
            <button
              onClick={() => openLink(PERSONAL_INFO.linkedin)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </button>
            <button
              onClick={() => openEmail(PERSONAL_INFO.email)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96 hidden lg:block">
        <RoboAnimation />
      </div>
    </div>
  )
}
