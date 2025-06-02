"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, FileCheck, CheckCircle, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Certificates() {
  const certificates = [
     {
      name: "Oracle Certified Foundations Associate I",
      issuer: "Oracle Fusion Cloud Applications ERP Certified Foundations Associate",
      date: "May 2025",
      logo: "/placeholder.svg?height=60&width=60",
      certificateUrl: "/certificates/eCertificate3.pdf",
    },
    {
      name: "Certified Of Completion",
      issuer: "Oracle Cloud Success Navigator Essentials",
      date: "May 2025",
      logo: "/placeholder.svg?height=60&width=60",
      certificateUrl: "/certificates/eCertificate1.pdf",
    },
    {
      name: "Oracle Certified Foundations Associate II",
      issuer: "Oracle Fusion Cloud Applications HCM Certified Foundations Associate",
      date: "May 2025",
      logo: "/placeholder.svg?height=60&width=60",
      certificateUrl: "/certificates/eCertificate2.pdf",
    },
   
  ]

  const openCertificate = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Certificates
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            Industry-recognized certifications that validate my technical expertise
          </motion.p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full"
                style={{ borderRadius: "0.75rem" }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                      <Award className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{certificate.name}</h3>
                  <p className="text-gray-300 mb-4">{certificate.issuer}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Issued: {certificate.date}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-white hover:bg-gray-200 text-black"
                    onClick={() => openCertificate(certificate.certificateUrl)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
