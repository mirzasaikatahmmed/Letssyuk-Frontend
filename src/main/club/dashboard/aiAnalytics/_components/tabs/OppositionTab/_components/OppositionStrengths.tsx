interface OppositionStrengthsProps {
  data?: Array<{
    label: string;
    score: number;
  }>;
}

const OppositionStrengths = ({ data }: OppositionStrengthsProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full">
      <h2 className="text-base font-bold text-green-500 mb-6 capitalize tracking-tight">Opposition Strengths</h2>

      <div className="space-y-6">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-zinc-300 font-bold">{item.label}</span>
              <span className="text-xs font-bold text-green-500">
                {item.score}/10
              </span>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${(item.score / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OppositionStrengths;
