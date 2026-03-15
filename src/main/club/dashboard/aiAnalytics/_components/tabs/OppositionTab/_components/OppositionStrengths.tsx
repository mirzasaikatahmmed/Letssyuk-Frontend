const strengths = [
  { label: "High press effectiveness", score: 9, max: 10 },
  { label: "Counter-attack speed", score: 8.5, max: 10 },
  { label: "Set-piece variety", score: 8, max: 10 },
  { label: "Midfield intensity", score: 8.5, max: 10 },
];

const OppositionStrengths = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-green-400 mb-5">
        Opposition Strengths
      </h2>

      <div className="space-y-4">
        {strengths.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-gray-300">{item.label}</span>
              <span className="text-xs font-semibold text-green-400">
                {item.score}/{item.max}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 rounded-full transition-all duration-500"
                style={{ width: `${(item.score / item.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OppositionStrengths;
