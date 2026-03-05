// import React from 'react';
import { Card } from "@/components/ui/card";
import { Clock4, Info, CheckCircle2 } from "lucide-react";

const MatchPreparationSystem = () => {
  const preparationSteps = [
    {
      title: "Match Day -2: Fueling & Strategy",
      items: [
        "High carbohydrate intake for glycogen loading",
        "Review tactical roles and set-piece responsibilities",
        "Ensure 8-9 hours of quality sleep",
      ],
    },
    {
      title: "Match Day -1: Final Sharpness",
      items: [
        "Light technical session with focus on speed of play",
        "Mental visualization of positive match scenarios",
        "Preparation of match kit and hydration essentials",
      ],
    },
    {
      title: "Match Day: Peak Performance",
      items: [
        "Pre-match meal 3-4 hours before kick-off",
        "Dynamic warm-up and mental activation",
        "Post-match recovery protocol (shake, stretch, ice-bath)",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-8 min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#1A1610] border border-[#FF660033] p-4 rounded-xl flex gap-3">
        <Clock4 className="text-[#FF6600] shrink-0" size={20} />
        <div className="text-xs leading-relaxed text-gray-300">
          <span className="font-bold text-white block mb-1">
            Match Preparation System
          </span>
          <p>
            Optimize your readiness for upcoming matches with our AI-driven
            preparation plan. Follow these guidelines to ensure peak physical
            and mental performance when it matters most.
          </p>
        </div>
      </div>

      {/* Preparation Steps */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          Preparation Protocols
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {preparationSteps.map((step, index) => (
            <Card
              key={index}
              className="bg-[#0D161E] border-gray-800 p-5 rounded-xl"
            >
              <h4 className="font-bold text-white text-sm mb-3">
                {step.title}
              </h4>
              <ul className="space-y-3">
                {step.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[12px] text-gray-400 flex items-start gap-2"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#FF6600] mt-0.5 shrink-0"
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
          This system is designed to align with your training cycle.
          Consistently following these protocols develops the discipline
          required for elite-level performance.
        </p>
      </div>
    </div>
  );
};

export default MatchPreparationSystem;
