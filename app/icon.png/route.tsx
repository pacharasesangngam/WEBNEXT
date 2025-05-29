// app/icon.png/route.tsx
import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// แก้ตรงนี้: เปลี่ยนเป็น named export "GET"
export function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "50%",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ color: "#3B82F6", fontWeight: "bold" }}>P</div>
    </div>,
    {
      ...size,
    }
  )
}
