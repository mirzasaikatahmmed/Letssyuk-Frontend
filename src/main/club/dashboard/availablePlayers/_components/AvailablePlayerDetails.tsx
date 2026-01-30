// import React from 'react';
import { ArrowLeft, Mail, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';

export const AvailablePlayerDetails = () => {
  const statBox = "bg-[#11161D] border border-gray-800 p-4 rounded-xl";
  const statLabel = "text-[11px] font-black text-gray-500 uppercase tracking-widest mb-1";
  const statVal = "text-2xl font-black text-white";

  return (
    <div className=" bg-[#0B0E14] min-h-screen space-y-6  mx-auto">
      <button className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm">
        <ArrowLeft size={16} /> Back to Players
      </button>

      {/* Profile Header */}
      <div className="bg-[#11161D] border border-[#53DDF5]/40 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <img src="https://github.com/shadcn.png" className="h-32 w-32 rounded-full border-4 border-gray-800 object-cover" alt="" />
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl font-black text-white">Lucas Martinez</h1>
            <p className="text-gray-500 text-sm font-bold flex items-center gap-2">
              📍 Spain • 23 years old • Forward
            </p>
          </div>
          <div className="flex gap-2">
            <span className="bg-gray-800 text-gray-300 text-[10px] font-black px-3 py-1.5 rounded uppercase">Semi-Pro</span>
            <span className="bg-[#05DF72]/10 text-[#05DF72] text-[10px] font-black px-3 py-1.5 rounded uppercase flex items-center gap-1">
              <TrendingUp size={12}/> Improving
            </span>
            <span className="bg-[#53DDF5]/10 text-[#53DDF5] text-[10px] font-black px-3 py-1.5 rounded uppercase">Open to trials</span>
          </div>
          <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
            Dynamic forward with excellent pace and finishing ability. Strong work ethic and team player mentality.
          </p>
          <div className="flex gap-4 pt-2">
            <button className="bg-[#53DDF5] text-[#0B0E14] px-6 py-2.5 rounded-lg font-black text-sm flex items-center gap-2 hover:shadow-[0_0_15px_#53DDF540]">
              <Mail size={18} /> Express Interest
            </button>
            <button className="bg-gray-800 text-white px-6 py-2.5 rounded-lg font-black text-sm border border-gray-700 hover:bg-gray-700">
              Request Trial
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Stats & Strengths */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-[#235D6710] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <TrendingUp size={16} className="text-[#53DDF5]"/> Performance Summary (Last 20 Match)
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className={statBox}><p className={statLabel}>Appearances</p><p className={statVal}>28</p></div>
              <div className={statBox}><p className={statLabel}>Goals</p><p className={statVal} style={{color: '#05DF72'}}>15</p></div>
              <div className={statBox}><p className={statLabel}>Assists</p><p className={statVal} style={{color: '#53DDF5'}}>8</p></div>
              <div className={statBox}><p className={statLabel}>Minutes Played</p><p className={statVal}>2,340</p></div>
              <div className={statBox}><p className={statLabel}>Shots on Target</p><p className={statVal}>42</p></div>
              <div className={statBox}><p className={statLabel}>Pass Accuracy</p><p className={statVal}>78%</p></div>
            </div>
          </section>

          {/* Strengths / Improvements */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#235D6710] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-sm font-black text-white uppercase mb-4 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#05DF72]"/> Strengths
              </h3>
              <div className="space-y-3">
                {["Excellent positioning", "Strong finishing with both feet", "High work rate"].map((s, i) => (
                  <div key={i} className="bg-gray-900/50 p-3 rounded-lg text-xs text-gray-300 border border-gray-800 flex  items-center  gap-2"><p className='h-2 w-2 bg-[#05DF72] rounded-full '></p> {s}</div>
                ))}
              </div>
            </div>
            <div className="bg-[#235D6710] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-sm font-black text-white uppercase mb-4 flex items-center gap-2">
                <AlertCircle size={16} className="text-yellow-500"/> Areas to Improve
              </h3>
              <div className="space-y-3">
                {["Link-up play with midfielders", "Decision making", "Consistency"].map((s, i) => (
                  <div key={i} className="bg-gray-900/50 p-3 rounded-lg text-xs text-gray-300 border border-gray-800 flex  items-center  gap-2"><p className='h-2 w-2 bg-yellow-500 rounded-full '></p>{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Availability & Notice */}
        <div className="space-y-6">
          <div className="bg-[#11161D]/50 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-sm font-black text-white uppercase mb-6 flex items-center gap-2">
              📅 Availability
            </h3>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] text-gray-500 font-bold uppercase mb-1">Contract Status</p>
                <p className="text-sm font-black text-[#05DF72]">Free Agent - Available Immediately</p>
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-bold uppercase mb-2">Relocation</p>
                <span className="bg-gray-800 text-gray-300 text-[10px] font-black px-3 py-1.5 rounded-lg">Willing to relocate</span>
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-bold uppercase mb-2">Preferred Leagues</p>
                <div className="flex gap-2">
                  <span className="bg-gray-800 text-gray-300 text-[10px] font-black px-3 py-1.5 rounded-lg">Championship</span>
                  <span className="bg-gray-800 text-gray-300 text-[10px] font-black px-3 py-1.5 rounded-lg">League One</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6">
            <h3 className="text-[11px] font-black text-yellow-500 uppercase tracking-widest mb-3">Important Notice</h3>
            <p className="text-[11px] text-yellow-500/80 leading-relaxed font-medium">
              OnyxSport AI does not act as an intermediary or agent. Contact is limited to expressing interest. All negotiations should be conducted directly between clubs and players.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


