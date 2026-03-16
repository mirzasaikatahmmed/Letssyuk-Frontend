import { Target } from "lucide-react";

interface PositionSpecificCriteriaProps {
  data?: {
    position_name: string;
    technical_requirements: Array<{
      label: string;
      target: string;
    }>;
    physical_characteristics: Array<{
      label: string;
      target: string;
    }>;
    tactical_understanding: string[];
    psychological_attributes: string[];
  };
}

const PositionSpecificCriteria = ({ data }: PositionSpecificCriteriaProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-2xl border border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
          <Target className="text-cyan-400" size={20} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Position-Specific Criteria</h2>
          <p className="text-sm text-zinc-500 font-medium">{data.position_name}</p>
        </div>
      </div>

      {/* Top Row: Technical & Physical */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Technical Requirements */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
          <p className="text-[10px] uppercase tracking-wider text-cyan-400 mb-4 font-bold">
            Technical Requirements
          </p>
          <div className="space-y-3">
            {data.technical_requirements.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-xs text-zinc-400 font-medium">{item.label}{" :"}</span>
                <span className="text-xs text-white font-bold">{item.target}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Characteristics */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
          <p className="text-[10px] uppercase tracking-wider text-cyan-400 mb-4 font-bold">
            Physical Characteristics
          </p>
          <div className="space-y-3">
            {data.physical_characteristics.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-xs text-zinc-400 font-medium">{item.label}{" :"}</span>
                <span className="text-xs text-white font-bold">{item.target}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Tactical & Psychological */}
      <div className="grid grid-cols-2 gap-6">
        {/* Tactical Understanding */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
          <p className="text-[10px] uppercase tracking-wider text-cyan-400 mb-4 font-bold">
            Tactical Understanding
          </p>
          <ul className="space-y-2.5">
            {data.tactical_understanding.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[11px] text-zinc-300">
                <span className="text-cyan-400 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Psychological Attributes */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
          <p className="text-[10px] uppercase tracking-wider text-cyan-400 mb-4 font-bold">
            Psychological Attributes
          </p>
          <ul className="space-y-2.5">
            {data.psychological_attributes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[11px] text-zinc-300">
                <span className="text-cyan-400 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PositionSpecificCriteria;
