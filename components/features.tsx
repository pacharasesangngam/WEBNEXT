"use client"

import { motion } from "framer-motion"
import { FileText, Presentation, Headphones, ImageIcon, Video, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: "การวิเคราะห์เอกสาร",
      description: "AI อ่านและเข้าใจเนื้อหางานวิจัยของคุณอย่างลึกซึ้ง",
      color: "from-gray-400 to-white",
    },
    {
      icon: Presentation,
      title: "สร้างงานนำเสนอ",
      description: "แปลงงานวิจัยเป็นสไลด์นำเสนอที่สวยงามและน่าสนใจ",
      color: "from-gray-300 to-gray-100",
    },
    {
      icon: Headphones,
      title: "พอดแคสต์อัตโนมัติ",
      description: "สร้างพอดแคสต์เสียงจากเนื้อหางานวิจัยของคุณ",
      color: "from-gray-200 to-white",
    },
    {
      icon: ImageIcon,
      title: "สร้างภาพประกอบ",
      description: "AI สร้างภาพและกราฟิกที่เหมาะสมกับเนื้อหา",
      color: "from-white to-gray-200",
    },
    {
      icon: Video,
      title: "วิดีโอสรุป",
      description: "แปลงงานวิจัยเป็นวิดีโอสรุปที่เข้าใจง่าย",
      color: "from-gray-400 to-gray-200",
    },
    {
      icon: BarChart,
      title: "การวิเคราะห์ข้อมูล",
      description: "สร้างกราฟและแผนภูมิจากข้อมูลในงานวิจัย",
      color: "from-gray-300 to-white",
    },
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            ฟีเจอร์ที่โดดเด่น
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            ค้นพบความสามารถที่หลากหลายของ AI ในการแปลงงานวิจัยของคุณ
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
