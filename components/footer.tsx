"use client"

import { User, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { ResumeDownloadDialog } from "@/components/resume-download-dialog"

const PERSONAL_INFO = {
  name: "Pachara",
  email: "Pacharasesangngam@gmail.com",
  phone: "+66 92 350 1059",
  location: "Bangkok, Thailand",
  github: "https://github.com/pacharasesangngam",
  linkedin:
    "https://www.linkedin.com/in/%E0%B8%9E%E0%B8%8A%E0%B8%A3-%E0%B9%80%E0%B8%AA%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%A1-2a90b5312/",
}

const openEmail = (email: string) => {
  window.open(`mailto:${email}`, "_blank")
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
              Passionate Full-Stack Developer ready to contribute to innovative projects and grow with your team.
            </p>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => openEmail(PERSONAL_INFO.email)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-left"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </button>
              <button
                onClick={() => openLink(`tel:${PERSONAL_INFO.phone}`)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-left"
              >
                <Phone className="w-4 h-4" />
                <span>{PERSONAL_INFO.phone}</span>
              </button>
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
              <li>
                <ResumeDownloadDialog footerMode={true} buttonText="Resume" />
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
                <button
                  onClick={() => openEmail(PERSONAL_INFO.email)}
                  className="text-gray-300 hover:text-white transition-colors text-left flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </button>
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
