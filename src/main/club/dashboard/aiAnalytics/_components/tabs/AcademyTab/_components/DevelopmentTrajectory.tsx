import { TrendingUp } from "lucide-react";

const trajectoryStats = [
  {
    label: "Growth Rate",
    value: "+15%",
    sub: "per 6 months",
    color: "text-green-400",
  },
  {
    label: "Acceleration",
    value: "Yes",
    sub: "Last 3 months",
    color: "text-green-400",
  },
  {
    label: "Plateau Risk",
    value: "Low",
    sub: null,
    color: "text-cyan-400",
  },
  {
    label: "Projected Peak",
    value: "24-28",
    sub: "years old",
    color: "text-white",
  },
];

const DevelopmentTrajectory = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <TrendingUp size={16} className="text-cyan-400" />
        <h2 className="text-base font-semibold text-cyan-400">
          Development Trajectory
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {trajectoryStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4"
          >
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            {stat.sub && (
              <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentTrajectory;
