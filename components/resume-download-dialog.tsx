"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Globe, Languages } from "lucide-react"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

interface ResumeDownloadDialogProps {
  triggerClassName?: string
  buttonSize?: "default" | "sm" | "lg" | "icon"
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  buttonText?: string
  showIcon?: boolean
  iconPosition?: "left" | "right"
  footerMode?: boolean
}

export function ResumeDownloadDialog({
  triggerClassName,
  buttonSize = "lg",
  buttonVariant = "default",
  buttonText = "Download Resume",
  showIcon = true,
  iconPosition = "left",
  footerMode = false,
}: ResumeDownloadDialogProps) {
  const [open, setOpen] = useState(false)
  const [downloading, setDownloading] = useState<"none" | "en" | "th">("none")
  const { toast } = useToast()

  const downloadResume = (lang: "en" | "th" = "en") => {
    // Set downloading state
    setDownloading(lang)

    // Define file paths and names based on language
    const filePath = lang === "en" ? "/resume-en.pdf" : "/resume-th.pdf"
    const fileName = lang === "en" ? "Pachara_Resume_EN.pdf" : "Pachara_Resume_TH.pdf"
    const langName = lang === "en" ? "English" : "Thai"

    // Create a link element
    const link = document.createElement("a")
    link.href = filePath
    link.setAttribute("download", fileName)
    link.setAttribute("target", "_blank")

    // Append to the document, click it, and remove it
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show toast notification with animation
    toast({
      title: `${langName} Resume Downloaded!`,
      description: `Your resume has been downloaded successfully.`,
      variant: "success", // Use success variant for green styling
      duration: 3000, // 3 seconds
    })

    // Reset downloading state and close dialog after a short delay
    setTimeout(() => {
      setDownloading("none")
      setOpen(false)
    }, 1000)
  }

  const renderTriggerButton = () => {
    if (footerMode) {
      return (
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`text-gray-300 hover:text-white transition-colors text-left flex items-center ${triggerClassName || ""}`}
          onClick={() => setOpen(true)}
        >
          {showIcon && iconPosition === "left" && <Download className="w-4 h-4 mr-2" />}
          <span>{buttonText}</span>
          {showIcon && iconPosition === "right" && <Download className="w-4 h-4 ml-2" />}
        </motion.button>
      )
    }

    return (
      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          size={buttonSize}
          variant={buttonVariant}
          className={`${
            buttonVariant === "default" ? "bg-white hover:bg-gray-200 text-black" : ""
          } ${triggerClassName || ""}`}
          onClick={() => setOpen(true)}
        >
          {showIcon && iconPosition === "left" && <Download className="mr-2 h-6 w-6" />}
          {buttonText}
          {showIcon && iconPosition === "right" && <Download className="ml-2 h-6 w-6" />}
        </Button>
      </motion.div>
    )
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 0.2,
      },
    },
    downloading: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 0.8,
      },
    },
    success: {
      scale: [1, 1.3, 1],
      transition: { duration: 0.5 },
    },
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{renderTriggerButton()}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black/90 border border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold mb-4">Select Resume Language</DialogTitle>
        </DialogHeader>
        <motion.div
          className="grid grid-cols-2 gap-4 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Button
              className="bg-white hover:bg-gray-200 text-black flex items-center justify-center py-8 w-full h-full relative"
              onClick={() => downloadResume("en")}
              disabled={downloading !== "none"}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  variants={iconVariants}
                  animate={downloading === "en" ? "downloading" : downloading === "none" ? "visible" : ""}
                >
                  {downloading === "en" ? (
                    <Download className="w-12 h-12 mb-2 text-blue-600" />
                  ) : (
                    <Globe className="w-12 h-12 mb-2 text-blue-600" />
                  )}
                </motion.div>
                <span className="font-medium">English</span>
              </div>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              className="bg-white hover:bg-gray-200 text-black flex items-center justify-center py-8 w-full h-full"
              onClick={() => downloadResume("th")}
              disabled={downloading !== "none"}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  variants={iconVariants}
                  animate={downloading === "th" ? "downloading" : downloading === "none" ? "visible" : ""}
                >
                  {downloading === "th" ? (
                    <Download className="w-12 h-12 mb-2 text-red-600" />
                  ) : (
                    <Languages className="w-12 h-12 mb-2 text-red-600" />
                  )}
                </motion.div>
                <span className="font-medium">ภาษาไทย</span>
              </div>
            </Button>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
