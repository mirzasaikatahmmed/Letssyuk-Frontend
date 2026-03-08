import { Shield } from "lucide-react";

const profileStats = [
  { label: "Formation", value: "4-3-3", color: "text-white" },
  { label: "Playing Style", value: "Gegenpressing", color: "text-white" },
  { label: "Philosophy", value: "High Press", color: "text-white" },
  { label: "Game Management", value: "Weaker in 2nd half", color: "text-yellow-400" },
];

const OppositionTacticalProfile = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Shield size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Opposition Tactical Profile:{" "}
          <span className="text-cyan-400">Liverpool FC</span>
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-3">
        {profileStats.map((stat, i) => (
          <div key={i} className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className={`text-sm font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OppositionTacticalProfile;
