import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certificates from "@/components/testimonials"
import Footer from "@/components/footer"
import { SparklesCore } from "@/components/sparkles"
import { NAVIGATION_ITEMS, PERSONAL_INFO } from "@/lib/constants"
import Navbar from "@/components/navbar"


export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full fixed inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar
          NAVIGATION_ITEMS={NAVIGATION_ITEMS}
          PERSONAL_INFO={PERSONAL_INFO}
          downloadResume={() => window.open("/resume.pdf", "_blank")}
          openEmail={(email, subject) => {
            const mailtoLink = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`
            window.open(mailtoLink, "_blank")
          }}
          handleNavClick={(e, href) => {
            e.preventDefault()
            const elementId = href.replace("#", "")
            const element = document.getElementById(elementId)
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          }}
        />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Footer />
      </div>
    </main>
  )
}
