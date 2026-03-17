import { Clock, AlertCircle, CheckCircle2 } from "lucide-react";

interface UpcomingTasksAndScheduleProps {
  data?: {
    tasks: Array<{
      task: string;
      priority: string;
    }>;
    weekly_schedule: Array<{
      day: string;
      activity: string;
    }>;
  };
}

const UpcomingTasksAndSchedule = ({ data }: UpcomingTasksAndScheduleProps) => {
  if (!data) return null;

  const getPriorityInfo = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return { color: "text-red-500", icon: <AlertCircle size={14} className="text-red-500" /> };
      case "medium":
        return { color: "text-yellow-500", icon: <AlertCircle size={14} className="text-yellow-500" /> };
      default:
        return { color: "text-zinc-500", icon: <Clock size={14} className="text-zinc-500" /> };
    }
  };

  const getScheduleStyles = (activity: string) => {
    const act = activity.toLowerCase();
    if (act.includes("completed")) return { color: "text-green-500", icon: <CheckCircle2 size={12} className="text-green-500" /> };
    if (act.includes("pending")) return { color: "text-yellow-500", icon: null };
    return { color: "text-zinc-400", icon: null };
  };

  return (
    <div className="bg-[#12141B] p-6 rounded-2xl border border-white/5 h-full">
      <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <Clock className="text-cyan-400" size={20} />
        Upcoming Analysis Tasks
      </h2>

      <div className="space-y-3 mb-8">
        {data.tasks.map((item, idx) => {
          const { color, icon } = getPriorityInfo(item.priority);
          return (
            <div key={idx} className="bg-[#1A1D24] p-4 rounded-xl border border-white/5 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                {icon}
                <p className="text-sm text-white font-semibold">{item.task}</p>
              </div>
              <div className="flex items-center gap-1 ml-[26px]">
                <span className="text-[10px] text-zinc-500 uppercase tracking-tight">Priority:</span>
                <span className={`text-[10px] font-bold ${color}`}>{item.priority}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#1A1D24] p-4 rounded-xl border border-white/5">
        <p className="text-sm font-semibold text-white mb-4">Weekly Schedule</p>
        <div className="space-y-3">
          {data.weekly_schedule.map((item, idx) => {
            const { color, icon } = getScheduleStyles(item.activity);
            return (
              <div key={idx} className="flex justify-between items-center text-[11px]">
                <span className="text-zinc-500 font-medium">{item.day}:</span>
                <div className="flex items-center gap-2">
                  <span className={`${color} font-medium`}>{item.activity}</span>
                  {icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpcomingTasksAndSchedule;
