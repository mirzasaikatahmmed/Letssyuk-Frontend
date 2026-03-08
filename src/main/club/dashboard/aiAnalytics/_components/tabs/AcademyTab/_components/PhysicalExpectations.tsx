const expectations = [
  { label: "Sprint Speed", value: "30m in 4.2 seconds", color: "text-cyan-400" },
  { label: "Endurance", value: "8km match capacity", color: "text-cyan-400" },
  { label: "Strength", value: "Body weight squat x 1.5", color: "text-cyan-400" },
  { label: "Agility", value: "Ladder test in 12 seconds", color: "text-cyan-400" },
];

const PhysicalExpectations = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">
        U18 Physical Expectations
      </h2>

      <div className="space-y-0">
        {expectations.map((item, i) => (
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

export default PhysicalExpectations;
