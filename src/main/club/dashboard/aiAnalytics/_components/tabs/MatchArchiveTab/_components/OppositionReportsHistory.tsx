import { Share2, Activity, Zap } from "lucide-react";

interface OppositionReportsHistoryProps {
  data: {
    opponent_database: string;
    matches_analyzed: number;
    win_rate_percent: number;
    avg_goals_conceded: number;
    key_weakness: string;
    tactical_evolution_note: string;
  };
}

const OppositionReportsHistory = ({ data }: OppositionReportsHistoryProps) => {
  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 h-full flex flex-col space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20">
          <Share2 size={20} className="text-amber-400" />
        </div>
        <h2 className="text-lg font-bold text-white tracking-tight">
          Opposition Reports History
        </h2>
      </div>

      <div className="bg-[#1A1D24] rounded-2xl border border-white/5 p-5 flex-1 space-y-6">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <p className="text-sm font-bold text-white flex items-center gap-2">
            <Activity size={14} className="text-zinc-500" />
            {data.opponent_database}
          </p>
          <span className="text-[10px] font-black text-amber-400 uppercase tracking-tighter bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            Syncing...
          </span>
        </div>

        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
              Matches Analyzed
            </p>
            <p className="text-3xl font-black text-white">
              {data.matches_analyzed}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
              Win Rate
            </p>
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-black text-green-400">
                {data.win_rate_percent}%
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
              Avg Goals Conceded
            </p>
            <p className="text-3xl font-black text-white">
              {data.avg_goals_conceded}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
              Key Weakness
            </p>
            <p className="text-sm font-bold text-amber-400 leading-tight">
              {data.key_weakness}
            </p>
          </div>
        </div>

        {/* Tactical Evolution */}
        <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-4 relative overflow-hidden group">
          <Zap
            size={40}
            className="absolute -right-4 -bottom-4 text-cyan-500/5 rotate-12 transition-transform group-hover:scale-110"
          />
          <div className="flex items-center gap-2 mb-2">
            <Zap size={12} className="text-cyan-400" />
            <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
              Tactical Evolution
            </p>
          </div>
          <p className="text-xs font-medium text-zinc-300 leading-relaxed italic relative z-10">
            "{data.tactical_evolution_note}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default OppositionReportsHistory;
