import { ImageResponse } from "next/og";

export const alt = "Mentions légales — CMM Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function MentionsLegalesOG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(20,229,229,0.12) 0%, transparent 55%), #0A0E27",
          color: "#ffffff",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
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

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "16px",
              color: "#14E5E5",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Informations légales
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Mentions légales
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "900px",
            }}
          >
            Éditeur, hébergeur, propriété intellectuelle, données personnelles, cookies.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <span>cmm-development.fr/mentions-legales</span>
          <span>SIRET 795 190 511 00027</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
