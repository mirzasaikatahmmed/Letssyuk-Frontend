const emphasisPoints = [
  "1. Exploit opposition high line",
  "2. Press their right-back",
  "3. Quick switches of play",
  "4. Set-piece routines",
];

const MatchPreparationTalkingPoints = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      <h2 className="text-base font-semibold text-white mb-5">
        Match Preparation Talking Points
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Pre-Match Messaging */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-gray-400 mb-4">Pre-Match Messaging</p>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Theme</p>
              <p className="text-sm font-semibold text-cyan-400">
                "Control through possession"
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Motivation</p>
              <p className="text-sm font-semibold text-white">"Play with courage"</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Focus</p>
              <p className="text-sm font-semibold text-white">"Quick transitions"</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Discipline</p>
              <p className="text-sm font-semibold text-white">"Maintain shape"</p>
            </div>
          </div>
        </div>

        {/* Tactical Emphasis Points */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-gray-400 mb-4">
            Tactical Emphasis Points
          </p>
          <div className="space-y-2">
            {emphasisPoints.map((point, i) => (
              <div
                key={i}
                className="bg-[#18181B] rounded-lg px-4 py-3 text-sm text-gray-300"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPreparationTalkingPoints;
