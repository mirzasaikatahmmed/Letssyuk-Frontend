import { Medal } from "lucide-react";

interface TalentMarkersProps {
  data?: string[];
}

const TalentMarkers = ({ data }: TalentMarkersProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full">
      <div className="flex items-center gap-2 mb-6">
        <Medal size={18} className="text-green-500" />
        <h2 className="text-base font-bold text-white tracking-tight">Talent Markers</h2>
      </div>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] rounded-lg border border-white/5 p-4 flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
            <p className="text-[11px] text-zinc-300 font-medium leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentMarkers;
