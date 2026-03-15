import { Target } from "lucide-react";

const priorities = [
  { title: "1. Final third decision making", priority: "High", priorityColor: "text-red-400", borderColor: "border-red-500" },
  { title: "2. Defensive transition speed", priority: "High", priorityColor: "text-red-400", borderColor: "border-red-500" },
  { title: "3. Pressing coordination", priority: "Medium", priorityColor: "text-yellow-400", borderColor: "border-yellow-500" },
  { title: "4. Set-piece execution", priority: "Medium", priorityColor: "text-yellow-400", borderColor: "border-yellow-500" },
];

const SkillDevelopmentPriorities = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Target size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Skill Development Priorities
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {priorities.map((item, i) => (
          <div
            key={i}
            className={`bg-[#27272A] border-l-4 ${item.borderColor} rounded-r-xl p-4`}
          >
            <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
            <p className={`text-xs font-medium ${item.priorityColor}`}>
              Priority: {item.priority}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillDevelopmentPriorities;
