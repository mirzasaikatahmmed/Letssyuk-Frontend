import { Shield } from "lucide-react";

const readinessStats = [
  { label: "Technical", value: "80/10", sub: "Ready", subColor: "text-green-400" },
  { label: "Tactical", value: "70/10", sub: "Needs work", subColor: "text-yellow-400" },
  { label: "Physical", value: "90/10", sub: "Ready", subColor: "text-green-400" },
  { label: "Mental", value: "60/10", sub: "Needs development", subColor: "text-red-400" },
  { label: "Overall", value: "75/10", sub: "75%", subColor: "text-cyan-400" },
];

const PromotionReadiness = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Shield size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          First-Team Promotion Readiness
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-5 gap-3 mb-3">
        {readinessStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4"
          >
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-white mb-1">{stat.value}</p>
            <p className={`text-xs font-medium ${stat.subColor}`}>{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Recommended Timeline */}
      <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-xl p-4">
        <p className="text-xs font-semibold text-cyan-400 mb-1">
          Recommended Timeline
        </p>
        <p className="text-xs text-gray-300">
          18-24 months until first-team ready
        </p>
      </div>
    </div>
  );
};

export default PromotionReadiness;
