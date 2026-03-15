const shortTermDetails = [
  { label: "Duration", value: "6-12 months" },
  { label: "Compensation", value: "Market rate 70-100%" },
  { label: "Bonuses", value: "Performance-based" },
];

const ShortTermContracts = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">
        Short-Term Contracts
      </h2>

      <div className="space-y-3">
        {shortTermDetails.map((item, i) => (
          <div key={i} className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
            <p className="text-xs text-gray-500 mb-1">{item.label}</p>
            <p className="text-sm font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortTermContracts;
