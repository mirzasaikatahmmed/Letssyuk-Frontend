import { Target } from "lucide-react";

const scores = [
  { label: "Attack Score", value: "8.2/10", color: "text-green-400" },
  { label: "Defense Score", value: "7.8/10", color: "text-green-400" },
  { label: "Transition Score", value: "8.5/10", color: "text-green-400" },
  { label: "Overall", value: "8.1/10", color: "text-green-400" },
];

const positionalDiscipline = [
  { role: "Full-backs", note: "Maintain width well" },
  { role: "Midfielders", note: "Good spacing" },
  { role: "Center-backs", note: "Good coordination" },
  { role: "Forwards", note: "Excellent movement" },
];

const FormationEffectiveness = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Target size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          4-3-3 Formation Effectiveness
        </h2>
      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {scores.map((item, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4"
          >
            <p className="text-xs text-gray-500 mb-1">{item.label}</p>
            <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Positional Discipline */}
      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
        <p className="text-sm font-semibold text-white mb-3">
          Positional Discipline
        </p>
        <div className="grid grid-cols-2 gap-y-2 gap-x-6">
          {positionalDiscipline.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5 text-xs">●</span>
              <span className="text-xs text-gray-300">
                <span className="font-semibold text-white">{item.role}:</span>{" "}
                {item.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormationEffectiveness;
