"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Database, Smartphone, Users, Clock, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer")
}

export default function Projects() {
const projects = [
  {
    title: "Cookie Tool",
    description: (
      <>
        โปรแกรมแยกคุกกี้ Roblox เขียนด้วย Python เอาไว้ใช้แยก user:password:cookie ออกมาเป็น 2 ไฟล์ 1.ไฟล์ user:password 2.ไฟล์ cookie{" "}
        <span className="font-bold text-yellow-400">วิธีใช้ดูที่ github</span>
      </>
    ),
    image: "/images/cookietool.png", // ต้องเป็นขนาด 940x400 px
    technologies: ["Python"],
    liveUrl: "https://your-ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/pacharasesangngam/cookie_splitter",
    downloadUrl: "/downloads/cookie_tool.zip",
    icon: Code,
    featured: true,
    complexity: 2,
    duration: "2 วัน",
    teamSize: 1,
  },
    {
      title: "BOT ขายของ DISCORD",
      description:
        "เป็น BOT ที่สามารถเติมเงิน เช็คช้อมูล ซื้อไอดี ดูประวัติต่างๆได้ สามารถเติมเงินด้วยซองอังเปา การทำงานในการเติมเงินจะเปิดหน้าเว็บเเล้วใส่เบอร์ให้ออโต",
      image: "/images/discordshop.png", // ต้องเป็นขนาด 940x400 px
      technologies: ["Discord.js", "Node.js", "MongoDB"],
      liveUrl: "https://your-taskapp-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/task-management",
      downloadUrl: "/downloads/task-management.zip",
      icon: Code,
      featured: true,
      complexity: 4,
      duration: "1 เดือน",
      teamSize: 1,
    },
    {
      title: "Weather Mobile App",
      description: "A cross-platform mobile app providing weather forecasts with location-based services.",
      image: "/images/weather-app.png", // ต้องเป็นขนาด 940x400 px
      technologies: ["React Native", "Expo", "Weather API", "Redux"],
      liveUrl: "https://expo.dev/@yourusername/weather-app",
      githubUrl: "https://github.com/yourusername/weather-app",
      downloadUrl: "/downloads/weather-app.zip",
      icon: Smartphone,
      featured: false,
      complexity: 3,
      duration: "1 month",
      teamSize: 1,
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets with charts and real-time analytics.",
      image: "/images/data-dashboard.png", // ต้องเป็นขนาด 940x400 px
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://your-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/data-dashboard",
      downloadUrl: "/downloads/data-dashboard.zip",
      icon: Database,
      featured: false,
      complexity: 4,
      duration: "2.5 months",
      teamSize: 3,
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            Here are some of my recent projects. Rate them based on complexity, design, and functionality!
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? "lg:col-span-1" : "lg:col-span-1"}
            >
              <Card
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden h-full"
                style={{ borderRadius: "0.75rem" }}
              >
                <div className="relative overflow-hidden">
                  {/* Fixed aspect ratio container for 940x400 (2.35:1) */}
                  <div className="relative w-full" style={{ aspectRatio: "940/400" }}>
                    <img
                      src={project.image || "/placeholder.svg?height=400&width=940&text=940x400"}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{
                        minHeight: "100%",
                        minWidth: "100%",
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=400&width=940&text=940x400+Required"
                      }}
                    />

                    {/* Overlay สำหรับตรวจสอบขนาดภาพ */}
                    <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                        <span className="text-white text-xs">940×400</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-white text-sm font-medium">Featured</span>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>
                        {project.teamSize} {project.teamSize === 1 ? "person" : "people"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>Complexity: {project.complexity}/5</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      className="bg-white hover:bg-gray-200 text-black"
                      onClick={() => openLink(project.liveUrl)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/10 border border-white/20"
                      onClick={() => openLink(project.githubUrl)}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/10 border border-white/20"
                      onClick={() => openLink(project.downloadUrl)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="ghost"
            className="
              bg-white text-black border border-white/20
              hover:bg-gray-100 hover:text-black
              transition-all duration-200
            "
            onClick={() => openLink("https://github.com/pacharasesangngam")}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
