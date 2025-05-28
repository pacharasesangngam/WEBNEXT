"use client"

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle, Info, Download } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, variant, ...props }) => (
        <Toast key={id} {...props} variant={variant}>
          <div className="flex items-start gap-3">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              className="mt-1"
            >
              {variant === "destructive" ? (
                <AlertCircle className="h-5 w-5 text-red-500" />
              ) : variant === "success" ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : variant === "info" ? (
                <Info className="h-5 w-5 text-blue-500" />
              ) : (
                <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <Download className="h-5 w-5 text-black" />
                </motion.div>
              )}
            </motion.div>
            <div className="grid gap-1">
              {title && (
                <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                  <ToastTitle>{title}</ToastTitle>
                </motion.div>
              )}
              {description && (
                <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <ToastDescription>{description}</ToastDescription>
                </motion.div>
              )}
            </div>
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}
