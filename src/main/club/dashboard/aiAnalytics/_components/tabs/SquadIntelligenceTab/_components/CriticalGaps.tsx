import { AlertTriangle } from "lucide-react";

const gaps = [
  "Right-back depth (only 1 senior player)",
  "Defensive midfield cover (aging player)",
  "Left winger backup (injury prone starter)",
  "Goalkeeper succession (veteran retiring)",
];

const CriticalGaps = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <div className="flex items-center gap-2 mb-5">
        <AlertTriangle size={16} className="text-yellow-400" />
        <h2 className="text-base font-semibold text-yellow-400">Critical Gaps</h2>
      </div>

      <div className="space-y-3">
        {gaps.map((item, i) => (
          <div
            key={i}
            className="bg-[#27272A] border-l-4 border-red-500 rounded-r-xl p-4"
          >
            <p className="text-sm text-gray-200">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriticalGaps;
