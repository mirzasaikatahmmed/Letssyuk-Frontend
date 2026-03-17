import { Calendar } from "lucide-react";

interface TrainingFocusRecommendationsProps {
  data: Array<{
    day: string;
    focus: string;
    intensity: string;
  }>;
}

const TrainingFocusRecommendations = ({ data }: TrainingFocusRecommendationsProps) => {
  const getBadgeStyles = (intensity: string) => {
    switch (intensity.toLowerCase()) {
      case "high":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "very high":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "medium":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "low":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "match":
        return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
      case "rest":
      default:
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-white px-1 flex items-center gap-2">
        <Calendar size={18} className="text-cyan-500" />
        Training Focus Recommendations (Next Week)
      </h3>

      <div className="space-y-2">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#121214] rounded-2xl border border-white/5 px-6 py-4"
          >
            <div>
              <p className="text-xs font-bold text-white mb-1.5">{item.day}</p>
              <p className="text-[10px] text-zinc-500 font-medium">
                Technical ({item.focus})
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter border ${getBadgeStyles(
                item.intensity
              )}`}
            >
              {item.intensity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingFocusRecommendations;
