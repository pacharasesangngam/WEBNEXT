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
      description:
        "โปรเเกรมเเยกคุกกีั Roblox เขียนด้วย Python เอาไว้ใช้เเยก user:password:cookie ออกมาเป็น 2 ไฟล์ 1.ไฟล์ user:password 2.ไฟล์ cookie โปรเเกรมสามารถดาวโหลดได้เป็นไฟล์.exe ",
      image: "/images/cookietool.png",
      technologies: ["Python"],
      githubUrl: "https://github.com/pacharasesangngam/cookie_splitter",
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
      image: "/images/discordshop.png",
      technologies: ["Python","Discord.js","SQLite3"],
      githubUrl: "https://github.com/yourusername/task-management",
      icon: Code,
      featured: true,
      complexity: 4,
      duration: "1 เดือน",
      teamSize: 1,
    },
    {
      title: "Roblox Shop Website ",
      description: "เว็บไซต์ขายไอเท็มจากในเกม มีฟังก์ชันหลัก ได้แก่ เข้าสู่ระบบ/สมัครสมาชิก เพิ่ม/ลบรายการสินค้า ตระกร้าสินค้า เติมเงิน ชำระเงิน และประวัติการซื้อขาย",
      mediaType: "video",
      mediaUrl: "/videos/RobloxVid.mp4",
      technologies: ["React", "Node.js", "Html", "Css", "Js"],
      githubUrl: "https://github.com/yourusername/weather-app",
      icon: Smartphone,
      featured: false,
      complexity: 5,
      duration: "1 month",
      teamSize: 3,
    },
    {
      title: "เว็บดู LOG ตัวละคร Roblox",
      description: " เป็นเว็บที่เอาไว้ติดตามข้อมูลของตัวละคร Roblox ที่เล่นอยู่ใช้ เเละติดตามเครื่อง PC เเต่ละเครื่อง ",
      image: "/images/logweb.gif",
      technologies: ["React", "Python", "Flask"],
      githubUrl: "https://github.com/yourusername/data-dashboard",
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
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
          </motion.p>
        </div>

        {/* คำแนะนำสำหรับขนาดภาพ */}
        {/* <div className="mb-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-300 text-sm text-center">
            📸 <strong>ข้อกำหนดภาพ:</strong> ภาพทุกรูปต้องมีขนาด <strong>940 x 400 พิกเซล</strong> เท่านั้น เพื่อให้การแสดงผลสม่ำเสมอ
          </p>
        </div> */}

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
                    {project.mediaType === "video" ? (
                        <video
                          src={project.mediaUrl}
                          className="absolute inset-0 w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
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
                      )}


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
                      variant="ghost"
                      className="text-white hover:bg-white/10 border border-white/20"
                      onClick={() => openLink(project.githubUrl)}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
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
