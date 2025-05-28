"use client"

import { Button } from "@/components/ui/button"
import { User, Menu, Download } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"

const PERSONAL_INFO = {
  name: "Pachara",
  email: "Pacharasesangngam@gmail.com",
}

const NAVIGATION_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

const downloadResume = () => {
  window.open("/resume.pdf", "_blank")
}

const openEmail = (email: string, subject?: string) => {
  const mailtoLink = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`
  window.open(mailtoLink, "_blank")
}

const handleNavClick = (e: React.MouseEvent, elementId: string) => {
  e.preventDefault()
  smoothScrollTo(elementId.replace("#", ""))
}

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <User className="w-8 h-8 text-white" />
        <span className="text-white font-medium text-xl">{PERSONAL_INFO.name}</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        {NAVIGATION_ITEMS.map((item) => (
          <NavLink key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-4">
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

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({
  href,
  children,
  onClick,
}: { href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors relative group cursor-pointer bg-transparent border-none"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
    </button>
  )
}
