import { Award } from "lucide-react";

interface SkillDevelopmentPrioritiesProps {
  data: Array<{
    rank: string;
    skill: string;
    priority: string;
  }>;
}

const SkillDevelopmentPriorities = ({ data }: SkillDevelopmentPrioritiesProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "border-red-500";
      case "medium":
        return "border-amber-500";
      default:
        return "border-zinc-500";
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-white px-1 flex items-center gap-2">
        <Award size={18} className="text-cyan-500" />
        Skill Development Priorities
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item, i) => (
          <div
            key={i}
            className={`bg-[#121214] rounded-xl overflow-hidden border border-white/5 border-l-[3px] ${getPriorityColor(
              item.priority
            )} p-6`}
          >
            <p className="text-xs font-bold text-white mb-2">
              {item.rank}. {item.skill}
            </p>
            <p className="text-[10px] font-bold text-amber-500 uppercase tracking-tighter">
              Priority: {item.priority}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillDevelopmentPriorities;
