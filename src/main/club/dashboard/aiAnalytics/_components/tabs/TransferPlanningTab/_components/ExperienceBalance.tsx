interface ExperienceBalanceProps {
  data?: {
    under_50_apps: string;
    apps_50_150: string;
    apps_150_plus: string;
    ideal_mix_status: string;
  };
}

const ExperienceBalance = ({ data }: ExperienceBalanceProps) => {
  if (!data) return null;

  const experienceRows = [
    { label: "Under 50 apps", value: data.under_50_apps },
    { label: "50-150 apps", value: data.apps_50_150 },
    { label: "150+ apps", value: data.apps_150_plus },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-4 flex flex-col h-full">
      <h2 className="text-sm font-bold text-white tracking-tight uppercase">Experience Balance</h2>

      <div className="space-y-2 grow">
        {experienceRows.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] rounded-lg border border-white/5 p-4 flex justify-between items-center"
          >
            <span className="text-[10px] text-zinc-500 font-bold">{item.label}</span>
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-wide">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
        <p className="text-xs font-bold text-green-500">
          Ideal Mix: {data.ideal_mix_status}
        </p>
      </div>
    </div>
  );
};

export default ExperienceBalance;
