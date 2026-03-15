const UpcomingTasksAndSchedule = () => {
  const tasks = [
    {
      task: "Opposition Analysis: Liverpool",
      priority: "High",
      priorityColor: "text-red-400",
      icon: "🔴",
    },
    {
      task: "Player Scouting: Right-back targets",
      priority: "Medium",
      priorityColor: "text-yellow-400",
      icon: "🟡",
    },
    {
      task: "Academy Review: U18 performance",
      priority: "Low",
      priorityColor: "text-gray-400",
      icon: "⭕",
    },
    {
      task: "Tactical Workshop: Defensive shape",
      priority: "High",
      priorityColor: "text-red-400",
      icon: "🔴",
    },
  ];

  const schedule = [
    { day: "Monday", task: "Match review (completed)", color: "text-green-400" },
    { day: "Tuesday", task: "Opposition analysis (pending)", color: "text-yellow-400" },
    { day: "Wednesday", task: "Player assessments (scheduled)", color: "text-gray-400" },
    { day: "Thursday", task: "Tactical planning (scheduled)", color: "text-gray-400" },
    { day: "Friday", task: "Pre-match briefing (scheduled)", color: "text-gray-400" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-cyan-400">⏰</span> Upcoming Analysis Tasks
      </h2>
      <div className="bg-[#18181B] rounded-xl border border-gray-800 overflow-hidden">
        {/* Tasks */}
        <div className="divide-y divide-gray-800">
          {tasks.map((item, idx) => (
            <div key={idx} className="px-4 py-3">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs">{item.icon}</span>
                <p className="text-sm text-white font-medium">{item.task}</p>
              </div>
              <p className={`text-xs ${item.priorityColor} ml-5`}>
                Priority: {item.priority}
              </p>
            </div>
          ))}
        </div>

        {/* Weekly Schedule embedded */}
        <div className="px-4 py-4 border-t border-gray-800">
          <p className="text-sm font-semibold text-white mb-3">Weekly Schedule</p>
          <div className="space-y-2">
            {schedule.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center"
              >
                <span className="text-xs text-gray-400">{item.day}:</span>
                <span className={`text-xs ${item.color}`}>{item.task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTasksAndSchedule;
