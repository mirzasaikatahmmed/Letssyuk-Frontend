import { useNavigate } from "react-router";
import { ChevronLeft, Target, Info } from "lucide-react";
import { Card } from "@/components/ui/card";

const PriorityFocusAreas = () => {
  const navigate = useNavigate();
  const priorities = [
    {
      title: "Match Exposure",
      stats: "8 matches this season → Target: 12-15 matches",
      action:
        "Seek additional friendly fixtures or cup competitions to increase match minutes",
      status: "Critical",
      statusColor: "#ef4444", // Red for critical
    },
    {
      title: "Training Balance",
      stats: "Current: 4h technical, 3h physical/week",
      action:
        "Add 2x 30-min technical sessions focused on passing accuracy and first touch",
      status: "Medium",
      statusColor: "#facc15", // Yellow for medium
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
            <div className="p-2 bg-[#1A1A1A] rounded-lg border border-[#FE9A00]/20 hidden md:block">
              <Target className="text-[#FE9A00]" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                Priority Focus Areas
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                Key areas needing immediate attention
              </p>
            </div>
          </div>
          <Target className="text-gray-600" size={20} />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
          Identified Priorities
        </h3>
        <Card className="bg-[#0B1219] border-gray-800 p-6 rounded-2xl shadow-xl">
          <div className="space-y-4">
            {priorities.map((item, index) => (
              <div
                key={index}
                className="bg-[#235D67]/10 border border-gray-800 rounded-xl p-6 relative overflow-hidden group hover:border-[#0DA9A2]/30 transition-all shadow-sm"
              >
                {/* Status Badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-md text-[10px] font-bold border"
                  style={{
                    color: item.statusColor,
                    borderColor: `${item.statusColor}44`,
                    backgroundColor: `${item.statusColor}11`,
                  }}
                >
                  {item.status}
                </div>

                <h4 className="text-white font-bold text-base mb-1 group-hover:text-[#0DA9A2] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs mb-4">{item.stats}</p>
                <div className="flex items-start gap-2 bg-black/20 p-3 rounded-lg border border-gray-800/50">
                  <Info size={14} className="text-[#0DA9A2] mt-0.5 shrink-0" />
                  <p className="text-[#0DA9A2] text-xs font-medium leading-relaxed">
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Footer Info */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex items-center gap-3">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Focus areas are determined by OnyxSport AI based on current metrics
          and seasonal targets. Consult with your coach to align these
          priorities with team objectives.
        </p>
      </div>
    </div>
  );
};

export default PriorityFocusAreas;
