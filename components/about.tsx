"use client"

import { motion } from "framer-motion"

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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
              Hi, I’m Pachara, a computer science student passionate about programming and software development.
              Currently, I am learning modern web development technologies such as JavaScript, React, and Next.js to build high-quality and practical projects.
              In addition, I am interested in system design, database management, and best practices in software development to broaden my skills and prepare myself for a professional career.
              My goal is to apply my knowledge and skills to real-world projects while continuously improving to become a skilled software developer in the future.
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
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
                <p className="text-gray-300 mb-2">
                  <strong>Bachelor of Computer Science</strong>
                </p>
                <p className="text-gray-400 mb-4">University Name • 2022-2026</p>
                <p className="text-gray-300">
                  Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Web
                  Development
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Interests</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Full-stack Web Development</li>
                  <li>• UI/UX Design</li>
                  <li>• Open Source Contribution</li>
                  <li>• Machine Learning</li>
                  <li>• Mobile App Development</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
