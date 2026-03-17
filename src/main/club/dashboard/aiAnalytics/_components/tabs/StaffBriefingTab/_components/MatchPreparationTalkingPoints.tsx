interface MatchPreparationTalkingPointsProps {
  data: {
    pre_match_messaging: {
      theme: string;
      motivation: string;
      focus: string;
      discipline: string;
    };
    tactical_emphasis_points: Array<{
      order: string;
      text: string;
    }>;
  };
}

const MatchPreparationTalkingPoints = ({ data }: MatchPreparationTalkingPointsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-white px-1">
        Match Preparation Talking Points
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pre-Match Messaging */}
        <div className="bg-[#121214] rounded-2xl border border-white/5 p-6">
          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-6">
            Pre-Match Messaging
          </p>
          <div className="space-y-5">
            <div>
              <p className="text-[10px] text-zinc-500 font-bold mb-1 uppercase tracking-tight">Theme</p>
              <p className="text-xs text-cyan-500 font-black italic">"{data.pre_match_messaging.theme}"</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-bold mb-1 uppercase tracking-tight">Motivation</p>
              <p className="text-xs text-zinc-100 font-black italic">"{data.pre_match_messaging.motivation}"</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-bold mb-1 uppercase tracking-tight">Focus</p>
              <p className="text-xs text-zinc-100 font-black italic">"{data.pre_match_messaging.focus}"</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-bold mb-1 uppercase tracking-tight">Discipline</p>
              <p className="text-xs text-zinc-100 font-black italic">"{data.pre_match_messaging.discipline}"</p>
            </div>
          </div>
        </div>

        {/* Tactical Emphasis Points */}
        <div className="bg-[#121214] rounded-2xl border border-white/5 p-6 flex flex-col">
          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-6">
            Tactical Emphasis Points
          </p>
          <div className="space-y-2 flex-1">
            {data.tactical_emphasis_points.map((item, i) => (
              <div 
                key={i} 
                className="bg-[#1E1E21] rounded-xl px-5 py-3.5 border border-white/2 text-[11px] font-medium text-zinc-400"
              >
                {item.order}. {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPreparationTalkingPoints;
