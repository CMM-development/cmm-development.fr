import { ImageResponse } from "next/og";

export const alt = "CMM Development — Cédric Muller, développeur fullstack senior";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(20,229,229,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(15,184,184,0.18) 0%, transparent 50%), #0A0E27",
          color: "#ffffff",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Brand top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "28px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ color: "#ffffff" }}>CMM</span>
          <span style={{ color: "#14E5E5" }}>.</span>
          <span style={{ color: "#ffffff" }}>Development</span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "16px",
              color: "#14E5E5",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Développeur fullstack senior — 15 ans d&apos;expérience
          </div>
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#ffffff",
              letterSpacing: "-1px",
              maxWidth: "1000px",
            }}
          >
            Je construis des applications métier qui tiennent en production.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 500,
            }}
          >
            cmm-development.fr
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.55)",
              display: "flex",
              gap: "20px",
            }}
          >
            <span>.NET</span>
            <span style={{ color: "#14E5E5" }}>·</span>
            <span>React</span>
            <span style={{ color: "#14E5E5" }}>·</span>
            <span>TypeScript</span>
            <span style={{ color: "#14E5E5" }}>·</span>
            <span>IA</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
