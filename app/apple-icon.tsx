import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 80,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "30px",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
      }}
    >
      <div>PS</div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
