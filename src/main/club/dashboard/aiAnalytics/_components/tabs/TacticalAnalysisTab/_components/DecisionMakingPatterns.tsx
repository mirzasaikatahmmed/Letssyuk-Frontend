interface DecisionMakingPatternsProps {
  data?: {
    when_to_press_percent: number;
    when_to_counter_percent: number;
    substitution_timing_percent: number;
    formation_changes_percent: number;
  };
}

const DecisionMakingPatterns = ({ data }: DecisionMakingPatternsProps) => {
  if (!data) return null;

  const patterns = [
    { label: "When to press", value: data.when_to_press_percent, color: "text-cyan-400", barColor: "bg-cyan-400" },
    { label: "When to counter", value: data.when_to_counter_percent, color: "text-green-500", barColor: "bg-green-500" },
    { label: "Substitution timing", value: data.substitution_timing_percent, color: "text-green-500", barColor: "bg-green-500" },
    { label: "Formation changes", value: data.formation_changes_percent, color: "text-yellow-500", barColor: "bg-yellow-500" },
  ];

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5">
      <h2 className="text-base font-bold text-white mb-6">Decision-Making Patterns</h2>

      <div className="grid grid-cols-4 gap-4">
        {patterns.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] rounded-xl border border-white/5 p-4"
          >
            <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">{item.label}</p>
            <p className={`text-2xl font-bold ${item.color} mb-3 tracking-tighter`}>
              {item.value}%
            </p>
            <div className="w-full h-1.5 bg-[#12141B] rounded-full overflow-hidden border border-white/5">
              <div
                className={`h-full ${item.barColor} rounded-full`}
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
