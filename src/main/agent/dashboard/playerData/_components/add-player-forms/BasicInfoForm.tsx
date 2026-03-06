import { useState } from "react";
import {
  User,
  Upload,
  Save,
  Instagram,
  Twitter,
  Layout,
  ChevronDown,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const BasicInfoForm = () => {
  const [selectedPosition, setSelectedPosition] = useState("Select Position");
  const [isPositionOpen, setIsPositionOpen] = useState(false);
  const [selectedFoot, setSelectedFoot] = useState("Right");
  const [isFootOpen, setIsFootOpen] = useState(false);

  const positions = [
    "Goalkeeper",
    "Centre Back",
    "Left Back",
    "Right Back",
    "Defensive Midfielder",
    "Centre Midfielder",
    "Attacking Midfielder",
    "Left Winger",
    "Right Winger",
    "Striker",
  ];

  const feet = ["Right", "Left", "Both"];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Section: Player Photo */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-6">
          Player Photo
        </h3>
        <div className="flex items-center gap-8">
          <div className="h-32 w-32 bg-[#0B0E14] rounded-[24px] border border-gray-800/60 flex items-center justify-center text-gray-700">
            <User size={48} className="opacity-20" />
          </div>
          <div className="space-y-3">
            <button className="bg-[#11161D] border border-gray-800 hover:bg-gray-800 px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm">
              <Upload size={14} className="text-cyan-400" />
              Upload Photo
            </button>
            <p className="text-[10px] text-gray-600 font-medium leading-relaxed max-w-[320px]">
              Recommended: Square image, at least 400×400px. JPG, PNG or WebP
              format. This photo will be used across the player's profile and
              dashboard cards.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Basic Information */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-8">
          Basic Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Enter player name"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Age *
            </label>
            <input
              type="text"
              placeholder="Age"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Height
            </label>
            <input
              type="text"
              placeholder="e.g., 185 cm"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Nationality *
            </label>
            <input
              type="text"
              placeholder="e.g., England"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          {/* Position Dropdown */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Position *
            </label>
            <div
              onClick={() => setIsPositionOpen(!isPositionOpen)}
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white flex items-center justify-between cursor-pointer hover:border-gray-700 transition-all focus-within:border-cyan-500/50"
            >
              <span
                className={
                  selectedPosition === "Select Position"
                    ? "text-gray-700"
                    : "text-white"
                }
              >
                {selectedPosition}
              </span>
              <ChevronDown
                size={16}
                className={`text-gray-600 transition-transform duration-300 ${isPositionOpen ? "rotate-180" : ""}`}
              />
            </div>

            {isPositionOpen && (
              <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#0B0E14] border border-gray-800/60 rounded-2xl py-2 z-50 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div
                  onClick={() => {
                    setSelectedPosition("Select Position");
                    setIsPositionOpen(false);
                  }}
                  className={`px-5 py-2.5 text-sm cursor-pointer transition-all ${
                    selectedPosition === "Select Position"
                      ? "bg-cyan-500 text-[#0B0E14] font-bold rounded-lg mx-2"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Select Position
                </div>
                {positions.map((pos) => (
                  <div
                    key={pos}
                    onClick={() => {
                      setSelectedPosition(pos);
                      setIsPositionOpen(false);
                    }}
                    className={`px-5 py-2.5 text-sm cursor-pointer transition-all ${
                      selectedPosition === pos
                        ? "bg-cyan-400 text-[#0B0E14] font-bold rounded-lg mx-2"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {pos}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dominant Foot Dropdown */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Dominant foot *
            </label>
            <div
              onClick={() => setIsFootOpen(!isFootOpen)}
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white flex items-center justify-between cursor-pointer hover:border-gray-700 transition-all focus-within:border-cyan-500/50"
            >
              <span className="text-white">{selectedFoot}</span>
              <ChevronDown
                size={16}
                className={`text-gray-600 transition-transform duration-300 ${isFootOpen ? "rotate-180" : ""}`}
              />
            </div>

            {isFootOpen && (
              <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#0B0E14] border border-gray-800/60 rounded-2xl py-2 z-50 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {feet.map((foot) => (
                  <div
                    key={foot}
                    onClick={() => {
                      setSelectedFoot(foot);
                      setIsFootOpen(false);
                    }}
                    className={`px-5 py-2.5 text-sm cursor-pointer transition-all ${
                      selectedFoot === foot
                        ? "bg-cyan-400 text-[#0B0E14] font-bold rounded-lg mx-2"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {foot}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Current Club *
            </label>
            <input
              type="text"
              placeholder="Enter current club"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Section: Last Match Performance */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">
          Last Match Performance
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Goals
            </label>
            <input
              type="number"
              placeholder="0"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Assists
            </label>
            <input
              type="number"
              placeholder="0"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Matches
            </label>
            <input
              type="number"
              placeholder="0"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Minutes
            </label>
            <input
              type="number"
              placeholder="0"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all"
            />
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <button className="bg-cyan-400 text-[#0B0E14] px-8 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wide flex items-center gap-2 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            Save <Save size={14} />
          </button>
        </div>
      </div>

      {/* Section: Contract Details */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-8">
          Contract Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Contract Start Date
            </label>
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Contract End Date *
            </label>
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
              Market Value Estimate
            </label>
            <input
              type="text"
              placeholder="e.g., €22M"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">
            Contract Clauses (Optional)
          </label>
          <textarea
            placeholder="Release clause, performance bonuses, etc."
            className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
          ></textarea>
        </div>
      </div>

      {/* Section: Injury History */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-6">
          Injury History (Optional)
        </h3>
        <textarea
          placeholder="List any significant injuries and recovery details..."
          className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[120px] resize-none placeholder:text-gray-700 w-full"
        ></textarea>
      </div>

      {/* Section: Social Media Links */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8 font-primary">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
            <Layout size={18} />
          </div>
          <h3 className="text-[14px] font-bold text-white tracking-tight">
            Social Media Links
          </h3>
        </div>
        <p className="text-[11px] text-gray-500 font-medium mb-8">
          AI will analyze social media engagement to estimate market value and
          fan base metrics
        </p>

        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1 flex items-center gap-2">
              <Instagram size={12} /> Instagram Profile URL
            </label>
            <input
              type="text"
              placeholder="https://instagram.com/playername"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1 flex items-center gap-2">
              <Twitter size={12} /> Twitter/X Profile URL
            </label>
            <input
              type="text"
              placeholder="https://twitter.com/playername"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1 flex items-center gap-2">
              <FaTiktok size={11} /> TikTok Profile URL
            </label>
            <input
              type="text"
              placeholder="https://tiktok.com/@playername"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;
