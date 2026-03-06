import { Card } from "@/components/ui/card";
import { Brain, Info, ChevronDown, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

const TacticalAwarenessAssistant = () => {
  const navigate = useNavigate();

  const decisionMakingCues = [
    {
      label: "Pass vs Dribble:",
      text: "Pass if teammate in space, dribble if 1v1 advantage",
    },
    {
      label: "Press vs Drop:",
      text: "Press if support nearby, drop if isolated",
    },
    {
      label: "Overlap Timing:",
      text: "Overlap when winger cuts inside",
    },
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-6 min-h-screen font-sans">
      {/* Top Header with Back Button */}
      <div className="grid grid-cols-12 items-center gap-4 mb-2">
        <div className="col-span-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-900/50 text-gray-300 hover:border-cyan-500/50 transition-all text-sm font-medium bg-[#0B0E14] group shrink-0 cursor-pointer"
          >
            <ChevronLeft
              size={18}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 flex-1 bg-[#111111] border border-gray-800 p-4 rounded-xl col-span-8 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#0F1424] rounded-lg border border-[#4F72FC]/20 hidden md:block">
              <Brain className="text-[#4F72FC]" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                Tactical Awareness Assistant
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                Position-specific tactical education
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-600" size={20} />
        </div>
      </div>

      {/* Section 1: Position Tactics */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-6 rounded-xl text-white">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">
          POSITION TACTICS (Attacking Midfielder)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-gray-500 text-[11px] font-bold block uppercase">
              Responsibilities:
            </span>
            <p className="text-[12px] text-gray-300">
              Create chances, link midfield/attack, press high
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-gray-500 text-[11px] font-bold block uppercase">
              Key Actions:
            </span>
            <p className="text-[12px] text-gray-300">
              Through balls, late runs, defensive transition
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-gray-500 text-[11px] font-bold block uppercase">
              Success Indicators:
            </span>
            <p className="text-[12px] text-gray-300">
              Key passes, chances created, assists
            </p>
          </div>
        </div>
      </Card>

      {/* Section 2: Movement Patterns */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-widest pl-1">
          MOVEMENT PATTERNS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-2">Off-ball</h4>
            <p className="text-[12px] text-gray-400">
              Check to receive, create passing lanes
            </p>
          </Card>
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-2">Defensive</h4>
            <p className="text-[12px] text-gray-400">
              Press opposition deep midfielder
            </p>
          </Card>
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-2">Transition</h4>
            <p className="text-[12px] text-gray-400">
              Immediate support to forward
            </p>
          </Card>
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-2">Support</h4>
            <p className="text-[12px] text-gray-400">
              Provide outlet for fullbacks
            </p>
          </Card>
        </div>
      </div>

      {/* Section 3: Decision-Making Cues */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-widest pl-1">
          DECISION-MAKING CUES
        </h3>
        <div className="space-y-3">
          {decisionMakingCues.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0D161E]/40 border border-gray-800 p-4 rounded-xl flex items-center gap-4 text-[12px]"
            >
              <span className="text-cyan-400 font-bold whitespace-nowrap">
                {item.label}
              </span>
              <p className="text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Opponent Reading */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-6 rounded-xl text-white">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">
          OPPONENT READING
        </h3>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block">
              Pattern Recognition:
            </span>
            <p className="text-[12px] text-gray-400">
              Watch for defensive line height
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block">
              Anticipation:
            </span>
            <p className="text-[12px] text-gray-400">
              Predict pass to opposition striker
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block">
              Weakness Exploitation:
            </span>
            <p className="text-[12px] text-gray-400">Target slow center-back</p>
          </div>
        </div>
      </Card>

      {/* Section 5: System Adaptation */}
      <Card className="bg-[#001D21]/30 border border-[#00BFAE]/20 p-6 rounded-xl text-white shadow-[0_0_20px_rgba(0,191,174,0.05)]">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">
          SYSTEM ADAPTATION
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-white text-xs font-bold">
              Formation Adjustments:
            </h4>
            <p className="text-[12px] text-gray-400">
              Wider in 4-3-3, more central in 4-2-3-1
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white text-xs font-bold">Game Plan:</h4>
            <p className="text-[12px] text-gray-400">
              High press vs weak defenders, counter vs strong teams
            </p>
          </div>
        </div>
      </Card>

      {/* Footer Info */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex items-center gap-3">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Tactical guidance only. Always follow your coach's instructions and
          team strategy.
        </p>
      </div>
    </div>
  );
};

export default TacticalAwarenessAssistant;
