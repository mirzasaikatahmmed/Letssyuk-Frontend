import { Shield } from "lucide-react";

const shapeStats = [
  { label: "First Half", value: "85%", sub: "Consistency", color: "text-green-400", barColor: "bg-green-400", pct: 85 },
  { label: "Second Half", value: "72%", sub: "Consistency", color: "text-green-400", barColor: "bg-green-400", pct: 72 },
  { label: "Drop-off", value: "13%", sub: "Fatigue factor", color: "text-red-400", barColor: "bg-red-400", pct: 13 },
];

const DefensiveShapeConsistency = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Shield size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Defensive Shape Consistency
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        {shapeStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4"
          >
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color} mb-1`}>
              {stat.value}
            </p>
            <p className="text-xs text-gray-500 mb-2">{stat.sub}</p>
            <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${stat.barColor} rounded-full`}
                style={{ width: `${stat.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Key Issue */}
      <div className="bg-yellow-900/30 border border-yellow-800/50 rounded-xl p-4">
        <p className="text-xs font-semibold text-yellow-400 mb-1">Key Issue</p>
        <p className="text-xs text-gray-300">Wide spacing in final 20 minutes</p>
      </div>
    </div>
  );
};

export default DefensiveShapeConsistency;
