import { Trophy } from "lucide-react";

interface IndividualDevelopmentProps {
  data?: {
    player_name: string;
    age_group: string;
    current_level: string;
    development_rate: string;
    consistency: string;
    coach_rating: number;
    pillar_status: {
      technical: string;
      tactical: string;
      physical: string;
      mental: string;
    };
  };
}

const IndividualDevelopment = ({ data }: IndividualDevelopmentProps) => {
  if (!data) return null;

  const topStats = [
    { label: "Current Level", value: data.current_level, color: "text-green-500" },
    { label: "Development Rate", value: data.development_rate, color: "text-cyan-400" },
    { label: "Consistency", value: data.consistency, color: "text-white" },
    { label: "Coach Rating", value: `${data.coach_rating}/10`, color: "text-cyan-400" },
  ];

  const bottomStats = [
    { label: "Technical", value: data.pillar_status.technical, color: "text-green-500" },
    { label: "Tactical", value: data.pillar_status.tactical, color: "text-cyan-400" },
    { label: "Physical", value: data.pillar_status.physical, color: "text-yellow-500" }, // Yellow in image for "Strength developing"
    { label: "Mental", value: data.pillar_status.mental, color: "text-green-500" },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <Trophy size={18} className="text-cyan-400" />
        <h2 className="text-base font-bold text-white tracking-tight">
          Individual Development: <span className="font-medium text-zinc-300 ml-1">{data.player_name} ({data.age_group})</span>
        </h2>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {topStats.map((stat, i) => (
          <div key={i} className="bg-[#1A1D24] rounded-lg border border-white/5 p-4">
            <p className="text-[10px] text-zinc-500 mb-1 font-bold">{stat.label}</p>
            <p className={`text-sm font-bold ${stat.color} leading-tight`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {bottomStats.map((stat, i) => (
          <div key={i} className="bg-[#1A1D24] rounded-lg border border-white/5 p-4">
            <p className="text-[10px] text-zinc-500 mb-1 font-bold">{stat.label}</p>
            <p className={`text-sm font-bold ${stat.color} leading-tight`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualDevelopment;
