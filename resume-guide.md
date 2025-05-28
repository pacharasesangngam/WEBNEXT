# 📄 วิธีการเตรียมและใช้งานไฟล์ Resume หลายภาษา

## 🚀 การเตรียมไฟล์ Resume

1. **สร้างไฟล์ Resume ในรูปแบบ PDF**
   - ใช้โปรแกรม Microsoft Word, Google Docs, หรือ Canva
   - ออกแบบให้ดูเป็นมืออาชีพและอ่านง่าย
   - บันทึกเป็นไฟล์ PDF คุณภาพสูง

2. **เตรียมไฟล์ Resume ทั้งภาษาไทยและภาษาอังกฤษ**
   - สร้าง Resume ภาษาอังกฤษ และบันทึกเป็น `resume-en.pdf`
   - สร้าง Resume ภาษาไทย และบันทึกเป็น `resume-th.pdf`

3. **วางไฟล์ในโฟลเดอร์ที่ถูกต้อง**
   - วางไฟล์ทั้งหมดในโฟลเดอร์ `public/` ของโปรเจค
   - เส้นทางสมบูรณ์คือ:
     - `public/resume-en.pdf` (ภาษาอังกฤษ)
     - `public/resume-th.pdf` (ภาษาไทย)

## 🔗 การเชื่อมโยงในโค้ด

ไฟล์ Resume ถูกเชื่อมโยงในโค้ดสองส่วนหลัก:

### 1. ในส่วน Hero (หน้าแรก)

ในไฟล์ `components/hero.tsx` มีฟังก์ชัน `downloadResume()` ที่รับพารามิเตอร์ `lang` เพื่อเลือกภาษา:

\`\`\`javascript
const downloadResume = (lang: 'en' | 'th' = 'en') => {
  // Track download event if needed
  console.log(`Resume download clicked: ${lang} version`)

  // Define file paths and names based on language
  const filePath = lang === 'en' ? '/resume-en.pdf' : '/resume-th.pdf'
  const fileName = lang === 'en' ? 'Pachara_Resume_EN.pdf' : 'Pachara_Resume_TH.pdf'

  // Create a link element
  const link = document.createElement("a")
  link.href = filePath
  link.setAttribute("download", fileName)
  link.setAttribute("target", "_blank")

  // Append to the document, click it, and remove it
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
\`\`\`

### 2. ในส่วน Footer (ท้ายเว็บไซต์)

ในไฟล์ `components/footer.tsx` มีเมนู dropdown สำหรับเลือกภาษาของ Resume:

\`\`\`jsx
<DropdownMenu>
  <DropdownMenuTrigger className="text-gray-300 hover:text-white transition-colors text-left flex items-center">
    <Download className="w-4 h-4 mr-2" />
    Resume
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="bg-white/90 backdrop-blur-sm border-white/20">
    <DropdownMenuItem 
      className="cursor-pointer hover:bg-gray-200 focus:bg-gray-200 text-black"
      onClick={() => downloadResume('en')}
    >
      <span className="flex items-center">
        <img src="/images/en-flag.png" alt="English" className="w-4 h-4 mr-2" />
        English Version
      </span>
    </DropdownMenuItem>
    <DropdownMenuItem 
      className="cursor-pointer hover:bg-gray-200 focus:bg-gray-200 text-black"
      onClick={() => downloadResume('th')}
    >
      <span className="flex items-center">
        <img src="/images/th-flag.png" alt="Thai" className="w-4 h-4 mr-2" />
        ภาษาไทย (Thai Version)
      </span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
\`\`\`

## 🔄 การอัพเดทไฟล์ Resume

เมื่อต้องการอัพเดท Resume:

1. สร้างไฟล์ PDF ใหม่
2. ตั้งชื่อเป็น `resume-en.pdf` (ภาษาอังกฤษ) หรือ `resume-th.pdf` (ภาษาไทย)
3. แทนที่ไฟล์เดิมในโฟลเดอร์ `public/`
4. ไม่จำเป็นต้องแก้ไขโค้ดใดๆ เพราะชื่อไฟล์ยังคงเดิม

## 💡 เคล็ดลับ

1. **ขนาดไฟล์**
   - พยายามทำให้ไฟล์ PDF มีขนาดเล็ก (ไม่เกิน 2MB)
   - ใช้เครื่องมือบีบอัด PDF ออนไลน์หากจำเป็น

2. **การตั้งค่าการดาวน์โหลด**
   - คุณสามารถเปลี่ยนชื่อไฟล์ที่ผู้ใช้จะดาวน์โหลดได้โดยแก้ไขตัวแปร `fileName` ในฟังก์ชัน `downloadResume()`

3. **การติดตามการดาวน์โหลด**
   - ฟังก์ชัน `downloadResume()` มีการบันทึกการดาวน์โหลดด้วย `console.log`
   - คุณสามารถเพิ่มโค้ดการติดตามที่ซับซ้อนขึ้น เช่น Google Analytics

4. **การเพิ่มภาษาอื่นๆ**
   - หากต้องการเพิ่มภาษาอื่นๆ เช่น ญี่ปุ่น หรือจีน:
     1. เพิ่มไฟล์ PDF ใหม่ เช่น `resume-jp.pdf`
     2. แก้ไขฟังก์ชัน `downloadResume()` ให้รองรับภาษาใหม่
     3. เพิ่มตัวเลือกในเมนู dropdown

## 📋 รายการตรวจสอบ

- [ ] สร้างไฟล์ Resume ภาษาอังกฤษในรูปแบบ PDF
- [ ] สร้างไฟล์ Resume ภาษาไทยในรูปแบบ PDF
- [ ] ตั้งชื่อไฟล์เป็น `resume-en.pdf` และ `resume-th.pdf`
- [ ] วางไฟล์ในโฟลเดอร์ `public/`
- [ ] ตรวจสอบว่าธงชาติแสดงผลถูกต้อง
- [ ] ทดสอบการดาวน์โหลดทั้งสองภาษาจากปุ่มในส่วน Hero
- [ ] ทดสอบการดาวน์โหลดทั้งสองภาษาจากเมนูในส่วน Footer
