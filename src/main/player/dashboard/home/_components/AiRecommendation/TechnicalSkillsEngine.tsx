// import React from 'react';
import { Card } from "@/components/ui/card";
import { Sliders, Info, CheckCircle2 } from "lucide-react";

const TechnicalSkillsEngine = () => {
  const skillsLevels = [
    {
      title: "Core Technical Competencies",
      items: [
        "Passing Accuracy: 82% (Target 85%)",
        "Ball Control: Efficient close control in tight spaces",
        "Dribbling: High success rate in 1v1 situations",
      ],
    },
    {
      title: "Development Priorities",
      items: [
        "Weak foot passing: Improve consistency at 20m+",
        "Crossing: Quality of delivery from wide areas",
        "Finishing: Target accuracy under high pressure",
      ],
    },
    {
      title: "Planned Drills & Training",
      items: [
        "15 min daily wall drills for first touch refinement",
        "Targeted long-range passing practice twice weekly",
        "Shooting sessions with focus on variant ball strikes",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-8 min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#001D21] border border-[#00BFAE33] p-4 rounded-xl flex gap-3">
        <Sliders className="text-[#00BFAE] shrink-0" size={20} />
        <div className="text-xs leading-relaxed text-gray-300">
          <span className="font-bold text-white block mb-1">
            Technical Skills Engine
          </span>
          <p>
            Track and improve your technical capability with our specialized
            metrics and tailored development plan. Focus on these skills to
            level up your match performance.
          </p>
        </div>
      </div>

      {/* Skills Assessment Grid */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          Skills Assessment & Growth
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsLevels.map((skill, index) => (
            <Card
              key={index}
              className="bg-[#0D161E] border-gray-800 p-5 rounded-xl"
            >
              <h4 className="font-bold text-white text-sm mb-3">
                {skill.title}
              </h4>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[12px] text-gray-400 flex items-start gap-2"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#00BFAE] mt-0.5 shrink-0"
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
          Technical proficiency is the foundation of elite football. Dedicating
          time to mastering these individual components will yield significant
          results during match play.
        </p>
      </div>
    </div>
  );
};

export default TechnicalSkillsEngine;
