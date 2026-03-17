
interface BuildupPhaseProps {
  data?: {
    success_ratio_percent: number;
    average_time_seconds: number;
    key_player: string;
    improvement_area: {
      title: string;
      description: string;
    };
  };
}

const BuildupPhase = ({ data }: BuildupPhaseProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full">
      <h2 className="text-base font-bold text-white mb-6">Build-up Phase</h2>

      <div className="space-y-4">
        {/* Success Rate */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Success Rate</span>
            <span className="text-sm font-bold text-green-500">{data.success_ratio_percent}%</span>
          </div>
          <div className="w-full h-2 bg-[#12141B] rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-green-500 rounded-full" 
              style={{ width: `${data.success_ratio_percent}%` }} 
            />
          </div>
        </div>

        {/* Average Time */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-4">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">Average Time</p>
          <p className="text-2xl font-bold text-white">{data.average_time_seconds}s</p>
        </div>

        {/* Key Player */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-4">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">Key Player</p>
          <p className="text-sm font-bold text-white truncate">{data.key_player}</p>
        </div>

        {/* Improvement Area */}
        <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-4">
          <p className="text-[10px] uppercase tracking-wider text-yellow-500 font-bold mb-1">Improvement Area</p>
          <p className="text-xs text-zinc-300">{data.improvement_area.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BuildupPhase;
