import { Card } from "@/components/ui/card";
import { Sliders, Info, ChevronDown, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

const TechnicalSkillsEngine = () => {
  const navigate = useNavigate();

  const skillRatings = [
    {
      name: "Passing Accuracy",
      current: 8.5,
      target: 9,
      priority: "High",
      priorityColor: "text-red-500",
    },
    {
      name: "First Touch",
      current: 9,
      target: 9.5,
      priority: "Medium",
      priorityColor: "text-yellow-500",
    },
    {
      name: "Dribbling",
      current: 9.5,
      target: 9.8,
      priority: "Low",
      priorityColor: "text-green-500",
    },
    {
      name: "Shooting",
      current: 8,
      target: 8.7,
      priority: "High",
      priorityColor: "text-red-500",
    },
    {
      name: "Weak Foot",
      current: 6,
      target: 7.5,
      priority: "High",
      priorityColor: "text-red-500",
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

        <div className="flex items-center justify-between gap-4 flex-1 bg-[#111111] border border-gray-800 p-4 rounded-xl col-span-8">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#001D21] rounded-lg border border-[#00BFAE]/20 hidden md:block">
              <Sliders className="text-[#00BFAE]" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                Technical Skills Engine
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                Skills assessment and development plan
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-600" size={20} />
        </div>
      </div>

      {/* Technical Assessment Header */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-1">
          Technical Assessment
        </h3>
        <p className="text-[11px] text-gray-400">
          <span className="font-bold text-gray-300">
            Position Requirements:{" "}
          </span>
          Creative playmaker, final pass specialist, dribbling in tight spaces
        </p>
      </Card>

      {/* Skill Ratings Section */}
      <div className="pt-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-widest pl-1">
          Skill Ratings (1-10 scale)
        </h3>
        <Card className="bg-[#0B0E14] border-0">
          {skillRatings.map((skill, idx) => (
            <div key={idx} className=" relative bg-[#0D161E] border border-gray-800 p-6 rounded-xl space-y-8">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-gray-200">
                  {skill.name}
                </h4>
                <div
                  className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-black/40 border border-gray-800/50 ${skill.priorityColor}`}
                >
                  {skill.priority}
                </div>
              </div>

              <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
                {/* Current Bar */}
                <div className="space-y-1.5">
                  <div className="flex flex-col items-baseline gap-1">
                    <span className="text-gray-500 text-[16px] font-medium">
                      Current
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-white text-md font-bold leading-none">
                        {skill.current}
                      </span>
                      <span className="text-gray-600 text-[10px] font-bold">
                        /10
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-600"
                      style={{ width: `${skill.current * 10}%` }}
                    ></div>
                  </div>
                </div>

                {/* Target Bar */}
                <div className="space-y-1.5">
                  <div className="flex flex-col items-baseline gap-1">
                    <span className="text-gray-500 text-[16px] font-medium">
                      Target
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[#00BFAE] text-md font-bold leading-none">
                        {skill.target}
                      </span>
                      <span className="text-gray-600 text-[10px] font-bold">
                        /10
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00BFAE]"
                      style={{ width: `${skill.target * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              {idx !== skillRatings.length - 1 && (
                <div className="absolute -bottom-4 left-0 right-0 h-px bg-gray-800/30" />
              )}
            </div>
          ))}
        </Card>
      </div>

      {/* Development Plan */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">
          Development Plan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl space-y-4">
            <h4 className="text-sm font-bold text-gray-200">
              Passing Mechanics
            </h4>
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-white block uppercase opacity-70">
                  Drills:
                </span>
                <p className="text-[11px] text-gray-400">
                  Wall passing, long-range passing, weighted passes
                </p>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400">Frequency:</span>
                <span className="font-bold text-[#00BFAE]">4x/week</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400">Duration:</span>
                <span className="font-bold text-[#00BFAE]">30 min/session</span>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl space-y-4">
            <h4 className="text-sm font-bold text-gray-200">
              Weak Foot Training
            </h4>
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-white block uppercase opacity-70">
                  Drills:
                </span>
                <p className="text-[11px] text-gray-400">
                  Weak foot passing, shooting, dribbling
                </p>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400">Frequency:</span>
                <span className="font-bold text-[#00BFAE]">Daily</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400">Duration:</span>
                <span className="font-bold text-[#00BFAE]">15 min/day</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Daily Routine */}
      <Card className="bg-[#0D161E]/40 border border-[#00BFAE]/10 p-5 rounded-xl space-y-4 relative overflow-hidden">
        <div className="flex justify-between items-center relative z-10">
          <h3 className="text-xs font-bold uppercase tracking-widest pl-1">
            Daily Routine
          </h3>
          <div className="text-[11px] font-bold">
            Total Duration:{" "}
            <span className="text-white">
              60 minutes
            </span>
          </div>
        </div>
        <div className="space-y-2 relative z-10">
          <p className="text-[11px] text-gray-400">
            <span className="text-[#00BFAE] font-bold mr-1">• Warmup:</span> 10m
            (juggling, light passing)
          </p>
          <p className="text-[11px] text-gray-400">
            <span className="text-[#00BFAE] font-bold mr-1">
              • Main session:
            </span>{" "}
            40m (skill focus of the day)
          </p>
          <p className="text-[11px] text-gray-400">
            <span className="text-[#00BFAE] font-bold mr-1">• Cooldown:</span>{" "}
            10m (static stretching)
          </p>
        </div>
      </Card>

      {/* Progress Tracking */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest pl-1">
          Progress Tracking
        </h3>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-white block uppercase opacity-70">
              Weekly targets:
            </span>
            <p className="text-[11px] text-gray-400">
              Improve weak foot accuracy by 5%
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-white block uppercase opacity-70">
              Key metrics:
            </span>
            <p className="text-[11px] text-gray-400">
              Pass completion %, shot accuracy %
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-white block uppercase opacity-70">
              Success indicators:
            </span>
            <p className="text-[11px] text-gray-400">
              Consistent weak foot usage in matches
            </p>
          </div>
        </div>
      </Card>

      {/* Footer Info */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex items-center gap-3">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Technical development guidance. Work with qualified coaches for proper
          technique and progression.
        </p>
      </div>
    </div>
  );
};

export default TechnicalSkillsEngine;
