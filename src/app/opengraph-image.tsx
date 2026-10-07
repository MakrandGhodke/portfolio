import { ImageResponse } from "next/og";

export const alt = "Makrand Ghodke | Machine Learning & AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#0B0D12",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
          color: "#E6E8EE",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Tag */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(34, 211, 238, 0.4)",
              backgroundColor: "rgba(34, 211, 238, 0.1)",
              color: "#22D3EE",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            M.Sc. ICE · TU Darmstadt · AI & ML
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: "800",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              maxWidth: "1000px",
            }}
          >
            I build machine learning systems that work outside the notebook.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#8A91A5",
              maxWidth: "850px",
            }}
          >
            Computer Vision · FAISS Vector Search · CLIP · Full-Stack Systems
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #232734",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#8A91A5",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontWeight: "700", color: "#E6E8EE" }}>
              Makrand Ghodke
            </span>
            <span>·</span>
            <span>Darmstadt, Germany</span>
          </div>

          <div style={{ color: "#22D3EE", fontWeight: "600" }}>
            DigiGuide · SpendWise
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
