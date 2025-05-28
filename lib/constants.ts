export const PERSONAL_INFO = {
  name: "Pachara",
  title: "Full-Stack Developer",
  email: "Pacharasesangngam@gmail.com",
  phone: "+66 92 350 1059",
  location: "Bangkok, Thailand",
  github: "https://github.com/pacharasesangngam",
  linkedin: "https://www.linkedin.com/in/%E0%B8%9E%E0%B8%8A%E0%B8%A3-%E0%B9%80%E0%B8%AA%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%A1-2a90b5312/",
  resume: "/resume.pdf",
}

export const SOCIAL_LINKS = {
  github: PERSONAL_INFO.github,
  linkedin: PERSONAL_INFO.linkedin,
  email: `mailto:${PERSONAL_INFO.email}`,
  phone: `tel:${PERSONAL_INFO.phone}`,
}

export const NAVIGATION_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]
