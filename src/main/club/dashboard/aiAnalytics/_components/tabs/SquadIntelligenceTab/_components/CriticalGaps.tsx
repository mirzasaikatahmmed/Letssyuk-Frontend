import { AlertTriangle } from "lucide-react";

interface CriticalGapsProps {
  data?: string[];
}

const CriticalGaps = ({ data }: CriticalGapsProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full space-y-5">
      <div className="flex items-center gap-2">
        <AlertTriangle size={18} className="text-red-500" />
        <h2 className="text-base font-bold text-red-500 tracking-tight">Critical Gaps</h2>
      </div>

      <div className="space-y-2">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] border-l-2 border-red-500 rounded-lg p-4"
          >
            <p className="text-sm text-zinc-400 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriticalGaps;
