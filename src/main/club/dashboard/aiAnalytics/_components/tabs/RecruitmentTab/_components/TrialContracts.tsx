interface TrialContractsProps {
  data?: {
    duration: string;
    compensation: string;
    evaluation: string;
  };
}

const TrialContracts = ({ data }: TrialContractsProps) => {
  if (!data) return null;

  const trialDetails = [
    { label: "Duration", value: data.duration },
    { label: "Compensation", value: data.compensation },
    { label: "Evaluation", value: data.evaluation },
  ];

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full space-y-5">
      <h2 className="text-sm font-bold text-white tracking-tight">Trial Contracts</h2>

      <div className="space-y-2">
        {trialDetails.map((item, i) => (
          <div key={i} className="bg-[#1A1D24] rounded-lg border border-white/5 p-4 space-y-1">
            <p className="text-[10px] text-zinc-500 font-medium">{item.label}</p>
            <p className="text-xs font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrialContracts;
