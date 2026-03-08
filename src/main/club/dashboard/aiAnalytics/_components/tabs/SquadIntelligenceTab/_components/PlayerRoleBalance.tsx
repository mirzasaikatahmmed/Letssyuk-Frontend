import { Users } from "lucide-react";

const roles = [
  { label: "Creators", count: 3 },
  { label: "Destroyers", count: 2 },
  { label: "Carriers", count: 4 },
  { label: "Finishers", count: 3 },
];

const PlayerRoleBalance = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Users size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Player Role Balance Analysis
        </h2>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-4 gap-3 mb-3">
        {roles.map((role, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4 text-center"
          >
            <p className="text-xs text-gray-500 mb-2">{role.label}</p>
            <p className="text-4xl font-bold text-white mb-1">{role.count}</p>
            <p className="text-xs text-gray-500">players</p>
          </div>
        ))}
      </div>

      {/* Balance Banner */}
      <div className="bg-green-900/30 border border-green-800/50 rounded-xl p-4">
        <p className="text-sm font-semibold text-green-400">
          Balance: Good (optimal mix)
        </p>
      </div>
    </div>
  );
};

export default PlayerRoleBalance;
