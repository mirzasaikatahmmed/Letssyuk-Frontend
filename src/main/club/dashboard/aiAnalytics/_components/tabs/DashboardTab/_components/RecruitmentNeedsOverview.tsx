const RecruitmentNeedsOverview = () => {
  const positions = [
    { position: "Right-back", status: "Shortlisted", count: "5 candidates", countColor: "text-yellow-400" },
    { position: "Midfielder", status: "Trials Scheduled", count: "3 trials", countColor: "text-cyan-400" },
    { position: "Forward", status: "Scouting Ongoing", count: null, countColor: "" },
    { position: "Goalkeeper", status: "Targets Identified", count: "2 targets", countColor: "text-red-400" },
  ];

  const stats = [
    { label: "Applications", value: "85", color: "text-cyan-400" },
    { label: "Shortlisted", value: "12", color: "text-cyan-400" },
    { label: "Trials", value: "5", color: "text-cyan-400" },
    { label: "Offers Made", value: "1", color: "text-cyan-400" },
    { label: "Signed", value: "0", color: "text-green-400" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-cyan-400">👥</span> Recruitment Needs Overview
      </h2>

      {/* Position cards */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {positions.map((item, idx) => (
          <div key={idx} className="bg-[#18181B] p-4 rounded-xl border border-gray-800">
            <p className="text-sm font-semibold text-white mb-1">{item.position}</p>
            <p className="text-xs text-gray-400 mb-1">{item.status}</p>
            {item.count && (
              <p className={`text-xs font-medium ${item.countColor}`}>{item.count}</p>
            )}
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-5 gap-4">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-[#18181B] p-4 rounded-xl border border-gray-800 text-center">
            <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
            <p className="text-xs text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentNeedsOverview;
