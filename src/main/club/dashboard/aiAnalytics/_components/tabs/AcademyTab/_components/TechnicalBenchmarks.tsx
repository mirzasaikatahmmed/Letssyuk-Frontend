const benchmarks = [
  { label: "Passing Accuracy", value: "80% minimum", color: "text-cyan-400" },
  { label: "First Touch", value: "Clean in 8/10 attempts", color: "text-cyan-400" },
  { label: "Shooting", value: "60% on target", color: "text-cyan-400" },
  { label: "Dribbling", value: "5/10 successful take-ons", color: "text-cyan-400" },
];

const TechnicalBenchmarks = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">
        U16 Technical Benchmarks
      </h2>

      <div className="space-y-0">
        {benchmarks.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0"
          >
            <span className="text-sm text-gray-300">{item.label}</span>
            <span className={`text-xs font-medium ${item.color}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalBenchmarks;
