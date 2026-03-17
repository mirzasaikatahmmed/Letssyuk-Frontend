import { Shield } from "lucide-react";

interface OppositionTacticalProfileProps {
  data?: {
    team_name: string;
    formation: string;
    playing_style: string;
    philosophy: string;
    game_management: string;
  };
}

const OppositionTacticalProfile = ({ data }: OppositionTacticalProfileProps) => {
  if (!data) return null;

  const profileStats = [
    { label: "Formation", value: data.formation, color: "text-white" },
    { label: "Playing Style", value: data.playing_style, color: "text-white" },
    { label: "Philosophy", value: data.philosophy, color: "text-white" },
    { label: "Game Management", value: data.game_management, color: "text-yellow-500" },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Shield size={18} className="text-cyan-400" />
        <h2 className="text-base font-bold text-white tracking-tight">
          Opposition Tactical Profile: <span className="font-medium text-zinc-300 ml-1">{data.team_name}</span>
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {profileStats.map((stat, i) => (
          <div key={i} className="bg-[#1A1D24] rounded-lg border border-white/5 p-4">
            <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-bold">{stat.label}</p>
            <p className={`text-sm font-bold ${stat.color} leading-tight`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OppositionTacticalProfile;
