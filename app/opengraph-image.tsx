import { ImageResponse } from "next/og";
import { personal } from "@data/personal";

export const alt = `${personal.name}: ${personal.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colors mirror the light theme tokens in globals.css (CSS variables are unavailable here).
const colors = {
  background: "#f5f4ef",
  foreground: "#202925",
  muted: "#64716a",
  primary: "#286b5a",
  accent: "#b87952",
};

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: colors.background,
          color: colors.foreground,
          borderLeft: `16px solid ${colors.primary}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 48, height: 4, background: colors.accent }} />
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: colors.primary,
            }}
          >
            {personal.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -1.5,
            maxWidth: 980,
          }}
        >
          {personal.headline}
        </div>

        <div style={{ display: "flex", fontSize: 28, color: colors.muted }}>
          {`${personal.title} · ${personal.company} · ${personal.location}`}
        </div>
      </div>
    ),
    size
  );
}
