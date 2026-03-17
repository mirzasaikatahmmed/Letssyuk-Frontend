import { Users } from "lucide-react";

interface PlayerRoleBalanceProps {
  data?: {
    creators: number;
    destroyers: number;
    carriers: number;
    finishers: number;
    balance_status: string;
  };
}

const PlayerRoleBalance = ({ data }: PlayerRoleBalanceProps) => {
  if (!data) return null;

  const roles = [
    { label: "Creators", count: data.creators },
    { label: "Destroyers", count: data.destroyers },
    { label: "Carriers", count: data.carriers },
    { label: "Finishers", count: data.finishers },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Users size={18} className="text-cyan-400" />
        <h2 className="text-base font-bold text-white tracking-tight">Player Role Balance Analysis</h2>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {roles.map((role, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] rounded-lg border border-white/5 p-5 text-center flex flex-col items-center justify-center min-h-[120px]"
          >
            <p className="text-[10px] text-zinc-500 mb-2 font-medium">{role.label}</p>
            <p className="text-4xl font-bold text-white leading-none mb-1">{role.count}</p>
            <p className="text-[10px] text-zinc-500 font-medium">players</p>
          </div>
        ))}
      </div>

      {/* Balance Banner */}
      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
        <p className="text-sm font-bold text-green-400">
          Balance: {data.balance_status} (optimal mix)
        </p>
      </div>
    </div>
  );
};

export default PlayerRoleBalance;
