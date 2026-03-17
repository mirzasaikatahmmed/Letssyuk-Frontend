interface SquadAgeDistributionProps {
  data?: {
    u21: { players: number; percent: number };
    age_22_26: { players: number; percent: number };
    age_27_30: { players: number; percent: number };
    age_31_plus: { players: number; percent: number };
    balance_status: string;
  };
}

const SquadAgeDistribution = ({ data }: SquadAgeDistributionProps) => {
  if (!data) return null;

  const ageGroups = [
    { label: "U21", count: data.u21.players, pct: `${data.u21.percent}%` },
    { label: "22-26", count: data.age_22_26.players, pct: `${data.age_22_26.percent}%` },
    { label: "27-30", count: data.age_27_30.players, pct: `${data.age_27_30.percent}%` },
    { label: "31+", count: data.age_31_plus.players, pct: `${data.age_31_plus.percent}%` },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-4 flex flex-col h-full">
      <h2 className="text-sm font-bold text-white tracking-tight uppercase">Squad Age Distribution</h2>

      <div className="grid grid-cols-2 gap-3 grow">
        {ageGroups.map((group, i) => (
          <div key={i} className="bg-[#1A1D24] rounded-lg border border-white/5 p-4 flex flex-col justify-between">
            <p className="text-[10px] text-zinc-500 font-bold">{group.label}</p>
            <div className="mt-2">
              <p className="text-xl font-bold text-white">
                {group.count} <span className="text-[10px] font-medium text-zinc-500">players</span>
              </p>
              <p className="text-xs font-bold text-cyan-400 mt-1">{group.pct}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
        <p className="text-xs font-bold text-green-500">
          Optimal Balance: {data.balance_status}
        </p>
      </div>
    </div>
  );
};

export default SquadAgeDistribution;
