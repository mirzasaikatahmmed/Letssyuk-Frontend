import { Target } from "lucide-react";

const adjustments = [
  {
    title: "Formation Changes",
    titleColor: "text-cyan-400",
    borderColor: "border-cyan-800/50",
    bg: "bg-cyan-900/20",
    points: [
      "Switch to 4-2-3-1 for midfield stability",
      "Deploy pacey forward to exploit high line",
      "Use overlapping full-backs on right side",
    ],
  },
  {
    title: "Pressing Triggers",
    titleColor: "text-yellow-400",
    borderColor: "border-yellow-800/50",
    bg: "bg-yellow-900/20",
    points: [
      "Press when goalkeeper has ball",
      "Trap right-back in possession",
      "Force play to left side",
    ],
  },
  {
    title: "Defensive Organization",
    titleColor: "text-green-400",
    borderColor: "border-green-800/50",
    bg: "bg-green-900/20",
    points: [
      "Compact mid-block (40-60 yards)",
      "Quick counter-attack triggers",
      "Man-mark Salah with two players",
    ],
  },
];

const SuggestedTacticalAdjustments = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Target size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Suggested Tactical Adjustments
        </h2>
      </div>

      <div className="space-y-3">
        {adjustments.map((section, i) => (
          <div
            key={i}
            className={`${section.bg} border ${section.borderColor} rounded-xl p-4`}
          >
            <p className={`text-xs font-semibold ${section.titleColor} mb-2`}>
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-gray-300">
                  <span className="text-gray-500 mt-0.5">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedTacticalAdjustments;
