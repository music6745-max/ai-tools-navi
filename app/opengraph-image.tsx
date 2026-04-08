import { ImageResponse } from "next/og";
import { siteConfig } from "./lib/data";

export const alt = `${siteConfig.name} - AIツール比較・おすすめガイド`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 24 }}>🤖</div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: -2,
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 36,
            opacity: 0.95,
            textAlign: "center",
            maxWidth: 1000,
            lineHeight: 1.4,
          }}
        >
          ChatGPT・Claude・Gemini等100+のAIツールを徹底比較
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 28,
            opacity: 0.85,
            borderTop: "2px solid rgba(255,255,255,0.4)",
            paddingTop: 24,
          }}
        >
          ai-tools-navi.jp
        </div>
      </div>
    ),
    { ...size }
  );
}
