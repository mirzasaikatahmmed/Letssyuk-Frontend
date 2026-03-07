const DashboardTab = () => {
  return (
    <div className="space-y-6">
      {/* Live Performance Summary */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-red-500">⚡</span> Live Performance Summary
        </h2>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-[#11161D] p-4 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 mb-1">Current Match</p>
            <p className="text-xl font-bold text-green-400">Leading 2-1</p>
            <p className="text-xs text-green-500">+3% vs avg</p>
          </div>
          <div className="bg-[#11161D] p-4 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 mb-1">Possession</p>
            <p className="text-xl font-bold text-white">58%</p>
            <p className="text-xs text-cyan-500">Advantage</p>
          </div>
          <div className="bg-[#11161D] p-4 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 mb-1">Shots</p>
            <p className="text-xl font-bold text-white">12-8</p>
            <p className="text-xs text-cyan-500">Advantage</p>
          </div>
          <div className="bg-[#11161D] p-4 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 mb-1">xG (Expected Goals)</p>
            <p className="text-xl font-bold text-white">2.1-1.3</p>
            <p className="text-xs text-green-500">Better</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#11161D] p-4 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 mb-1">Attacking</p>
            <p className="text-2xl font-bold text-cyan-400">7.8/10</p>
          </div>
          <div className="bg-[#11161D] p-4 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 mb-1">Defending</p>
            <p className="text-2xl font-bold text-cyan-400">8.2/10</p>
          </div>
          <div className="bg-[#11161D] p-4 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 mb-1">Transition</p>
            <p className="text-2xl font-bold text-cyan-400">8.5/10</p>
          </div>
          <div className="bg-[#11161D] p-4 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 mb-1">Set Pieces</p>
            <p className="text-2xl font-bold text-yellow-400">7.0/10</p>
          </div>
        </div>
      </div>

      {/* Recent Match Reports & Upcoming Tasks */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-red-500">📊</span> Recent Match Reports
          </h2>
          <div className="space-y-3">
            {[
              { match: "Win vs Liverpool", rating: "4.2/5", color: "text-green-400" },
              { match: "Draw vs Chelsea", rating: "3.8/5", color: "text-yellow-400" },
              { match: "Win vs Arsenal", rating: "4.5/5", color: "text-green-400" },
              { match: "Loss vs Man City", rating: "3/5", color: "text-red-400" },
              { match: "Win vs Tottenham", rating: "4/5", color: "text-green-400" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#11161D] p-4 rounded-xl border border-gray-800 flex justify-between items-center">
                <div>
                  <p className="text-sm text-white font-medium">{item.match}</p>
                  <p className="text-xs text-gray-500">Rating: {item.rating}</p>
                </div>
                <span className={`text-2xl ${item.color}`}>●</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-cyan-400">⏰</span> Upcoming Analysis Tasks
          </h2>
          <div className="space-y-3">
            {[
              { task: "Opposition Analysis: Liverpool", priority: "High", color: "text-red-400" },
              { task: "Player Scouting: Right-back targets", priority: "Medium", color: "text-yellow-400" },
              { task: "Academy Review: U18 performance", priority: "Low", color: "text-gray-400" },
              { task: "Tactical Workshop: Defensive shape", priority: "High", color: "text-red-400" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#11161D] p-4 rounded-xl border border-gray-800">
                <p className="text-sm text-white font-medium">{item.task}</p>
                <p className={`text-xs ${item.color}`}>Priority: {item.priority}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Schedule & Recruitment Needs */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Weekly Schedule</h2>
          <div className="bg-[#11161D] p-4 rounded-xl border border-gray-800 space-y-2">
            {[
              { day: "Monday", task: "Match review (completed)", status: "text-green-400" },
              { day: "Tuesday", task: "Opposition analysis (pending)", status: "text-yellow-400" },
              { day: "Wednesday", task: "Player assessments (scheduled)", status: "text-cyan-400" },
              { day: "Thursday", task: "Tactical planning (scheduled)", status: "text-cyan-400" },
              { day: "Friday", task: "Pre-match briefing (scheduled)", status: "text-cyan-400" },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
                <span className="text-sm text-gray-400">{item.day}:</span>
                <span className={`text-xs ${item.status}`}>{item.task}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-cyan-400">👥</span> Recruitment Needs Overview
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { position: "Right-back", status: "Shortlisted", count: "5 candidates", color: "text-yellow-400" },
              { position: "Midfielder", status: "Trials Scheduled", count: "3 trials", color: "text-cyan-400" },
              { position: "Forward", status: "Scouting Ongoing", count: "", color: "text-gray-400" },
              { position: "Goalkeeper", status: "Targets Identified", count: "2 targets", color: "text-red-400" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#11161D] p-4 rounded-xl border border-gray-800">
                <p className="text-sm font-semibold text-white mb-1">{item.position}</p>
                <p className={`text-xs ${item.color} mb-1`}>{item.status}</p>
                {item.count && <p className="text-xs text-gray-500">{item.count}</p>}
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#11161D] p-4 rounded-xl border border-gray-800">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-cyan-400">85</p>
                <p className="text-xs text-gray-500">Applications</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">12</p>
                <p className="text-xs text-gray-500">Shortlisted</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">5</p>
                <p className="text-xs text-gray-500">Trials</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">0</p>
                <p className="text-xs text-gray-500">Signed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;
