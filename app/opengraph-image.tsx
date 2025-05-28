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
  // Font
  const interSemiBold = fetch(
    new URL("https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap", import.meta.url),
  ).then((res) => res.arrayBuffer())

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
      }}
    >
      <div style={{ fontSize: "80px", fontWeight: "bold" }}>Pachara</div>
      <div style={{ fontSize: "40px", color: "#3B82F6", marginTop: "20px" }}>Full Stack Developer</div>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse width and height.
      ...size,
    },
  )
}
