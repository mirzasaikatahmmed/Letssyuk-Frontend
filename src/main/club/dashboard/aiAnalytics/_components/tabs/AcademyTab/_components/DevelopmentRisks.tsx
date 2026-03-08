import { AlertCircle } from "lucide-react";

const risks = [
  "Minor injury history (ankle)",
  "Academic pressure increasing",
  "Social adjustment needed",
  "Burnout monitoring required",
];

const DevelopmentRisks = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <div className="flex items-center gap-2 mb-5">
        <AlertCircle size={16} className="text-yellow-400" />
        <h2 className="text-base font-semibold text-yellow-400">
          Development Risks
        </h2>
      </div>

      <div className="space-y-3">
        {risks.map((item, i) => (
          <div
            key={i}
            className="bg-[#27272A] border-l-4 border-yellow-500 rounded-r-xl p-4"
          >
            <p className="text-sm text-gray-200">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentRisks;
