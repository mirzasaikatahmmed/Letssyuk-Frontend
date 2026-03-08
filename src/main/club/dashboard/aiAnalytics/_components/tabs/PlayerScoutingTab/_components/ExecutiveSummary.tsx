import { DollarSign } from "lucide-react";

const summaryStats = [
  {
    label: "Top Recommendation",
    value: "Player A",
    sub: "Age 19",
    valueClass: "text-white",
  },
  {
    label: "Fit Score",
    value: "85/100",
    sub: null,
    valueClass: "text-cyan-400",
  },
  {
    label: "Estimated Value",
    value: "€8-12M",
    sub: null,
    valueClass: "text-white",
  },
  {
    label: "Development Time",
    value: "12-18 months",
    sub: null,
    valueClass: "text-white",
  },
  {
    label: "Risk Level",
    value: "Medium",
    sub: null,
    valueClass: "text-yellow-400",
  },
];

const ExecutiveSummary = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <DollarSign size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">Executive Summary</h2>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-5 gap-3">
        {summaryStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4"
          >
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className={`text-lg font-bold ${stat.valueClass}`}>
              {stat.value}
            </p>
            {stat.sub && (
              <p className="text-xs text-gray-500 mt-0.5">{stat.sub}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveSummary;
