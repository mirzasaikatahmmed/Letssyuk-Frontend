import { Users, Check } from "lucide-react";

interface ComparativeAnalysisProps {
  data?: {
    title: string;
    player_a: string[];
    player_b: string[];
  };
}

const ComparativeAnalysis = ({ data }: ComparativeAnalysisProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-2xl border border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
          <Users className="text-cyan-400" size={20} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-cyan-400">{data.title}</h2>
        </div>
      </div>

      {/* Player Comparison Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Player A */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5 relative overflow-hidden group">
          <p className="text-base font-bold text-white mb-4 flex items-center gap-2">
            Player A
          </p>
          <ul className="space-y-3 relative z-10">
            {data.player_a.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-zinc-300 leading-relaxed font-medium">
                <Check size={14} className="text-green-400 mt-0.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Player B */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5 relative overflow-hidden group">
          <p className="text-base font-bold text-white mb-4 flex items-center gap-2">
            Player B
          </p>
          <ul className="space-y-3 relative z-10">
            {data.player_b.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-zinc-400 leading-relaxed font-medium">
                <Check size={14} className="text-green-400 mt-0.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComparativeAnalysis;
