import React from "react";
import { Calendar } from "lucide-react";

const CareerTimelineForm = () => {
  return (
    <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Calendar size={48} className="mx-auto mb-4 text-cyan-500/20" />
      <h3 className="text-xl font-bold text-white mb-2">
        Career Timeline Form
      </h3>
      <p className="text-gray-500 text-sm">
        Component for planning the player's long-term career path.
      </p>
    </div>
  );
};

export default CareerTimelineForm;
