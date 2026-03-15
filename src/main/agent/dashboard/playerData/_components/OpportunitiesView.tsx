import React from "react";
import { Layout, TrendingUp, DollarSign, Calendar, Info } from "lucide-react";
import type { Player } from "../_data/data";

interface OpportunitiesViewProps {
  player: Player;
}

const OpportunitiesView: React.FC<OpportunitiesViewProps> = ({ player }) => {
  const { opportunities } = player.contractDetails;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Top Club Matches Section */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20">
            <Layout size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Top Club Matches
            </h2>
            <p className="text-[11px] text-gray-500 font-medium">
              AI-powered player-club compatibility analysis
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {opportunities.topClubMatches.map((club) => (
            <div
              key={club.id}
              className="bg-[#0B0E14] border border-gray-800/80 rounded-[28px] overflow-hidden"
            >
              <div className="p-7">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 ${club.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg uppercase`}
                    >
                      {club.logo}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-white mb-0.5">
                        {club.name}
                      </h3>
                      <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                        {club.league}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-1 justify-end">
                      <span className="text-3xl font-black text-cyan-400">
                        {club.score}
                      </span>
                      <span className="text-xs font-bold text-gray-600">
                        /100
                      </span>
                    </div>
                    <span className="text-[10px] text-cyan-500/80 font-bold uppercase tracking-widest bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">
                      {club.matchLabel}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#11161D]/60 p-5 rounded-2xl border border-gray-800/40">
                    <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.15em] mb-2">
                      Position Need
                    </p>
                    <p className="text-[13px] font-bold text-white">
                      {club.positionNeed}
                    </p>
                  </div>
                  <div className="bg-[#11161D]/60 p-5 rounded-2xl border border-gray-800/40">
                    <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.15em] mb-2">
                      Tactical System
                    </p>
                    <p className="text-[13px] font-bold text-white">
                      {club.tacticalSystem}
                    </p>
                  </div>
                  <div className="bg-[#11161D]/60 p-5 rounded-2xl border border-gray-800/40">
                    <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.15em] mb-2">
                      Development Path
                    </p>
                    <p className="text-[13px] font-bold text-cyan-400">
                      {club.developmentPath}
                    </p>
                  </div>
                  <div className="bg-[#11161D]/60 p-5 rounded-2xl border border-gray-800/40">
                    <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.15em] mb-2">
                      Contact Status
                    </p>
                    <p className="text-[13px] font-bold text-orange-400">
                      {club.contactStatus}
                    </p>
                  </div>
                </div>

                <div className="bg-orange-500/5 border border-orange-500/10 p-5 rounded-2xl">
                  <p className="text-[10px] text-orange-400 font-black uppercase tracking-[0.2em] mb-2">
                    Why This Match?
                  </p>
                  <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
                    {club.whyThisMatch}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Opportunities Section */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-400 border border-orange-500/20">
            <TrendingUp size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Market Opportunities
            </h2>
            <p className="text-[11px] text-gray-500 font-medium">
              Current and upcoming transfer windows
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
            Immediate Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
              <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                Winter Transfer Window
              </p>
              <p className="text-[14px] font-bold text-white">
                {opportunities.immediateOpportunities.winterWindow}
              </p>
            </div>
            <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
              <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                Summer 2026
              </p>
              <p className="text-[14px] font-bold text-cyan-400">
                {opportunities.immediateOpportunities.summerWindow}
              </p>
            </div>
            <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
              <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                Loan Option
              </p>
              <p className="text-[14px] font-bold text-white">
                {opportunities.immediateOpportunities.loanOption}
              </p>
            </div>
            <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
              <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                Permanent Move
              </p>
              <p className="text-[14px] font-bold text-white">
                {opportunities.immediateOpportunities.permanentMove}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Negotiation Positioning Section */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 border border-purple-500/20">
            <DollarSign size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Negotiation Positioning
            </h2>
            <p className="text-[11px] text-gray-500 font-medium">
              Market value and leverage assessment
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#0B0E14] border border-gray-800/80 p-7 rounded-2xl">
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-tighter mb-2">
              Current Market Value
            </p>
            <p className="text-2xl font-black text-cyan-400 mb-1.5">
              {opportunities.negotiationPositioning.currentMarketValue}
            </p>
            <p className="text-[10px] text-gray-700 font-medium">
              Based on recent performance
            </p>
          </div>
          <div className="bg-[#0B0E14] border border-gray-800/80 p-7 rounded-2xl">
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-tighter mb-2">
              Asking Price
            </p>
            <p className="text-2xl font-black text-white mb-1.5">
              {opportunities.negotiationPositioning.askingPrice}
            </p>
            <p className="text-[10px] text-gray-700 font-medium">
              Negotiating position
            </p>
          </div>
          <div className="bg-[#0B0E14] border border-gray-800/80 p-7 rounded-2xl">
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-tighter mb-2">
              Realistic Price
            </p>
            <p className="text-2xl font-black text-orange-400 mb-1.5">
              {opportunities.negotiationPositioning.realisticPrice}
            </p>
            <p className="text-[10px] text-gray-700 font-medium">
              Expected final fee
            </p>
          </div>
          <div className="bg-[#0B0E14] border border-gray-800/80 p-7 rounded-2xl">
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-tighter mb-2">
              Leverage
            </p>
            <p className="text-2xl font-black text-cyan-400 mb-1.5">
              {opportunities.negotiationPositioning.leverage}
            </p>
            <p className="text-[10px] text-gray-700 font-medium">
              Assessment of market interest
            </p>
          </div>
        </div>

        <div className="bg-cyan-500/5 border border-cyan-500/10 p-5 rounded-2xl flex gap-4">
          <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400 h-fit border border-cyan-500/20">
            <Info size={20} />
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-cyan-400 mb-1">
              Strong Negotiation Position
            </h4>
            <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
              {opportunities.negotiationPositioning.assessment}
            </p>
          </div>
        </div>
      </div>

      {/* Career Pathway Optimization Section */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20">
            <Calendar size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Career Pathway Optimization
            </h2>
            <p className="text-[11px] text-gray-500 font-medium">
              Recommended progression timeline
            </p>
          </div>
        </div>

        <div className="relative ml-4 pl-10 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-linear-to-b before:from-cyan-500/40 before:via-purple-500/40 before:to-gray-800/40">
          {opportunities.careerPathway.map((step) => (
            <div key={step.number} className="relative">
              <div
                className={`absolute -left-[54px] top-1 w-7 h-7 rounded-full border-2 border-[#0B0E14] flex items-center justify-center text-[12px] font-black z-10 ${
                  step.number === 1
                    ? "bg-cyan-500 text-white"
                    : step.number === 2
                      ? "bg-orange-400 text-white"
                      : step.number === 3
                        ? "bg-blue-600 text-white"
                        : "bg-purple-500 text-white"
                }`}
              >
                {step.number}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h4 className="text-[15px] font-bold text-white">
                    {step.title}
                  </h4>
                  <span
                    className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                      step.number === 1
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold"
                        : "bg-gray-800 text-gray-500 font-bold"
                    }`}
                  >
                    {step.timeframe}
                  </span>
                </div>
                <p className="text-[12px] text-gray-500 font-medium whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-500/5 border border-blue-500/10 p-5 rounded-2xl flex gap-4">
          <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 h-fit border border-blue-500/20">
            <Info size={20} />
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-blue-400 mb-1">
              Optimal Pathway
            </h4>
            <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
              Based on current trajectory, age profile, and market
              opportunities, the AC Milan move represents the ideal next step
              for career progression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesView;
