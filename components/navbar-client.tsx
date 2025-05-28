"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User, Menu, Download, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import type React from "react"
import { NAVIGATION_ITEMS, PERSONAL_INFO } from "@/lib/constants"

export default function NavbarClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const elementId = href.replace("#", "")
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMobileMenuOpen(false)
  }

  const downloadResume = () => {
    window.open("/resume.pdf", "_blank")
    setIsMobileMenuOpen(false)
  }

  const openEmail = (email: string, subject?: string) => {
    const mailtoLink = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`
    window.open(mailtoLink, "_blank")
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
      >
        <Link href="/" className="flex items-center gap-2">
          <User className="w-6 h-6 text-white" />
          <span className="font-bold text-white">{PERSONAL_INFO.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300"
            onClick={downloadResume}
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
          <Button
            className="bg-white hover:bg-gray-200 text-black"
            onClick={() => openEmail(PERSONAL_INFO.email, "Let's work together!")}
          >
            Hire Me
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[73px] left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 z-50"
          >
            <div className="flex flex-col p-4 space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-white transition-colors text-left py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Button
                  variant="ghost"
                  className="w-full text-white hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300"
                  onClick={downloadResume}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <Button
                  className="w-full bg-white hover:bg-gray-200 text-black"
                  onClick={() => openEmail(PERSONAL_INFO.email, "Let's work together!")}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
