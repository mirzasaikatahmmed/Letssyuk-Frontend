import { Target } from "lucide-react";

const skillRequirements = [
  { label: "Defensive positioning:", value: "8/10 minimum" },
  { label: "Crossing accuracy:", value: "70% minimum" },
  { label: "Pace (30m sprint):", value: "Under 4.0 seconds" },
  { label: "Recovery speed:", value: "Essential" },
];

const experienceLevel = [
  { label: "Minimum appearances:", value: "50", color: "text-white" },
  { label: "Preferred appearances:", value: "100+", color: "text-white" },
  { label: "Age range:", value: "22-28 years", color: "text-white" },
  { label: "Development potential:", value: "High", color: "text-green-400" },
];

const PositionNeeds = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Target size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Position Needs:{" "}
          <span className="text-cyan-400">Right-Back Requirements</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Skill Requirements */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-cyan-400 mb-3">
            Skill Requirements
          </p>
          <div className="space-y-2">
            {skillRequirements.map((item, i) => (
              <div key={i} className="flex justify-between items-start">
                <span className="text-xs text-gray-400">{item.label}</span>
                <span className="text-xs text-white font-semibold text-right ml-4">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-cyan-400 mb-3">
            Experience Level
          </p>
          <div className="space-y-2">
            {experienceLevel.map((item, i) => (
              <div key={i} className="flex justify-between items-start">
                <span className="text-xs text-gray-400">{item.label}</span>
                <span className={`text-xs font-semibold text-right ml-4 ${item.color}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionNeeds;
