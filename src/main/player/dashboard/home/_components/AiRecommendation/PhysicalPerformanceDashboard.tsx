// import React from 'react';
import { Card } from "@/components/ui/card";
import { BarChart2, Info, CheckCircle2 } from "lucide-react";

const PhysicalPerformanceDashboard = () => {
  const physicalMetrics = [
    {
      title: "Speed and Power",
      items: [
        "10m Acceleration: 1.83s (Target 1.75s)",
        "30m Sprint: 4.12s (Target 4.0s)",
        "Vertical Jump: 42cm (Target 48cm)",
      ],
    },
    {
      title: "Endurance & Conditioning",
      items: [
        "Yo-Yo Test Level: 17.1 (Target 18.5)",
        "Max Heart Rate: 198 bpm",
        "Resting Heart Rate: 58 bpm",
      ],
    },
    {
      title: "Body Composition & Metrics",
      items: [
        "Body Fat Percentage: 11.2%",
        "Lean Muscle Mass: Tracking within target",
        "Hydration Status: Consistently optimal",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-8 min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#120F1A] border border-[#9C3DFF33] p-4 rounded-xl flex gap-3">
        <BarChart2 className="text-[#9C3DFF] shrink-0" size={20} />
        <div className="text-xs leading-relaxed text-gray-300">
          <span className="font-bold text-white block mb-1">
            Physical Performance Dashboard
          </span>
          <p>
            Monitor and track your key physical metrics for elite athletic
            conditioning. AI-driven data highlights strengths and identifies
            critical growth areas.
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          Physical Data Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {physicalMetrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-[#0D161E] border-gray-800 p-5 rounded-xl"
            >
              <h4 className="font-bold text-white text-sm mb-3">
                {metric.title}
              </h4>
              <ul className="space-y-3">
                {metric.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[12px] text-gray-400 flex items-start gap-2"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#9C3DFF] mt-0.5 shrink-0"
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
          Consistent physical tracking allows for periodized training that
          optimizes performance while minimizing the risk of cumulative fatigue
          or injury.
        </p>
      </div>
    </div>
  );
};

export default PhysicalPerformanceDashboard;
