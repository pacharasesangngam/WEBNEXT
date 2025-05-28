import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Pachara - Full Stack Developer"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "sans-serif", // Using system font instead of custom font
      }}
    >
      <div style={{ fontSize: "80px", fontWeight: "bold" }}>Pachara</div>
      <div style={{ fontSize: "40px", color: "#3B82F6", marginTop: "20px" }}>Full Stack Developer</div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
