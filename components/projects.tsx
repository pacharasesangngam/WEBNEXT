"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Database, Smartphone, Globe, Users, Clock, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer")
}

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
      image: "/images/ecommerce-project.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://your-ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      downloadUrl: "/downloads/ecommerce-platform.zip",
      icon: Globe,
      featured: true,
      complexity: 5,
      duration: "3 months",
      teamSize: 1,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/images/task-management.png",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "https://your-taskapp-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/task-management",
      downloadUrl: "/downloads/task-management.zip",
      icon: Code,
      featured: true,
      complexity: 4,
      duration: "2 months",
      teamSize: 2,
    },
    {
      title: "Weather Mobile App",
      description: "A cross-platform mobile app providing weather forecasts with location-based services.",
      image: "/images/weather-app.png",
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
      image: "/images/data-dashboard.png",
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
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
            className="text-white hover:bg-white/10 border border-white/20"
            onClick={() => openLink("https://github.com/yourusername")}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
