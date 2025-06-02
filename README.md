# WEBNEXT - คู่มือการใช้งานแบบเต็มระบบ

## 1. ภาพรวมโปรเจกต์

**WEBNEXT** คือเว็บไซต์พอร์ตโฟลิโอที่สร้างด้วย [Next.js](https://nextjs.org/) และ [Tailwind CSS](https://tailwindcss.com/)  
ออกแบบให้ปรับแต่งง่าย เหมาะกับการนำเสนอโปรไฟล์ ผลงาน และข้อมูลส่วนตัว

---

## 2. การติดตั้งและเริ่มต้นใช้งาน

### 2.1 ข้อกำหนดเบื้องต้น

- Node.js >= 18.x
- [pnpm](https://pnpm.io/) (แนะนำ) หรือ npm/yarn

### 2.2 ขั้นตอนติดตั้ง

\`\`\`bash
git clone https://github.com/pacharasesangngam/WEBNEXT.git
cd WEBNEXT
npm install-g pnpm   # ต้องติดตั้งก่อน [สำหรับคนที่ยังไม่ได้ติดตั้ง]
pnpm install         # หรือใช้ npm install
\`\`\`

### 2.3 เริ่มต้นเซิร์ฟเวอร์สำหรับพัฒนา

\`\`\`bash
pnpm dev
\`\`\`
- เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

---

## 3. โครงสร้างโปรเจกต์

\`\`\`
WEBNEXT/
│
├─ app/              # หน้าเพจและ Routing
├─ components/       # UI Components
├─ hooks/            # React Custom Hooks
├─ lib/              # Utils และ Library ภายใน
├─ public/           # รูป, favicon, assets สาธารณะ
├─ styles/           # CSS, Tailwind config
├─ .env.local        # Environment Variables (สร้างเองถ้าต้องการ)
├─ package.json
└─ README.md
\`\`\`

---

## 4. การปรับแต่งข้อมูลส่วนตัว

### 4.1 เปลี่ยนข้อมูลส่วนตัว/เรซูเม่

- เปิดไฟล์ใน `app/` หรือ `components/` (เช่น `app/page.tsx`, `components/About.tsx`)
- แก้ไขข้อมูลส่วนตัว, รายละเอียดโปรเจกต์, social links ฯลฯ ได้ตามต้องการ

### 4.2 เปลี่ยนรูป/โลโก้

- ใส่ไฟล์รูปใหม่ในโฟลเดอร์ `public/`
- อัปเดต path ในไฟล์ component ที่เรียกใช้รูป

---

## 5. การปรับแต่งธีม/สี

- แก้ไขไฟล์ `tailwind.config.js` หรือ `styles/globals.css` เพื่อเปลี่ยนสี ฟอนต์ หรือ Theme
- ใช้คลาส Tailwind ได้ตามต้องการ

---

## 6. การเพิ่มโปรเจกต์/Section

- ไปที่ไฟล์ Component ที่แสดงโปรเจกต์ เช่น `components/Projects.tsx`
- เพิ่ม/แก้ไข array หรือ object ข้อมูลโปรเจกต์

---

## 7. การใช้ Environment Variables

- สร้างไฟล์ `.env.local` ใน root directory (สำหรับเก็บ API key หรือ config ต่าง ๆ)
- ตัวอย่าง:
  \`\`\`
  NEXT_PUBLIC_API_URL=https://api.example.com
  \`\`\`
- เรียกใช้ในโค้ดได้ด้วย `process.env.NEXT_PUBLIC_API_URL`

---

## 8. การ Build สำหรับ Production

\`\`\`bash
pnpm build
pnpm start
\`\`\`
- เปิด production server ที่ [http://localhost:3000](http://localhost:3000) (ค่าเริ่มต้น)

---

## 9. การ Deploy

### 9.1 Deploy บน Vercel

1. สมัคร/เข้าสู่ระบบ Vercel
2. New Project → เลือก repo `WEBNEXT`
3. กด Deploy (Vercel จะ detect Next.js อัตโนมัติ)

### 9.2 Deploy แบบ Static (GitHub Pages ฯลฯ)

\`\`\`bash
pnpm build
pnpm export
\`\`\`
- ไฟล์ static อยู่ในโฟลเดอร์ `out/` พร้อมอัปโหลด

### 9.3 Deploy บน Server เอง

- อัปโหลดไฟล์ทั้งหมดขึ้น VPS หรือ Server ที่ติดตั้ง Node.js
- รัน `pnpm build && pnpm start`

---

## 10. การแก้ปัญหาเบื้องต้น

- **Dependency conflict**  
  ใช้ `pnpm install --force` หรือ `pnpm install --legacy-peer-deps`
- **เปลี่ยนพอร์ต**
  \`\`\`
  pnpm dev -- --port=8080
  \`\`\`
- **Hot reload ไม่ทำงาน**  
  ปิดและรัน `pnpm dev` ใหม่

---

## 11. คำสั่งที่ใช้บ่อย

\`\`\`bash
pnpm dev         # โหมดพัฒนา (localhost)
pnpm build       # สร้าง production build
pnpm start       # รัน production server
pnpm export      # สร้าง static site (ใช้กับ GitHub Pages)
pnpm lint        # ตรวจสอบโค้ด
\`\`\`

---

## 12. ติดต่อเจ้าของ

- GitHub: [pacharasesangngam](https://github.com/pacharasesangngam)

---
