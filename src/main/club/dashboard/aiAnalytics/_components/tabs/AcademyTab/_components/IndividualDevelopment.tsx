import { GraduationCap } from "lucide-react";

const topStats = [
  { label: "Current Level", value: "Advanced for age", color: "text-cyan-400" },
  { label: "Development Rate", value: "Accelerated", color: "text-cyan-400" },
  { label: "Consistency", value: "Improving", color: "text-white" },
  { label: "Coach Rating", value: "8/10", color: "text-white" },
];

const bottomStats = [
  { label: "Technical", value: "Dribbling mastered", color: "text-cyan-400" },
  { label: "Tactical", value: "Positioning improved", color: "text-cyan-400" },
  { label: "Physical", value: "Strength developing", color: "text-yellow-400" },
  { label: "Mental", value: "Decision making good", color: "text-cyan-400" },
];

const IndividualDevelopment = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <GraduationCap size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Individual Development:{" "}
          <span className="text-cyan-400">John Smith (U18)</span>
        </h2>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-4 gap-3 mb-3">
        {topStats.map((stat, i) => (
          <div key={i} className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className={`text-sm font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-4 gap-3">
        {bottomStats.map((stat, i) => (
          <div key={i} className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className={`text-sm font-medium ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualDevelopment;
