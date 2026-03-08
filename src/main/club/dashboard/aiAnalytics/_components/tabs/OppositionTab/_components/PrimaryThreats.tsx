import { Users } from "lucide-react";

const threats = [
  {
    name: "Mohamed Salah (RW)",
    score: "9/10",
    weakness: "Defensive contribution",
    strategy: "Double team, force inside",
  },
  {
    name: "Virgil van Dijk (CB)",
    score: "8/10",
    weakness: "Pace against quick forwards",
    strategy: "Target with speed",
  },
];

const PrimaryThreats = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Users size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">Primary Threats</h2>
      </div>

      {/* Threat Cards */}
      <div className="grid grid-cols-2 gap-4">
        {threats.map((threat, i) => (
          <div
            key={i}
            className="bg-[#27272A] border-l-4 border-red-500 rounded-r-xl p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-semibold text-white">{threat.name}</p>
              <span className="text-sm font-bold text-red-400">{threat.score}</span>
            </div>
            <p className="text-xs text-gray-400 mb-1">
              Weakness: {threat.weakness}
            </p>
            <p className="text-xs text-cyan-400">
              Strategy: {threat.strategy}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimaryThreats;
