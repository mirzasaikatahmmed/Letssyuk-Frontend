import React from "react";
import { Briefcase } from "lucide-react";

const ContractStructureForm = () => {
  return (
    <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Briefcase size={48} className="mx-auto mb-4 text-cyan-500/20" />
      <h3 className="text-xl font-bold text-white mb-2">
        Contract Structure Form
      </h3>
      <p className="text-gray-500 text-sm">
        Component for defining contract terms and conditions.
      </p>
    </div>
  );
};

export default ContractStructureForm;
