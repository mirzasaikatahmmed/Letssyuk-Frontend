// No icons needed based on design image


interface TacticalWeaknessesProps {
  data?: string[];
}

const TacticalWeaknesses = ({ data }: TacticalWeaknessesProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-base font-bold text-red-500 capitalize tracking-tight">Tactical Weaknesses</h2>
      </div>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] border-l-4 border-red-500 rounded-lg p-3"
          >
            <p className="text-[11px] font-medium text-zinc-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TacticalWeaknesses;
