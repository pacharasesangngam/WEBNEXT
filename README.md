# 🌟 วิธีเตรียมไฟล์ดาวน์โหลดสำหรับโปรเจค

## 📂 โครงสร้างโฟลเดอร์ที่จำเป็น

โปรเจคนี้ต้องมีโฟลเดอร์ต่อไปนี้:

```bash
portfolio-website/
├── public/
│   ├── images/           # เก็บรูปภาพโปรเจค
│   │   ├── ecommerce-project.png
│   │   ├── task-management.png
│   │   ├── weather-app.png
│   │   └── data-dashboard.png
│   │
│   ├── downloads/        # เก็บไฟล์ ZIP สำหรับดาวน์โหลด
│   │   ├── ecommerce-platform.zip
│   │   ├── task-management.zip
│   │   ├── weather-app.zip
│   │   └── data-dashboard.zip
│   │
│   └── resume.pdf        # เรซูเม่ของคุณ
│
├── components/           # React Components
├── app/                  # Next.js App Router
└── ...


## 📦 วิธีเตรียมไฟล์ ZIP สำหรับดาวน์โหลด

1. **สร้างโฟลเดอร์** `public/downloads/` ในโปรเจคของคุณ

2. **เตรียมโค้ดโปรเจค** ที่ต้องการให้ผู้อื่นดาวน์โหลด:
   - ลบไฟล์ที่ไม่จำเป็น (node_modules, .env, ฯลฯ)
   - เพิ่มไฟล์ README.md ที่อธิบายวิธีติดตั้งและใช้งาน
   - ตรวจสอบว่าไม่มีข้อมูลส่วนตัวหรือ API keys

3. **บีบอัดเป็นไฟล์ ZIP**:
   - Windows: คลิกขวาที่โฟลเดอร์ > Send to > Compressed (zipped) folder
   - Mac: คลิกขวาที่โฟลเดอร์ > Compress
   - Linux: `zip -r project-name.zip project-folder/`

4. **ตั้งชื่อไฟล์** ให้สื่อความหมาย เช่น `ecommerce-platform.zip`

5. **วางไฟล์ ZIP** ในโฟลเดอร์ `public/downloads/`

## 🔗 การเชื่อมโยงในโค้ด

ในไฟล์ `components/projects.tsx` ให้เพิ่ม property `downloadUrl` สำหรับแต่ละโปรเจค:

\`\`\`javascript
{
  // ข้อมูลอื่นๆ ของโปรเจค...
  downloadUrl: "/downloads/ecommerce-platform.zip",
}
\`\`\`

## 🚀 ทดสอบการดาวน์โหลด

1. รันเซิร์ฟเวอร์: `npm run dev`
2. เปิดเว็บไซต์ที่ localhost:3000
3. ไปที่ส่วน Projects และคลิกปุ่ม "Download"
4. ตรวจสอบว่าไฟล์ ZIP ดาวน์โหลดได้ถูกต้อง

## 📝 หมายเหตุ

- ไฟล์ ZIP ขนาดใหญ่อาจทำให้โปรเจคของคุณมีขนาดใหญ่ขึ้น
- พิจารณาใช้บริการเก็บไฟล์ภายนอก (เช่น GitHub Releases) สำหรับไฟล์ขนาดใหญ่
- อย่าลืมอัพเดทลิงก์ดาวน์โหลดเมื่อคุณอัพเดทโค้ดโปรเจค
