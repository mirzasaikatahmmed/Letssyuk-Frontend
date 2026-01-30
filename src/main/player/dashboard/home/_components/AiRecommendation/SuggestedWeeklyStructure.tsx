// import React from 'react';
import { Card } from "@/components/ui/card";
import { Info } from 'lucide-react';

const SuggestedWeeklyStructure = () => {
  const days = [
    { day: "Mon", type: "Technical", time: "90 min", color: "#0DA9A2" },
    { day: "Tue", type: "Physical", time: "60 min", color: "#9810FA" },
    { day: "Wed", type: "Match", time: "90 min", color: "#E17100" },
    { day: "Thu", type: "Recovery", time: "Light", color: "#00A63E" },
    { day: "Fri", type: "Technical", time: "90 min", color: "#0DA9A2" },
    { day: "Sat", type: "Match Prep", time: "60 min", color: "#155DFC" },
    { day: "Sun", type: "Rest", time: "Full", color: "#364153" },
  ];

  return (
    <div className="space-y-4 ">
      <h3 className="text-gray-400 text-sm font-medium ml-1">Suggested Weekly Structure</h3>
      <Card className="bg-[#0B1219] border-gray-800 p-6 rounded-2xl">
        {/* Horizontal Grid */}
        <div className="grid grid-cols-7 gap-3 mb-6">
          {days.map((item, index) => (
            <div 
              key={index}
              className="rounded-xl p-4 flex flex-col justify-between h-32 transition-transform hover:scale-105 cursor-default"
              style={{ backgroundColor: item.color }}
            >
              <div>
                <p className="text-white/90 text-[10px] font-bold uppercase">{item.day}</p>
                <p className="text-white text-sm font-bold mt-1 leading-tight">{item.type}</p>
              </div>
              <p className="text-white/80 text-[10px] font-medium">{item.time}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer Footer */}
        <div className="bg-[#0D161E] border border-[#0DA9A2]/30 p-4 rounded-xl flex items-start gap-3">
          <Info size={18} className="text-[#0DA9A2] mt-0.5" />
          <p className="text-gray-400 text-[11px] leading-relaxed">
            Guidance-based structure only, not medical or coaching advice. Always consult qualified professionals for personalized training plans.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SuggestedWeeklyStructure;