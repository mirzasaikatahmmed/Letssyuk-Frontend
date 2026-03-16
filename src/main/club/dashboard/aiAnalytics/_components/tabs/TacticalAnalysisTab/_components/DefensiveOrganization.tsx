// No imports needed for now as we removed the icons to match user design exactly if they were missing in image
// (The image doesn't show icons for these specific sub-headers usually, but let's keep it clean)


interface DefensiveOrganizationProps {
  data?: {
    shape: string;
    pressing_trigger: string;
    success_rate_percent: number;
    vulnerability: {
      title: string;
      description: string;
    };
  };
}

const DefensiveOrganization = ({ data }: DefensiveOrganizationProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full">
      <h2 className="text-base font-bold text-white mb-6">Defensive Organization</h2>

      <div className="space-y-4">
        {/* Shape */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-4">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">Shape</p>
          <p className="text-sm font-bold text-white">{data.shape}</p>
        </div>

        {/* Pressing Trigger */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-4">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">Pressing Trigger</p>
          <p className="text-sm font-bold text-white truncate">{data.pressing_trigger}</p>
        </div>

        {/* Success Rate */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Success Rate</span>
            <span className="text-sm font-bold text-cyan-400">{data.success_rate_percent}%</span>
          </div>
          <div className="w-full h-2 bg-[#12141B] rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-cyan-400 rounded-full" 
              style={{ width: `${data.success_rate_percent}%` }} 
            />
          </div>
        </div>

        {/* Vulnerability */}
        <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
          <p className="text-[10px] uppercase tracking-wider text-red-500 font-bold mb-1">Vulnerability</p>
          <p className="text-xs text-zinc-300">{data.vulnerability.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DefensiveOrganization;
