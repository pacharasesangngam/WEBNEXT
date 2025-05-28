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
        fontSize: 100,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "30px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ color: "#3B82F6", fontWeight: "bold" }}>P</div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
