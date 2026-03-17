import { BarChart2 } from "lucide-react";

interface OptimalRotationStrategyProps {
  data?: {
    core_players_minutes_percent: string;
    rotation_players_minutes_percent: string;
    squad_players_minutes_percent: string;
    youth_integration_minutes_percent: string;
  };
}

const OptimalRotationStrategy = ({ data }: OptimalRotationStrategyProps) => {
  if (!data) return null;

  const strategyData = [
    { label: "Core Players", value: data.core_players_minutes_percent },
    { label: "Rotation Players", value: data.rotation_players_minutes_percent },
    { label: "Squad Players", value: data.squad_players_minutes_percent },
    { label: "Youth Integration", value: data.youth_integration_minutes_percent },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-5">
      <div className="flex items-center gap-2">
        <BarChart2 size={18} className="text-cyan-400" />
        <h2 className="text-base font-bold text-white tracking-tight">Optimal Rotation Strategy</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {strategyData.map((item, i) => (
          <div key={i} className="bg-[#1A1D24] p-5 rounded-lg border border-white/5 flex flex-col items-start justify-center min-h-[100px]">
            <p className="text-[10px] text-zinc-500 font-bold mb-2">{item.label}</p>
            <p className="text-xl font-bold text-cyan-400 leading-none mb-1">{item.value}</p>
            <p className="text-[10px] text-zinc-500 font-medium">of minutes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptimalRotationStrategy;
