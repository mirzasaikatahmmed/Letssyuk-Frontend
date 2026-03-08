import { TrendingUp } from "lucide-react";

const fitScores = [
  { label: "System Compatibility", score: 85, max: 100 },
  { label: "Formation Adaptation", score: 78, max: 100 },
  { label: "Tactical Discipline", score: 92, max: 100 },
  { label: "Overall Fit", score: 85, max: 100 },
];

const TacticalFitScoring = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <TrendingUp size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">Tactical Fit Scoring</h2>
      </div>

      {/* Progress Bars */}
      <div className="space-y-5">
        {fitScores.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">{item.label}</span>
              <span className="text-sm font-semibold text-cyan-400">
                {item.score}/{item.max}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${(item.score / item.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TacticalFitScoring;
