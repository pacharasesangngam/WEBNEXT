"use client"

import { useState, useEffect } from "react"
import { User, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"


const PERSONAL_INFO = {
  name: "Pachara",
  email: "pacharasesangngam@gmail.com",
  phone: "+66 92 350 1059",
  location: "Bangkok, Thailand",
  github: "https://github.com/pacharasesangngam",
  linkedin:
    "https://www.linkedin.com/in/%E0%B8%9E%E0%B8%8A%E0%B8%A3-%E0%B9%80%E0%B8%AA%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%A1-2a90b5312/",
}


function CopyOrMailtoEmail() {
  const [isMobile, setIsMobile] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth < 768)
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email)
      setCopied(true)
      setShowTooltip(false)
      setTimeout(() => setCopied(false), 1300)
    } catch (err) {
      alert("Copy failed. Please copy manually.")
    }
  }

  if (isMobile) {
    return (
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-left"
      >
        <Mail className="w-4 h-4" />
        <span>{PERSONAL_INFO.email}</span>
      </a>
    )
  }

  return (
    <span className="relative inline-flex items-center">
      <button
        onClick={handleCopy}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-left"
        type="button"
        style={{ cursor: "pointer" }}
      >
        <Mail className="w-4 h-4" />
        <span>{PERSONAL_INFO.email}</span>
        {copied && (
          <span className="ml-2 text-green-400 text-xs animate-fade-in-tooltip">
            คัดลอกแล้ว!
          </span>
        )}
      </button>
      {showTooltip && !copied && (
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-gray-900/95 px-3 py-2 rounded-lg text-xs text-white shadow-lg pointer-events-none flex items-center gap-2 whitespace-nowrap z-50 animate-tooltip-in"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="inline-block">
            <rect x="3" y="5" width="12" height="12" rx="3" fill="#fff" fillOpacity="0.13" />
            <rect x="7" y="1" width="10" height="12" rx="3" fill="#4fd1c5" fillOpacity="0.28" />
            <rect x="7" y="1" width="10" height="12" rx="3" stroke="#4fd1c5" strokeWidth="1"/>
          </svg>
          <span>คัดลอก</span>
        </span>
      )}
      <style>{`
        .animate-tooltip-in {
          animation: tooltip-in .23s cubic-bezier(.33,1.19,.67,1) both;
        }
        @keyframes tooltip-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98);}
          to   { opacity: 0.97; transform: translateY(0) scale(1);}
        }
        .animate-fade-in-tooltip {
          animation: fade-in-tooltip .7s;
        }
        @keyframes fade-in-tooltip {
          from { opacity: 0; transform: translateY(-6px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </span>
  )
}

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer")
}

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <User className="w-8 h-8 text-white" />
              <span className="text-white font-medium text-xl">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
                “Learning never exhausts the mind.” — Leonardo da Vinci
            </p>
            <div className="flex flex-col space-y-2">
              {/* Email copy/mailto */}
              <CopyOrMailtoEmail />
              {/* โทรศัพท์ */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-left"
              >
                <Phone className="w-4 h-4" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              {/* ที่อยู่ */}
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => smoothScrollTo("about")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("skills")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("projects")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("contact")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => openLink(PERSONAL_INFO.github)}
                  className="text-gray-300 hover:text-white transition-colors text-left flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => openLink(PERSONAL_INFO.linkedin)}
                  className="text-gray-300 hover:text-white transition-colors text-left flex items-center space-x-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </button>
              </li>
              <li>
                <CopyOrMailtoEmail />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
