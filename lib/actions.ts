"use server"

export async function downloadResume() {
  // This is a server action, but the actual download will happen client-side
  return { success: true }
}

export async function openEmail(email: string, subject?: string) {
  // This is a server action, but the actual email opening will happen client-side
  return {
    email,
    subject: subject || "",
    mailtoLink: `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`,
  }
}

export async function smoothScrollTo(elementId: string) {
  // This is a server action, but the actual scrolling will happen client-side
  return { elementId: elementId.replace("#", "") }
}
