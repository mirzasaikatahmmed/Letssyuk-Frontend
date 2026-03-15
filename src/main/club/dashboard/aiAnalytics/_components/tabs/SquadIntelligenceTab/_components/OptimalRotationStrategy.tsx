import { BarChart2 } from "lucide-react";

const rotationStats = [
  { label: "Core Players", value: "70-80%", sub: "of minutes" },
  { label: "Rotation Players", value: "40-60%", sub: "of minutes" },
  { label: "Squad Players", value: "20-40%", sub: "of minutes" },
  { label: "Youth Integration", value: "10-20%", sub: "of minutes" },
];

const OptimalRotationStrategy = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <BarChart2 size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Optimal Rotation Strategy
        </h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3">
        {rotationStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4"
          >
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptimalRotationStrategy;
