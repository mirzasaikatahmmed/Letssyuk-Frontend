import { Users, Check } from "lucide-react";

const playerAPoints = [
  "Better technical skills",
  "Higher ceiling",
  "Adapts better to system",
];

const playerBPoints = [
  "More physically developed",
  "Ready now",
  "Better immediate ROI",
];

const ComparativeAnalysis = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Users size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Comparative Analysis:{" "}
          <span className="text-gray-400">Player A vs Player B</span>
        </h2>
      </div>

      {/* Player Comparison Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Player A */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-sm font-semibold text-white mb-3">Player A</p>
          <ul className="space-y-2">
            {playerAPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Player B */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-sm font-semibold text-white mb-3">Player B</p>
          <ul className="space-y-2">
            {playerBPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComparativeAnalysis;
