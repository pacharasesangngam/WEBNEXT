"use client"

import { motion } from "framer-motion"
import { Code, Server } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Python",],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Skills</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Technical expertise I've developed through years of practice and real-world projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex flex-col items-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6 w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <span className="text-lg font-medium text-white mb-2">{skill}</span>
                      <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
