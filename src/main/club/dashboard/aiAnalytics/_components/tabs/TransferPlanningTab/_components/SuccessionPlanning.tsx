import { Share2 } from "lucide-react";

interface SuccessionPlanningProps {
  data?: Array<{
    rank: string;
    player: string;
    detail: string;
    badge: string;
  }>;
}

const SuccessionPlanning = ({ data }: SuccessionPlanningProps) => {
  if (!data) return null;

  // Since the API doesn't have a specific succession field, 
  // we'll display the top candidates from the renewal assessment as a "Pathway"
  const pathwayTags = [
    { label: "Current", color: "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]" },
    { label: "Successor", color: "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.4)]" },
    { label: "Future", color: "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
          <Share2 size={20} className="text-cyan-400" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white uppercase tracking-tight">
            Succession Planning
          </h2>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">Pipeline Analytics</p>
        </div>
      </div>

      <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-8">
        <p className="text-[10px] uppercase font-black text-zinc-500 tracking-wider mb-8">
          Player Succession Pathway
        </p>

        {/* Pathway */}
        <div className="space-y-4">
          {data.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="flex flex-col items-center">
                <span className={`text-[10px] font-black uppercase px-4 py-1.5 rounded-full text-black tracking-widest ${pathwayTags[i]?.color || "bg-zinc-700"}`}>
                  {pathwayTags[i]?.label || "Next"}
                </span>
                {i < Math.min(data.length, 3) - 1 && (
                  <div className="w-px h-8 bg-linear-to-b from-white/10 to-transparent my-1" />
                )}
              </div>
              <div>
                <p className="text-sm font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                  {item.player}
                </p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1 tracking-wide">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-8 bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-4 flex items-center justify-between">
          <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">
            Timeline: Transition estimated in 12-18 months
          </p>
          <div className="flex -space-x-2">
            {[1, 2, 3].map((n) => (
                <div key={n} className="w-6 h-6 rounded-full border-2 border-[#1A1D24] bg-zinc-800" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessionPlanning;
