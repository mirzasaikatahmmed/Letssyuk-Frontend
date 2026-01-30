import { useState } from "react";
import { useNavigate } from "react-router";
import {
  X,
  Upload,
  Save,
  Instagram,
  Twitter,
  Sparkles,
  ArrowLeft,
  Calendar,
  ShieldAlert,
} from "lucide-react";
import { LiveAIInsights } from "./LiveAIInsights";
import { FaTiktok } from "react-icons/fa";

const AddNewPlayer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    goals: 0,
    assists: 0,
    matches: 0,
    minutes: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className=" bg-[#0B0E14] min-h-screen text-white font-sans selection:bg-[#53DDF5]/30">
      {/* Top Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <div
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#53DDF5] text-[10px] font-black uppercase tracking-widest cursor-pointer mb-2 hover:opacity-80 transition-all"
          >
            <ArrowLeft size={12} /> Back to Dashboard
          </div>
          <h1 className="text-3xl font-black tracking-tight uppercase">
            Add New Player
          </h1>
          <p className="text-gray-500 text-sm mt-1 font-medium italic">
            Enter player data and contract details for AI market analysis
          </p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="p-2.5 bg-[#11161D] hover:bg-[#1c232d] rounded-xl border border-gray-800 transition-all group"
        >
          <X size={20} className="text-gray-400 group-hover:text-white" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Side: Form Fields */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section: Player Photo */}
          <div className="bg-[#235D6733] border border-gray-800 rounded-2xl p-8">
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">
              Player Photo
            </h3>
            <div className="flex items-center gap-8">
              <div className="h-32 w-32 bg-[#0B0E14] rounded-2xl border-2 border-dashed border-gray-800 flex items-center justify-center group hover:border-[#53DDF5]/50 transition-colors cursor-pointer">
                <Upload
                  className="text-gray-700 group-hover:text-[#53DDF5]"
                  size={32}
                />
              </div>
              <div className="space-y-3">
                <button className="bg-[#162129] border border-gray-700 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:border-[#53DDF5]/40 transition-all">
                  <Upload size={14} className="text-[#53DDF5]" /> Upload Photo
                </button>
                <p className="text-[10px] text-gray-600 leading-relaxed max-w-[240px] font-bold">
                  Recommended: Square image, 400x400px. JPG, PNG or WebP format.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Basic Information */}
          <div className="bg-[#235D6723] border border-gray-800 rounded-2xl p-8 space-y-6">
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Full Name <span className="text-[#53DDF5]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Marcus Reynolds"
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all placeholder:text-gray-700 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Age <span className="text-[#53DDF5]">*</span>
                </label>
                <input
                  type="number"
                  placeholder="24"
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Height (cm)
                </label>
                <input
                  type="text"
                  placeholder="185 cm"
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Nationality <span className="text-[#53DDF5]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="England"
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
                            <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Position <span className="text-[#53DDF5]">*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Dominant Foot <span className="text-[#53DDF5]">*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
               <div className="flex flex-col gap-2 col-span-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Current Club <span className="text-[#53DDF5]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter current club"
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
            </div>
          </div>

          {/* EXTRA COMPONENT 1: Contract Details */}
          <div className="bg-[#235D6713] border border-gray-800 rounded-2xl p-8 space-y-6">
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">
              Contract Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Contract Start
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    size={16}
                  />
                  <input
                    type="date"
                    className="w-full bg-[#0B0E14] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Contract End <span className="text-[#53DDF5]">*</span>
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    size={16}
                  />
                  <input
                    type="date"
                    className="w-full bg-[#0B0E14] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Market Value Estimate (€)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 25,000,000"
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
            </div>
          </div>

          {/* EXTRA COMPONENT 2: Injury History & Bio */}
          <div className="bg-[#11161D] border border-gray-800 rounded-2xl p-8 space-y-6">
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">
              Injury History & Bio
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <ShieldAlert size={12} className="text-yellow-500" /> Medical
                Notes
              </label>
              <textarea
                placeholder="List any recurring injuries or recent surgeries..."
                className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all min-h-[120px] resize-none"
              ></textarea>
            </div>
          </div>

          {/* Section: Match Statistics */}
          <div className="bg-[#11161D] border border-gray-800 rounded-2xl p-8 space-y-6">
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2 text-[#53DDF5]">
              Match Statistics (Live Analysis)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Goals
                </label>
                <input
                  name="goals"
                  type="number"
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Assists
                </label>
                <input
                  name="assists"
                  type="number"
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Matches
                </label>
                <input
                  name="matches"
                  type="number"
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Minutes
                </label>
                <input
                  name="minutes"
                  type="number"
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bg-[#0B0E14] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all w-full"
                />
              </div>
            </div>
          </div>

          {/* Section: Social Media */}
          <div className="bg-[#235D6733] border border-[#53DDF5]/10 rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-2 text-[#53DDF5] mb-2">
              <Sparkles size={16} />
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">
                AI Social Analysis
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Instagram Profile URL
                </label>
                <div className="relative">
                  <Instagram
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="https://instagram.com/player"
                    className="w-full bg-[#0B0E14] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  Twitter/X Profile URL
                </label>
                <div className="relative">
                  <Twitter
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="https://twitter.com/player"
                    className="w-full bg-[#0B0E14] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all"
                  />
                </div>
              </div>

               <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                  TikTok Profile URL
                </label>
                <div className="relative">
                  <FaTiktok
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="https://tiktok.com/@playername"
                    className="w-full bg-[#0B0E14] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white outline-none focus:border-[#53DDF5]/50 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pb-12">
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              Discard
            </button>
            <button className="bg-[#53DDF5] text-[#0B0E14] px-10 py-3 rounded-xl font-black text-xs uppercase tracking-[0.1em] flex items-center gap-2 shadow-lg shadow-[#53DDF5]/20 hover:scale-[1.02] active:scale-95 transition-all">
              Save Player Profile <Save size={16} />
            </button>
          </div>
        </div>

        {/* Right Side: AI Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-10 space-y-6">
            <LiveAIInsights stats={formData} />

            {/* Profile Strength Card */}
            <div className="bg-[#11161D] border border-gray-800 rounded-2xl p-6">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">
                Profile Completeness
              </h4>
              <div className="w-full bg-[#0B0E14] h-2 rounded-full overflow-hidden border border-gray-800">
                <div className="bg-gradient-to-r from-[#53DDF5] to-[#235D67] h-full w-[65%] shadow-[0_0_15px_#53DDF580]"></div>
              </div>
              <p className="text-[10px] text-gray-400 mt-4 font-bold flex justify-between items-center">
                <span>
                  Strength: <span className="text-[#53DDF5]">Strong</span>
                </span>
                <span className="text-white">65%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPlayer;
