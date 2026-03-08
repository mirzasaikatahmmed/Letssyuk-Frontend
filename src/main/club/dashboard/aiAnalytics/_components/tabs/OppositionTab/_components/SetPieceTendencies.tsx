const corners = [
  { label: "Near post", pct: 40 },
  { label: "Far post", pct: 35 },
  { label: "Short corner", pct: 15 },
  { label: "Other", pct: 10 },
];

const SetPieceTendencies = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      <h2 className="text-base font-semibold text-white mb-5">
        Set-Piece Tendencies
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Attacking Corners */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-gray-400 mb-4">
            Attacking Corners
          </p>
          <div className="space-y-3">
            {corners.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-gray-300">{item.label}</span>
                  <span className="text-xs font-semibold text-cyan-400">
                    {item.pct}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Target */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4 flex flex-col justify-center">
          <p className="text-xs text-gray-400 mb-2">Key Target</p>
          <p className="text-lg font-bold text-white mb-1">Virgil van Dijk</p>
          <p className="text-xs text-gray-400 mb-3">Height: 6'4" (193 cm)</p>
          <p className="text-xs text-cyan-400">
            Primary aerial threat on attacking set-pieces
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetPieceTendencies;
