import { TrendingUp } from "lucide-react";

interface TacticalFitScoringProps {
  data?: Array<{
    label: string;
    score: number;
  }>;
}

const TacticalFitScoring = ({ data }: TacticalFitScoringProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-2xl border border-white/5 h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
          <TrendingUp className="text-cyan-400" size={20} />
        </div>
        <h2 className="text-lg font-semibold text-cyan-400">Tactical Fit Scoring</h2>
      </div>

      {/* Progress Bars */}
      <div className="space-y-6">
        {data.map((item, i) => (
          <div key={i} className="">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-zinc-300 font-medium">{item.label}</span>
              <span className="text-sm font-bold text-cyan-400">
                {item.score}/100
              </span>
            </div>
            <div className="w-full h-2 bg-[#12141B] rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-cyan-400 rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TacticalFitScoring;
