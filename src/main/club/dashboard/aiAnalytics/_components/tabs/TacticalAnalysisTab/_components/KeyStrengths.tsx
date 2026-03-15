import { TrendingUp } from "lucide-react";

const strengths = [
  { label: "Counter-attack speed", score: 8.5, max: 10 },
  { label: "Set-piece defense", score: 9, max: 10 },
  { label: "Midfield pressing coordination", score: 8, max: 10 },
  { label: "Transition defense", score: 7.5, max: 10 },
];

const KeyStrengths = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <TrendingUp size={16} className="text-cyan-400" />
        <h2 className="text-base font-semibold text-cyan-400">Key Strengths</h2>
      </div>

      <div className="space-y-4">
        {strengths.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-gray-300">{item.label}</span>
              <span className="text-xs font-semibold text-green-400">
                {item.score}/{item.max}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 rounded-full transition-all duration-500"
                style={{ width: `${(item.score / item.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyStrengths;
