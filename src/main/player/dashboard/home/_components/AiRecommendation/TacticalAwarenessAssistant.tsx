// import React from 'react';
import { Card } from "@/components/ui/card";
import { Brain, Info, CheckCircle2 } from "lucide-react";

const TacticalAwarenessAssistant = () => {
  const tacticalInsights = [
    {
      title: "Positional Awareness",
      items: [
        "Defensive transition: Improve recovery positioning",
        "Offensive half-spaces: Exploit gaps between lines",
        "Support play: Optimize passing angles for midfielders",
      ],
    },
    {
      title: "Decision Making",
      items: [
        "Risk Assessment: Better judgment in final third",
        "Tempo Control: Recognize when to speed up vs slow down",
        "Defensive scanning: Continuous 360-degree awareness",
      ],
    },
    {
      title: "Team Structure",
      items: [
        "Pressing triggers: Identify and act on tactical queues",
        "Zonal defense: Precise alignment with back four",
        "Set-piece roles: Flawless execution of designated tasks",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-8 min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#0F1424] border border-[#4F72FC33] p-4 rounded-xl flex gap-3">
        <Brain className="text-[#4F72FC] shrink-0" size={20} />
        <div className="text-xs leading-relaxed text-gray-300">
          <span className="font-bold text-white block mb-1">
            Tactical Awareness Assistant
          </span>
          <p>
            Enhance your game intelligence with position-specific tactical
            insights. Elite players think two steps ahead—level up your
            awareness today.
          </p>
        </div>
      </div>

      {/* Insights Grid */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          Tactical Development
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tacticalInsights.map((insight, index) => (
            <Card
              key={index}
              className="bg-[#0D161E] border-gray-800 p-5 rounded-xl"
            >
              <h4 className="font-bold text-white text-sm mb-3">
                {insight.title}
              </h4>
              <ul className="space-y-3">
                {insight.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[12px] text-gray-400 flex items-start gap-2"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#4F72FC] mt-0.5 shrink-0"
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
          Tactical education is a continuous process. Use match film and AI
          insights to bridge the gap between effort and effectiveness on the
          pitch.
        </p>
      </div>
    </div>
  );
};

export default TacticalAwarenessAssistant;
