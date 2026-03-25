import React from "react";
import { User } from "lucide-react";

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
  skills: {
    coreSkills: string[];
    technicalSkills: string[];
    physicalTraits: string[];
    mentalityTraits: string[];
    positionSpecificAttributes: string[];
    overallSkillSummary: string;
  };
  positionProfile: {
    primaryPosition: string;
    dominantFoot: string;
    positionSummary: string;
  };
  availability?: {
    currentClubOrStatus: string;
    playingLevel: string;
  };
  physical?: {
    heightCm: number;
    weightKg: number;
  };
}

const GREEN = "#2e7d32";
const DIVIDER = "#e0e0e0";

const SectionHeader = ({ label }: { label: string }) => (
  <div
    style={{
      borderBottom: `2px solid ${DIVIDER}`,
      paddingBottom: "6px",
      marginBottom: "14px",
    }}
  >
    <span
      style={{
        fontSize: "13px",
        fontWeight: "800",
        color: "#222",
        textTransform: "uppercase",
        letterSpacing: "1.5px",
      }}
    >
      {label}
    </span>
  </div>
);

const CVTemplate = React.forwardRef<HTMLDivElement, { data: CVData }>(
  (props, ref) => {
    const { data } = props;

    return (
      <div
        ref={ref}
        style={{
          backgroundColor: "#ffffff",
          color: "#333",
          fontFamily: "Arial, sans-serif",
          width: "800px",
          padding: "48px 52px",
          boxSizing: "border-box",
          lineHeight: "1.6",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "28px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: "34px",
                fontWeight: "900",
                color: "#b85c00",
                margin: "0 0 4px 0",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {data.fullName}
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: GREEN,
                fontWeight: "600",
                margin: "0 0 14px 0",
              }}
            >
              {data.positionProfile?.primaryPosition || "Football Player"}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px 22px",
                fontSize: "12px",
                color: "#555",
              }}
            >
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span style={{ color: GREEN, fontSize: "13px" }}>✉</span>
                <span>{data.email}</span>
              </span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span style={{ color: GREEN, fontSize: "13px" }}>✆</span>
                <span>{data.phone}</span>
              </span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span style={{ color: GREEN, fontSize: "13px" }}>⊙</span>
                <span>{data.location || "N/A"}</span>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "12px",
                color: "#555",
                marginTop: "6px",
              }}
            >
              <span style={{ color: GREEN, fontSize: "13px" }}>⊕</span>
              <span>www.onyxsportai.com</span>
            </div>
          </div>

          {/* Profile Photo */}
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              border: `4px solid ${GREEN}`,
              overflow: "hidden",
              backgroundColor: "#f0f0f0",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {data.profilePicture ? (
              <img
                src={data.profilePicture}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="Profile"
              />
            ) : (
              <User size={50} color="#bbb" />
            )}
          </div>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <div style={{ marginBottom: "26px", pageBreakInside: "avoid" }}>
          <SectionHeader label="Professional Summary" />
          <p
            style={{
              fontSize: "13px",
              color: "#444",
              margin: 0,
              lineHeight: "1.7",
            }}
          >
            {data.summary?.text || "Professional summary pending AI analysis."}
          </p>
        </div>

        {/* PERFORMANCE STATS (as Work Experience style) */}
        <div style={{ marginBottom: "26px", pageBreakInside: "avoid" }}>
          <SectionHeader label="Performance Insights" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px 30px",
            }}
          >
            {data.performance?.keyStats?.map((s, i) => (
              <div key={i}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#222",
                    }}
                  >
                    {s.label}
                  </span>
                  <span style={{ fontSize: "12px", color: "#777" }}>
                    {s.value}
                  </span>
                </div>
                <span
                  style={{ fontSize: "11px", color: GREEN, fontWeight: "600" }}
                >
                  {data.performance?.competitionLevel || "Competitive Level"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* MATCH HIGHLIGHTS */}
        <div style={{ marginBottom: "26px", pageBreakInside: "avoid" }}>
          <SectionHeader label="Match Highlights" />
          <ol
            style={{
              margin: 0,
              padding: "0 0 0 18px",
              fontSize: "13px",
              color: "#444",
              lineHeight: "1.8",
            }}
          >
            {data.highlights?.summary?.slice(0, 7).map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ol>
        </div>

        {/* POSITION PROFILE */}
        <div style={{ marginBottom: "26px", pageBreakInside: "avoid" }}>
          <SectionHeader label="Position Profile" />
          <div style={{ fontSize: "13px", color: "#444", lineHeight: "1.7" }}>
            <div style={{ marginBottom: "6px" }}>
              <strong style={{ color: "#222" }}>Position: </strong>
              {data.positionProfile?.primaryPosition}
              {data.positionProfile?.dominantFoot && (
                <span style={{ marginLeft: "16px" }}>
                  <strong style={{ color: "#222" }}>Dominant Foot: </strong>
                  {data.positionProfile.dominantFoot}
                </span>
              )}
            </div>
            {data.availability?.currentClubOrStatus && (
              <div style={{ marginBottom: "6px" }}>
                <strong style={{ color: "#222" }}>Club/Status: </strong>
                {data.availability.currentClubOrStatus}
              </div>
            )}
            {data.physical && (
              <div style={{ marginBottom: "6px" }}>
                <strong style={{ color: "#222" }}>Height: </strong>
                {data.physical.heightCm} cm
                <span style={{ marginLeft: "16px" }}>
                  <strong style={{ color: "#222" }}>Weight: </strong>
                  {data.physical.weightKg} kg
                </span>
              </div>
            )}
            <div
              style={{ marginTop: "6px", fontStyle: "italic", color: "#555" }}
            >
              {data.positionProfile?.positionSummary}
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div style={{ marginBottom: "26px", pageBreakInside: "avoid" }}>
          <SectionHeader label="Skills" />

          {[
            { title: "Core Skills", items: data.skills?.coreSkills },
            { title: "Technical Skills", items: data.skills?.technicalSkills },
            { title: "Physical Traits", items: data.skills?.physicalTraits },
            { title: "Mentality", items: data.skills?.mentalityTraits },
            {
              title: "Position Specific",
              items: data.skills?.positionSpecificAttributes,
            },
          ].map((group, gi) =>
            group.items?.length ? (
              <div
                key={gi}
                style={{ marginBottom: "10px", pageBreakInside: "avoid" }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    color: GREEN,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "6px",
                  }}
                >
                  {group.title}
                </div>
                <div style={{ fontSize: "13px", color: "#333" }}>
                  {group.items.join(", ")}
                </div>
              </div>
            ) : null,
          )}

          {data.skills?.overallSkillSummary && (
            <p
              style={{
                fontSize: "12px",
                color: "#666",
                fontStyle: "italic",
                margin: "8px 0 0 0",
              }}
            >
              {data.skills.overallSkillSummary}
            </p>
          )}
        </div>

        {/* FOOTER */}
        <div
          style={{
            marginTop: "30px",
            paddingTop: "14px",
            borderTop: `1px solid ${DIVIDER}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "10px",
            color: "#aaa",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Powered by</span>
            <span
              style={{ fontWeight: "bold", color: GREEN, fontSize: "11px" }}
            >
              ONYX AI
            </span>
          </div>
          <span>Generated on {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    );
  },
);

CVTemplate.displayName = "CVTemplate";
export default CVTemplate;
