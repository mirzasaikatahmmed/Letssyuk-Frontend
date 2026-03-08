import { Info } from "lucide-react";

const expiryStats = [
  { label: "Expiring in 6 months", count: 3, status: "High", statusColor: "text-red-400" },
  { label: "Expiring in 12 months", count: 5, status: "Monitor", statusColor: "text-yellow-400" },
  { label: "Expiring in 24 months", count: 8, status: "Plan", statusColor: "text-cyan-400" },
  { label: "Long-term", count: 4, status: "Secure", statusColor: "text-green-400" },
];

const renewalPlayers = [
  { rank: "1. Player A", note: "Key player, 6 months left", badge: "Priority 1", badgeColor: "bg-red-500/20 text-red-400 border-red-500/30" },
  { rank: "2. Player B", note: "Important, 12 months left", badge: "Priority 2", badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { rank: "3. Player C", note: "Young talent, 24 months left", badge: "Priority 3", badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  { rank: "4. Player D", note: "Rotation, 18 months left", badge: "Priority 4", badgeColor: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
];

const ContractExpiryRisk = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-yellow-500/10 rounded-lg flex items-center justify-center">
          <Info size={15} className="text-yellow-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Contract Expiry Risk Flags
        </h2>
      </div>

      {/* Expiry Stats */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {expiryStats.map((stat, i) => (
          <div key={i} className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-white mb-1">{stat.count}</p>
            <p className={`text-xs font-semibold ${stat.statusColor}`}>{stat.status}</p>
          </div>
        ))}
      </div>

      {/* Renewal Priority Assessment */}
      <p className="text-sm font-semibold text-white mb-3">Renewal Priority Assessment</p>
      <div className="space-y-2">
        {renewalPlayers.map((player, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4 flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-semibold text-white">{player.rank}</p>
              <p className="text-xs text-gray-400 mt-0.5">{player.note}</p>
            </div>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${player.badgeColor}`}>
              {player.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractExpiryRisk;
