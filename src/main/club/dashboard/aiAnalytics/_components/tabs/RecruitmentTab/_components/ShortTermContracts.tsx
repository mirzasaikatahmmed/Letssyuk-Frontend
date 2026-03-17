interface ShortTermContractsProps {
  data?: {
    duration: string;
    compensation: string;
    bonuses: string;
  };
}

const ShortTermContracts = ({ data }: ShortTermContractsProps) => {
  if (!data) return null;

  const shortTermDetails = [
    { label: "Duration", value: data.duration },
    { label: "Compensation", value: data.compensation },
    { label: "Bonuses", value: data.bonuses },
  ];

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full space-y-5">
      <h2 className="text-sm font-bold text-white tracking-tight">Short-Term Contracts</h2>

      <div className="space-y-2">
        {shortTermDetails.map((item, i) => (
          <div key={i} className="bg-[#1A1D24] rounded-lg border border-white/5 p-4 space-y-1">
            <p className="text-[10px] text-zinc-500 font-medium">{item.label}</p>
            <p className="text-xs font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortTermContracts;
