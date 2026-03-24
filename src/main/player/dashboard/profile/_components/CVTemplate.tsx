import React from "react";
import { Mail, Phone, MapPin, Globe, User } from "lucide-react";

interface CVData {
  fullName: string;
  email: string;
  phone: string;
  location: string | null;
  profilePicture: string | null;
  summary: { text: string };
  performance: {
    competitionLevel: string;
    keyStats: Array<{ label: string; value: string }>;
  };
  highlights: { summary: string[] };
  skills: { coreSkills: string[] };
  positionProfile: {
    primaryPosition: string;
    positionSummary: string;
  };
}

const GREEN = "#2e7d32";
const DIVIDER = "#e0e0e0";

const SectionHeader = ({ label }: { label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
    <span style={{ fontSize: "13px", fontWeight: "800", color: "#222", textTransform: "uppercase", letterSpacing: "1.5px" }}>
      {label}
    </span>
    <div style={{ flex: 1, height: "1px", backgroundColor: DIVIDER, marginLeft: "6px" }} />
  </div>
);

const DashedBar = ({ percent }: { percent: number }) => {
  const total = 20;
  const filled = Math.round((percent / 100) * total);
  return (
    <div style={{ display: "flex", gap: "3px", marginTop: "5px" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          width: "14px", height: "4px", borderRadius: "2px",
          backgroundColor: i < filled ? GREEN : "#d0d0d0"
        }} />
      ))}
    </div>
  );
};

const CVTemplate = React.forwardRef<HTMLDivElement, { data: CVData }>((props, ref) => {
  const { data } = props;

  return (
    <div ref={ref} style={{
      backgroundColor: "#ffffff", color: "#333", fontFamily: "Arial, sans-serif",
      width: "800px", padding: "48px 52px", boxSizing: "border-box", lineHeight: "1.6"
    }}>

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "34px", fontWeight: "900", color: "#b85c00", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "1px" }}>
            {data.fullName}
          </h1>
          <p style={{ fontSize: "16px", color: GREEN, fontWeight: "600", margin: "0 0 14px 0" }}>
            {data.positionProfile?.primaryPosition || "Football Player"}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 22px", fontSize: "12px", color: "#555" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <p><Mail size={12} color={GREEN} /></p> <p>{data.email}</p>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <p><Phone size={12} color={GREEN} /></p> <p>{data.phone}</p>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <p><MapPin size={12} color={GREEN} /></p> <p>{data.location || "N/A"}</p>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#555", marginTop: "6px" }}>
            <p><Globe size={12} color={GREEN} /></p> <p>www.onyxsportai.com</p>
          </div>
        </div>

        {/* Profile Photo */}
        <div style={{
          width: "110px", height: "110px", borderRadius: "50%",
          border: `4px solid ${GREEN}`, overflow: "hidden",
          backgroundColor: "#f0f0f0", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          {data.profilePicture
            ? <img src={data.profilePicture} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Profile" />
            : <User size={50} color="#bbb" />
          }
        </div>
      </div>

      {/* PROFESSIONAL SUMMARY */}
      <div style={{ marginBottom: "26px" }}>
        <SectionHeader label="Professional Summary" />
        <p style={{ fontSize: "13px", color: "#444", margin: 0, lineHeight: "1.7" }}>
          {data.summary?.text || "Professional summary pending AI analysis."}
        </p>
      </div>

      {/* PERFORMANCE STATS (as Work Experience style) */}
      <div style={{ marginBottom: "26px" }}>
        <SectionHeader label="Performance Insights" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 30px" }}>
          {data.performance?.keyStats?.map((s, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${DIVIDER}`, paddingBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", color: "#222" }}>{s.label}</span>
                <span style={{ fontSize: "12px", color: "#777" }}>{s.value}</span>
              </div>
              <span style={{ fontSize: "11px", color: GREEN, fontWeight: "600" }}>
                {data.performance?.competitionLevel || "Competitive Level"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MATCH HIGHLIGHTS */}
      <div style={{ marginBottom: "26px" }}>
        <SectionHeader label="Match Highlights" />
        <ol style={{ margin: 0, padding: "0 0 0 18px", fontSize: "13px", color: "#444", lineHeight: "1.8" }}>
          {data.highlights?.summary?.slice(0, 7).map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ol>
      </div>

      {/* SKILLS */}
      <div style={{ marginBottom: "26px" }}>
        <SectionHeader label="Skills" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px 20px" }}>
          {data.skills?.coreSkills?.slice(0, 6).map((skill, i) => (
            <div key={i}>
              <span style={{ fontSize: "13px", color: "#333", fontWeight: "500" }}>{skill}</span>
              <DashedBar percent={75 - (i % 3) * 10} />
            </div>
          ))}
        </div>
      </div>

      {/* POSITION PROFILE (as Achievements) */}
      <div style={{ marginBottom: "26px" }}>
        <SectionHeader label="Position Profile" />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#444" }}>
            <span><strong style={{ color: "#222" }}>{data.positionProfile?.primaryPosition}</strong> — {data.positionProfile?.positionSummary}</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        marginTop: "30px", paddingTop: "14px", borderTop: `1px solid ${DIVIDER}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: "10px", color: "#aaa"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>Powered by</span>
          <span style={{ fontWeight: "bold", color: GREEN, fontSize: "11px" }}>ONYX AI</span>
        </div>
        <span>Generated on {new Date().toLocaleDateString()}</span>
      </div>
    </div>
  );
});

CVTemplate.displayName = "CVTemplate";
export default CVTemplate;
