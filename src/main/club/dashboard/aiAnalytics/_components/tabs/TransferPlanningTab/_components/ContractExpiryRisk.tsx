import { AlertCircle } from "lucide-react";

interface ContractExpiryRiskProps {
  data?: {
    expiring_in_6_months: { count: number; risk: string };
    expiring_in_12_months: { count: number; risk: string };
    expiring_in_24_months: { count: number; risk: string };
    long_term: { count: number; risk: string };
    renewal_priority_assessment: Array<{
      rank: string;
      player: string;
      detail: string;
      badge: string;
    }>;
  };
}

const ContractExpiryRisk = ({ data }: ContractExpiryRiskProps) => {
  if (!data) return null;

  const expiryStats = [
    { label: "Expiring in 6 months", count: data.expiring_in_6_months.count, risk: data.expiring_in_6_months.risk, color: "text-red-500" },
    { label: "Expiring in 12 months", count: data.expiring_in_12_months.count, risk: data.expiring_in_12_months.risk, color: "text-yellow-500" },
    { label: "Expiring in 24 months", count: data.expiring_in_24_months.count, risk: data.expiring_in_24_months.risk, color: "text-cyan-400" },
    { label: "Long-term", count: data.long_term.count, risk: data.long_term.risk, color: "text-green-500" },
  ];

  const getPriorityBadgeStyles = (rank: string) => {
    if (rank === "1") return "bg-[#451D1D] text-[#FF4D4D] border-[#FF4D4D]/20";
    if (rank === "2") return "bg-[#453A1D] text-[#FFD700] border-[#FFD700]/20";
    if (rank === "3") return "bg-[#1D3A45] text-[#00E5FF] border-[#00E5FF]/20";
    return "bg-[#2D333D] text-[#00B4D8] border-[#00B4D8]/20";
  };

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <AlertCircle size={18} className="text-yellow-500" />
        <h2 className="text-base font-bold text-white tracking-tight">Contract Expiry Risk Flags</h2>
      </div>

      {/* Expiry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {expiryStats.map((stat, i) => (
          <div key={i} className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
            <p className="text-[10px] text-zinc-500 font-bold mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-white mb-1">{stat.count}</p>
            <p className={`text-[10px] font-black uppercase tracking-wider ${stat.color}`}>{stat.risk}</p>
          </div>
        ))}
      </div>

      {/* Renewal Priority Assessment */}
      <div className="space-y-4">
        <p className="text-xs font-bold text-zinc-400">Renewal Priority Assessment</p>
        <div className="space-y-2">
          {data.renewal_priority_assessment.map((player, i) => (
            <div
              key={i}
              className="bg-[#1A1D24] rounded-lg border border-white/5 p-4 flex justify-between items-center"
            >
              <div className="space-y-1">
                <p className="text-xs font-bold text-white">{player.rank}. {player.player}</p>
                <p className="text-[10px] text-zinc-500 font-medium">{player.detail}</p>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded border ${getPriorityBadgeStyles(player.rank)}`}>
                Priority {player.rank}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractExpiryRisk;
