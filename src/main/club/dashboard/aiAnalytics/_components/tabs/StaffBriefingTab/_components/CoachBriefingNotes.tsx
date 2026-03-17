interface CoachBriefingNotesProps {
  data: {
    technical_briefing_structure: {
      total_minutes: number;
      agenda: Array<{
        order: string;
        topic: string;
        minutes: string;
      }>;
    };
    tactical_instructions: {
      defensive_shape: string;
      pressing_triggers: string;
      attacking: string;
      formation_in_possession: string;
    };
    key_data_points: {
      possession_percent: number;
      pass_accuracy_percent: number;
      shots_on_target: string;
      expected_goals: string;
    };
  };
}

const CoachBriefingNotes = ({ data }: CoachBriefingNotesProps) => {
  return (
    <div className="bg-[#121214] rounded-2xl border border-white/5 p-6 space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-white px-1">
          Technical Briefing Structure ({data.technical_briefing_structure.total_minutes} minutes)
        </h3>
        <div className="space-y-2">
          {data.technical_briefing_structure.agenda.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#1E1E21] rounded-xl px-5 py-3.5 border border-white/2"
            >
              <span className="text-xs font-medium text-zinc-400">
                {item.order}. {item.topic}
              </span>
              <span className="text-xs font-bold text-cyan-500">{item.minutes}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1A1A1D] rounded-2xl border border-white/5 p-6">
          <h4 className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-4">
            Tactical Instructions
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-[11px]">
              <span className="text-zinc-600 mt-1">•</span>
              <span className="text-zinc-500 font-medium whitespace-nowrap">Defensive Shape:</span>
              <span className="text-zinc-200 font-bold">{data.tactical_instructions.defensive_shape}</span>
            </li>
            <li className="flex items-start gap-2 text-[11px]">
              <span className="text-zinc-600 mt-1">•</span>
              <span className="text-zinc-500 font-medium whitespace-nowrap">Pressing Triggers:</span>
              <span className="text-zinc-200 font-bold">{data.tactical_instructions.pressing_triggers}</span>
            </li>
            <li className="flex items-start gap-2 text-[11px]">
              <span className="text-zinc-600 mt-1">•</span>
              <span className="text-zinc-500 font-medium whitespace-nowrap">Attacking:</span>
              <span className="text-zinc-200 font-bold">{data.tactical_instructions.attacking}</span>
            </li>
            <li className="flex items-start gap-2 text-[11px]">
              <span className="text-zinc-600 mt-1">•</span>
              <span className="text-zinc-500 font-medium whitespace-nowrap">Formation:</span>
              <span className="text-zinc-200 font-bold">{data.tactical_instructions.formation_in_possession}</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#1A1A1D] rounded-2xl border border-white/5 p-6">
          <h4 className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-4">
            Key Data Points
          </h4>
          <div className="space-y-3.5 mt-1">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-medium text-zinc-500">Possession:</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[11px] font-black text-white">{data.key_data_points.possession_percent}%</span>
                <span className="text-[10px] text-zinc-600 font-bold">(target 60%)</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-medium text-zinc-500">Pass Accuracy:</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[11px] font-black text-white">{data.key_data_points.pass_accuracy_percent}%</span>
                <span className="text-[10px] text-zinc-600 font-bold">(target 87%)</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-medium text-zinc-500">Shots on Target:</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[11px] font-black text-white">{data.key_data_points.shots_on_target}</span>
                <span className="text-[10px] text-zinc-600 font-bold">(target 7)</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-medium text-zinc-500">Expected Goals:</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[11px] font-black text-white">{data.key_data_points.expected_goals}</span>
                <span className="text-[10px] text-zinc-600 font-bold">(target 2.0)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachBriefingNotes;
