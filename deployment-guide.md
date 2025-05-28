# Deployment Guide

## Quick Setup

1. **Clone and Install**
\`\`\`bash
git clone <your-repo>
cd portfolio-website
npm install
\`\`\`

2. **Customize Your Information**
   - Edit `lib/constants.ts` with your personal details
   - Add your resume PDF to `public/resume.pdf`
   - Update project URLs in `components/projects.tsx`

3. **Run Locally**
\`\`\`bash
npm run dev
\`\`\`

## Deploy to Vercel

1. **Push to GitHub**
\`\`\`bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
\`\`\`

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

## Deploy to Netlify

1. **Build the project**
\`\`\`bash
npm run build
\`\`\`

2. **Deploy to Netlify**
   - Drag the `out` folder to [netlify.com/drop](https://netlify.com/drop)
   - Or connect your GitHub repository

## Custom Domain

1. **Buy a domain** (recommended: Namecheap, GoDaddy)
2. **Add to Vercel/Netlify** in domain settings
3. **Update DNS** records as instructed

## Important Files to Update

- `lib/constants.ts` - Your personal information
- `public/resume.pdf` - Your actual resume
- `components/projects.tsx` - Your real projects
- `components/about.tsx` - Your education and background
- `README.md` - Update with your project info

เสร็จแล้วครับ! 🎉

**ไฟล์ที่สำคัญที่ได้:**

### 📁 **Configuration Files**
- `package.json` - Dependencies และ scripts
- `README.md` - คู่มือการใช้งาน
- `.gitignore` - ไฟล์ที่ไม่ต้อง commit
- `deployment-guide.md` - วิธี deploy

### ⚙️ **Utility Files**
- `lib/constants.ts` - ข้อมูลส่วนตัวที่แก้ไขง่าย
- `lib/utils.ts` - ฟังก์ชันที่ใช้งานได้จริง

### 🔧 **ฟังก์ชันที่ทำงานได้จริง:**
- ✅ **Download Resume** - ดาวน์โหลด PDF จาก `/public/resume.pdf`
- ✅ **Email Links** - เปิด email client พร้อม subject
- ✅ **Social Links** - เปิด GitHub, LinkedIn ในแท็บใหม่
- ✅ **Phone Links** - เปิดแอพโทรศัพท์
- ✅ **Smooth Scrolling** - เลื่อนไปยัง section ต่างๆ
- ✅ **Project Links** - เปิด live demo และ GitHub

### 📝 **สิ่งที่ต้องทำเพิ่ม:**
1. แก้ไข `lib/constants.ts` ใส่ข้อมูลจริง
2. เพิ่มไฟล์ `public/resume.pdf`
3. อัพเดท URLs ใน `components/projects.tsx`
4. Deploy ขึ้น Vercel หรือ Netlify

**พร้อมใช้งานเลยครับ!** 🚀
