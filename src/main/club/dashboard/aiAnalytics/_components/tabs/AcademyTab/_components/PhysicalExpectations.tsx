interface PhysicalExpectationsProps {
  data?: Array<{
    metric: string;
    target: string;
  }>;
}

const PhysicalExpectations = ({ data }: PhysicalExpectationsProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full">
      <h2 className="text-base font-bold text-white mb-6 tracking-tight">Physical Expectations</h2>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i} className="bg-[#1A1D24] px-4 py-3 rounded-lg border border-white/5 flex justify-between items-center">
            <span className="text-xs text-zinc-300">{item.metric}</span>
            <span className="text-xs font-bold text-cyan-400">{item.target}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhysicalExpectations;
