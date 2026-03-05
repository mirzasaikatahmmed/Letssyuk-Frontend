// import React from 'react';
import { Card } from "@/components/ui/card";
import { TrendingUp, Info, CheckCircle2 } from "lucide-react";

const PlayerDevelopmentPathway = () => {
  const roadmapStages = [
    {
      title: "Immediate (0-6 Months)",
      items: [
        "Consistent technical training (8+ hours weekly)",
        "Optimize physical metrics to initial benchmarks",
        "Clear identity established as [Current Position]",
      ],
    },
    {
      title: "Mid-Term (6-18 Months)",
      items: [
        "Experience and visibility in higher performance leagues",
        "Targeted metrics: [Specific Top Metric] refinement",
        "Expanded professional network and representation",
      ],
    },
    {
      title: "Long-Term (18-36 Months)",
      items: [
        "Pathway towards tier 1 or elite academies/clubs",
        "Total athletic peak achieved (Speed/Power/Technical)",
        "Sustainable career growth and contract progression",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-8 min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#101A15] border border-[#1ACB6C33] p-4 rounded-xl flex gap-3">
        <TrendingUp className="text-[#1ACB6C] shrink-0" size={20} />
        <div className="text-xs leading-relaxed text-gray-300">
          <span className="font-bold text-white block mb-1">
            Player Development Pathway
          </span>
          <p>
            Your long-term road map for athletic excellence. Map your current
            status against professional benchmarks and follow the path to elite
            success.
          </p>
        </div>
      </div>

      {/* Pathway Roadmap Grid */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          Strategic Career Stages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmapStages.map((stage, index) => (
            <Card
              key={index}
              className="bg-[#0D161E] border-gray-800 p-5 rounded-xl"
            >
              <h4 className="font-bold text-white text-sm mb-3">
                {stage.title}
              </h4>
              <ul className="space-y-3">
                {stage.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[12px] text-gray-400 flex items-start gap-2"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#1ACB6C] mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Info Box */}
      <div className="bg-[#101D24] border border-[#1A2E38] p-4 rounded-xl flex items-start gap-3">
        <Info size={18} className="text-[#0FB9B1] mt-0.5 shrink-0" />
        <p className="text-gray-400 text-[11px] leading-relaxed">
          The elite pathway is not linear—consistency over time is key. Stick to
          the plan and utilize AI intelligence to adjust when necessary.
        </p>
      </div>
    </div>
  );
};

export default PlayerDevelopmentPathway;
