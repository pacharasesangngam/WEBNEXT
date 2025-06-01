"use client"

import { motion } from "framer-motion"
import { BookOpen, Star, Code2, PenTool, Github, Brain, Smartphone } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">About Me</h2>
            {/* Gradient Divider */}

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Hi, I’m Pachara, a computer science student who loves coding and web development.
              I enjoy working with React, Next.js, Node, and Python, and always look for ways to grow and apply my skills to real-world projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/2  border border-white/10 shadow-lg p-8 "
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-6 h-6 text-teal-300" />
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300 mb-2">
                  <strong>Bangkok university</strong>
                </p>
                <p className="text-gray-300 mb-2"> <strong>• 2023-Present</strong></p>
                <p className="text-gray-400 mb-4">Technology and Innovation faculty Major of Computer Science</p>
                <p className="text-gray-300">
                  Hands-on experience with Node.js, React, Python, UX/UI design.
                </p>
              </motion.div>

              {/* Interests Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/2  border border-white/10 shadow-lg p-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-300" />
                  <h3 className="text-2xl font-semibold text-white">Interests</h3>
                </div>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-blue-400" /> Full-stack Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-pink-300" /> UI/UX Design
                  </li>
                  <li className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-200" /> Open Source Contribution
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-violet-400" /> Machine Learning
                  </li>            
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
