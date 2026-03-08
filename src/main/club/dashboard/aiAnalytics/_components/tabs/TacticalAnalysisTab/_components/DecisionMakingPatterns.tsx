const patterns = [
  { label: "When to press", value: 70, barColor: "bg-green-400", textColor: "text-green-400" },
  { label: "When to counter", value: 85, barColor: "bg-green-400", textColor: "text-green-400" },
  { label: "Substitution timing", value: 80, barColor: "bg-green-400", textColor: "text-green-400" },
  { label: "Formation changes", value: 60, barColor: "bg-yellow-400", textColor: "text-yellow-400" },
];

const DecisionMakingPatterns = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      <h2 className="text-base font-semibold text-white mb-5">
        Decision-Making Patterns
      </h2>

      <div className="grid grid-cols-4 gap-3">
        {patterns.map((item, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4"
          >
            <p className="text-xs text-gray-400 mb-1">{item.label}</p>
            <p className={`text-2xl font-bold ${item.textColor} mb-2`}>
              {item.value}%
            </p>
            <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.barColor} rounded-full transition-all duration-500`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecisionMakingPatterns;
