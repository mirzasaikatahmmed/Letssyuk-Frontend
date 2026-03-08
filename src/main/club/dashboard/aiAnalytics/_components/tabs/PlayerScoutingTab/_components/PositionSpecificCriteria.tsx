import { Target } from "lucide-react";

const technicalRequirements = [
  { label: "Passing accuracy:", value: "Minimum 85%" },
  { label: "Chance creation:", value: "2+ key passes/game" },
  { label: "Dribbling success:", value: "60% in final third" },
  { label: "Shooting accuracy:", value: "50% on target" },
];

const physicalCharacteristics = [
  { label: "Endurance:", value: "10km+ per match" },
  { label: "Acceleration:", value: "0-10m in 1.8s" },
  { label: "Agility:", value: "Quick direction changes" },
  { label: "Strength:", value: "Hold off challenges" },
];

const tacticalUnderstanding = [
  "Positional awareness in 4-2-3-1",
  "Pressing triggers understanding",
  "Transition timing",
  "Defensive contribution",
];

const psychologicalAttributes = [
  "Decision making under pressure",
  "Leadership potential",
  "Growth mindset",
  "Match temperament",
];

const PositionSpecificCriteria = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Target size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Position-Specific Criteria:{" "}
          <span className="text-cyan-400">Attacking Midfielder</span>
        </h2>
      </div>

      {/* Top Row: Technical & Physical */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Technical Requirements */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            Technical Requirements
          </p>
          <div className="space-y-2">
            {technicalRequirements.map((item, i) => (
              <div key={i} className="flex justify-between items-start">
                <span className="text-xs text-gray-400">{item.label}</span>
                <span className="text-xs text-white font-medium text-right ml-2">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Characteristics */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            Physical Characteristics
          </p>
          <div className="space-y-2">
            {physicalCharacteristics.map((item, i) => (
              <div key={i} className="flex justify-between items-start">
                <span className="text-xs text-gray-400">{item.label}</span>
                <span className="text-xs text-white font-medium text-right ml-2">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Tactical & Psychological */}
      <div className="grid grid-cols-2 gap-4">
        {/* Tactical Understanding */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            Tactical Understanding
          </p>
          <ul className="space-y-1.5">
            {tacticalUnderstanding.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                <span className="text-gray-600 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Psychological Attributes */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            Psychological Attributes
          </p>
          <ul className="space-y-1.5">
            {psychologicalAttributes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                <span className="text-gray-600 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PositionSpecificCriteria;
