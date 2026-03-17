import { Layers, ChevronRight, User, Calendar } from "lucide-react";

interface AdvancedSearchOptionsProps {
  data: Array<{
    title: string;
    description: string;
  }>;
}

const AdvancedSearchOptions = ({ data }: AdvancedSearchOptionsProps) => {
  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 h-full flex flex-col space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20">
          <Layers size={20} className="text-indigo-400" />
        </div>
        <h2 className="text-lg font-bold text-white tracking-tight">
          Advanced Search Options
        </h2>
      </div>

      <div className="space-y-3 flex-1">
        {data.map((option, i) => (
          <div
            key={i}
            className="group bg-[#1A1D24] hover:bg-[#1E222B] rounded-xl border border-white/5 px-5 py-4 cursor-pointer hover:border-indigo-500/30 transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#12141B] flex items-center justify-center border border-white/5 group-hover:border-indigo-500/20 transition-colors">
                {option.title.toLowerCase().includes("player") ? (
                  <User
                    size={14}
                    className="text-zinc-500 group-hover:text-indigo-400"
                  />
                ) : (
                  <Calendar
                    size={14}
                    className="text-zinc-500 group-hover:text-indigo-400"
                  />
                )}
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {option.title}
                </p>
                <p className="text-[11px] font-medium text-zinc-500 mt-0.5">
                  {option.description}
                </p>
              </div>
            </div>
            <ChevronRight
              size={16}
              className="text-zinc-600 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all"
            />
          </div>
        ))}

        <div className="mt-4 p-4 rounded-xl bg-linear-to-br from-indigo-500/5 to-purple-500/5 border border-white/5">
          <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">
            Coming Soon
          </p>
          <p className="text-xs text-zinc-400 font-medium italic">
            Custom tactical pattern matching via AI video analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearchOptions;
