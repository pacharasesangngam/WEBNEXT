"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User, Menu, X, Download, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import type React from "react"
import { NAVIGATION_ITEMS, PERSONAL_INFO } from "@/lib/constants"

export default function NavbarClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const elementId = href.replace("#", "")
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  const downloadResume = () => {
    window.open("/resume.pdf", "_blank")
    setIsMobileMenuOpen(false)
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative flex items-center px-6 py-4 backdrop-blur-sm border-b border-white/10"
      >
        <Link href="/" className="flex items-center gap-2 z-10">
          <User className="w-6 h-6 text-white" />
          <span className="font-bold text-white">{PERSONAL_INFO.name}</span>
        </Link>


        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-300 hover:text-white transition-colors font-medium bg-transparent border-0 p-0 m-0"
              style={{ background: "transparent" }}
            >
              <span className="text-lg relative inline-block after:content-[''] after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-0 after:w-full">
                {item.name}
              </span>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 ml-auto z-10">
          <button
            onClick={downloadResume}
            className="group flex items-center gap-2 text-white hover:text-black bg-transparent hover:bg-white border border-white/20 hover:border-white/40 px-4 py-1.5 rounded-md transition-all duration-300"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span className="font-medium">Download CV</span>
          </button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </motion.nav>


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
                  className="text-gray-300 hover:text-white transition-colors font-medium relative after:content-[''] after:inline-block after:h-[2px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1 after:mx-auto px-0 py-1 w-full text-left"
                >
                  {item.name}
                </button>
              ))}


              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={downloadResume}
                  className="group flex items-center gap-2 w-full text-left text-white hover:text-black bg-transparent hover:bg-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-md transition-all duration-300"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span className="font-medium">Download CV</span>
                </button>

                <button
                  onClick={copyEmail}
                  className="group flex items-center gap-2 w-full text-left text-white hover:text-black bg-transparent hover:bg-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-md transition-all duration-300"
                >
                  <Mail className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span className="font-medium">{copied ? "Copied!" : "Copy Email"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
