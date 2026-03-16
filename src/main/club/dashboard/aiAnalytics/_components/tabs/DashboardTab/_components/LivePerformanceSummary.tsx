import { Activity } from "lucide-react";

interface LivePerformanceSummaryProps {
  data?: {
    current_match: string;
    possession_percent: number;
    shots: string;
    xg: string;
    pass_accuracy_percent: number;
    attacking_score: number;
    defending_score: number;
    transition_score: number;
    set_piece_score: number;
  };
}

const LivePerformanceSummary = ({ data }: LivePerformanceSummaryProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-2xl border border-white/5">
      <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <Activity className="text-cyan-400" size={20} />
        Live Performance Summary
      </h2>

      {/* Top row: 5 Cards */}
      <div className="grid grid-cols-5 gap-4 mb-4">
        <div className="bg-[#1A1D24] p-4 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-medium">Current Match</p>
          <p className="text-xl font-bold text-green-400">{data.current_match}</p>
        </div>

        <div className="bg-[#1A1D24] p-4 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-medium">Possession</p>
          <p className="text-2xl font-bold text-white">{data.possession_percent}%</p>
          <p className="text-[10px] text-green-500 font-medium mt-1">+3% vs avg</p>
        </div>

        <div className="bg-[#1A1D24] p-4 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-medium">Shots</p>
          <p className="text-2xl font-bold text-white">{data.shots}</p>
          <p className="text-[10px] text-green-500 font-medium mt-1">Advantage</p>
        </div>

        <div className="bg-[#1A1D24] p-4 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-medium">xG (Expected Goals)</p>
          <p className="text-2xl font-bold text-white">{data.xg}</p>
          <p className="text-[10px] text-green-500 font-medium mt-1">Better</p>
        </div>

        <div className="bg-[#1A1D24] p-4 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-medium">Pass Accuracy</p>
          <p className="text-2xl font-bold text-white">{data.pass_accuracy_percent}%</p>
          <p className="text-[10px] text-green-500 font-medium mt-1">Good</p>
        </div>
      </div>

      {/* Bottom row: 4 Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Attacking", value: data.attacking_score, color: "text-cyan-400" },
          { label: "Defending", value: data.defending_score, color: "text-cyan-400" },
          { label: "Transition", value: data.transition_score, color: "text-cyan-400" },
          { label: "Set Pieces", value: data.set_piece_score, color: "text-yellow-400" },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#1A1D24] p-4 rounded-xl border border-white/5">
            <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-medium">
              {item.label}
            </p>
            <p className={`text-2xl font-bold ${item.color}`}>
              {item.value.toFixed(1)}/10
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivePerformanceSummary;
