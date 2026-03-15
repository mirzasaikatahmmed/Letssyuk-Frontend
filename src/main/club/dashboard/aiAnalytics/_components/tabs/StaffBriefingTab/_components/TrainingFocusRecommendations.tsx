import { Calendar } from "lucide-react";

const schedule = [
  { day: "Monday", activity: "Technical (passing patterns)", badge: "Medium", badgeBg: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { day: "Tuesday", activity: "Tactical (defensive shape)", badge: "High", badgeBg: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  { day: "Wednesday", activity: "Physical (high intensity)", badge: "Very High", badgeBg: "bg-red-500/20 text-red-400 border-red-500/30" },
  { day: "Thursday", activity: "Tactical (attacking moves)", badge: "Medium", badgeBg: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { day: "Friday", activity: "Light session (set-pieces)", badge: "Low", badgeBg: "bg-green-500/20 text-green-400 border-green-500/30" },
  { day: "Saturday", activity: "Match", badge: "Match", badgeBg: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  { day: "Sunday", activity: "Recovery", badge: "Rest", badgeBg: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
];

const TrainingFocusRecommendations = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Calendar size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Training Focus Recommendations{" "}
          <span className="text-gray-400">(Next Week)</span>
        </h2>
      </div>

      <div className="space-y-2">
        {schedule.map((item, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 px-4 py-3 flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-semibold text-white">{item.day}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.activity}</p>
            </div>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.badgeBg}`}
            >
              {item.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingFocusRecommendations;
