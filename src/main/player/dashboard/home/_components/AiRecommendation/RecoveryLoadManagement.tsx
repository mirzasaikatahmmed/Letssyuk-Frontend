// import React from 'react';
import { Card } from "@/components/ui/card";
import { Battery, Info, CheckCircle2 } from "lucide-react";

const RecoveryLoadManagement = () => {
  const recoveryProtocols = [
    {
      title: "Immediate Post-Load Recovery",
      items: [
        "15 min moderate active recovery (cycle/stretch)",
        "Rehydration: 1.5L fluid per kg lost during activity",
        "Contrast water therapy (Ice Bath: 10 min)",
      ],
    },
    {
      title: "Daily Wellness Checks",
      items: [
        "Sleep Quality: Goal 8.5 hours cumulative nightly",
        "Muscle Soreness: Track levels (1-10 scale)",
        "Heart Rate Variability (HRV): Optimal status needed",
      ],
    },
    {
      title: "Strategic Load Management",
      items: [
        "Periodized planning: High load days vs Deload weeks",
        "Red-zone monitoring: Reduce intensity if fatigue > 7/10",
        "Supplementary low-impact mobility sessions (Yoga/Pilates)",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-8 min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#0A121A] border border-[#0A3B7333] p-4 rounded-xl flex gap-3">
        <Battery className="text-[#0A3B73] shrink-0" size={20} />
        <div className="text-xs leading-relaxed text-gray-300">
          <span className="font-bold text-white block mb-1">
            Recovery & Load Management
          </span>
          <p>
            Optimize your performance readiness by managing cumulative load.
            Smart recovery prevents injuries and ensures you are powered up for
            every session.
          </p>
        </div>
      </div>

      {/* Protocols Grid */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          Recovery & Energy Optimization
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recoveryProtocols.map((protocol, index) => (
            <Card
              key={index}
              className="bg-[#0D161E] border-gray-800 p-5 rounded-xl"
            >
              <h4 className="font-bold text-white text-sm mb-3">
                {protocol.title}
              </h4>
              <ul className="space-y-3">
                {protocol.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[12px] text-gray-400 flex items-start gap-2"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#0A3B73] mt-0.5 shrink-0"
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
          Elite athletes are the best relaxers. Prioritize quality rest as
          highly as high-intensity training to prevent burnout and overtraining
          syndrome.
        </p>
      </div>
    </div>
  );
};

export default RecoveryLoadManagement;
