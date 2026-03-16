import { Target } from "lucide-react";

interface SuggestedTacticalAdjustmentsProps {
  data?: {
    formation_changes: string[];
    pressing_triggers: string[];
    defensive_organization: string[];
  };
}

const SuggestedTacticalAdjustments = ({ data }: SuggestedTacticalAdjustmentsProps) => {
  if (!data) return null;

  const sections = [
    {
      title: "Formation Changes",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/20",
      bg: "bg-[#0A161A]",
      points: data.formation_changes,
    },
    {
      title: "Pressing Triggers",
      color: "text-yellow-500",
      borderColor: "border-yellow-500/20",
      bg: "bg-[#16150A]",
      points: data.pressing_triggers,
    },
    {
      title: "Defensive Organization",
      color: "text-green-500",
      borderColor: "border-green-500/20",
      bg: "bg-[#0A160F]",
      points: data.defensive_organization,
    },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 flex items-center justify-center">
            <Target size={18} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-bold text-white tracking-tight">
          Suggested Tactical Adjustments
        </h2>
      </div>

      <div className="space-y-4">
        {sections.map((section, i) => (
          <div
            key={i}
            className={`${section.bg} border ${section.borderColor} rounded-xl p-5`}
          >
            <p className={`text-xs font-bold ${section.color} mb-3 tracking-tight`}>
              {section.title}
            </p>
            <ul className="space-y-2">
              {section.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2 text-[11px] text-zinc-300">
                  <span className="text-zinc-500 mt-0.5">•</span>
                  <span className="leading-relaxed">{point}</span>
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
