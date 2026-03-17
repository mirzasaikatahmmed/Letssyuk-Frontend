import React, { useState } from "react";
import {
  FileText,
  ChevronDown,
  Info,
  AlertTriangle,
  CircleCheckBig,
  TrendingUp,
  Target,
  Calendar,
  DollarSign,
} from "lucide-react";

import type { Player } from "../_data/data";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import {
  useGetContractStructureQuery,
  useGetRiskClauseFlaggingQuery,
  useGetMarketValueBenchmarkingQuery,
  useGetScenarioComparisonQuery,
  useGetNegotiationPreparationQuery,
  useGetCareerContractTimelineQuery,
} from "@/redux/features/agent/agentsApi";
import Loading from "@/components/share/Loading/Loading";

interface ContractViewProps {
  player: Player;
}

const ContractView: React.FC<ContractViewProps> = ({ player }) => {
  const { data: userData } = useGetMeQuery();
  const agentId = userData?.agentOwned?.id;

  const { data: structureRes, isLoading: isStructureLoading } =
    useGetContractStructureQuery(agentId as string, { skip: !agentId });
  const { data: risksRes, isLoading: isRisksLoading } =
    useGetRiskClauseFlaggingQuery(agentId as string, { skip: !agentId });
  const { data: marketRes, isLoading: isMarketLoading } =
    useGetMarketValueBenchmarkingQuery(agentId as string, { skip: !agentId });
  const { data: scenarioRes, isLoading: isScenarioLoading } =
    useGetScenarioComparisonQuery(agentId as string, { skip: !agentId });
  const { data: negotiationRes, isLoading: isNegotiationLoading } =
    useGetNegotiationPreparationQuery(agentId as string, { skip: !agentId });
  const { data: timelineRes, isLoading: isTimelineLoading } =
    useGetCareerContractTimelineQuery(agentId as string, { skip: !agentId });

  const structureData = structureRes?.analysis || player.contractDetails;
  const risksData = risksRes?.analysis || {
    risks: player.contractDetails.risks,
    market_standards_summary:
      "Clauses are generally within market standards. Release clause and loyalty bonuses are competitive and fairly structured.",
  };
  const marketData =
    marketRes?.analysis || player.contractDetails.marketValueComparison;
  const scenarioData =
    scenarioRes?.analysis || player.contractDetails.scenarioComparison;
  const negotiationData = negotiationRes?.analysis || {
    talkingPoints: player.contractDetails.talkingPoints,
    strategicConcessions: player.contractDetails.strategicConcessions,
    walkAwayThreshold: player.contractDetails.walkAwayThreshold,
  };
  const timelineData =
    timelineRes?.analysis || { timeline: player.contractDetails.timeline };

  const [isStructureOpen, setIsStructureOpen] = useState(true);
  const [isRisksOpen, setIsRisksOpen] = useState(true);
  const [isMarketValueOpen, setIsMarketValueOpen] = useState(false);
  const [isScenarioOpen, setIsScenarioOpen] = useState(false);

  if (
    isStructureLoading ||
    isRisksLoading ||
    isMarketLoading ||
    isScenarioLoading ||
    isNegotiationLoading ||
    isTimelineLoading
  ) {
    return <Loading count={3} className="p-8" />;
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Contract Structure Analyzer Header */}
      <div className="bg-[#11161D]/60 border border-gray-800/60 rounded-3xl p-8 overflow-hidden transition-all duration-300">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsStructureOpen(!isStructureOpen)}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Contract Structure Analyzer: {player.name}
              </h2>
              <p className="text-[11px] text-gray-500 font-medium">
                Breakdown of contract terms and benefits
              </p>
            </div>
          </div>
          <ChevronDown
            className={`text-gray-600 transition-transform duration-300 ${isStructureOpen ? "" : "-rotate-90"}`}
            size={20}
          />
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isStructureOpen
              ? "grid-rows-[1fr] opacity-100 mt-8"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2">
                  Contract Duration
                </p>
                <p className="text-xl font-bold text-white mb-1">
                  {structureData?.duration}
                </p>
                <p className="text-[10px] text-gray-500 font-medium">
                  {structureData?.dateRange}
                </p>
              </div>
              <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2">
                  Base Salary
                </p>
                <p className="text-xl font-bold text-[#53DDF5] mb-1">
                  {structureData?.baseSalary}
                </p>
                <p className="text-[10px] text-gray-500 font-medium">
                  {structureData?.annualSalary}
                </p>
              </div>
              <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2">
                  Performance Bonuses
                </p>
                <p className="text-xl font-bold text-white mb-1">
                  {structureData?.performanceBonuses}
                </p>
                <p className="text-[10px] text-gray-500 font-medium">
                  {structureData?.bonusDetail}
                </p>
              </div>
              <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2">
                  Image Rights
                </p>
                <p className="text-xl font-bold text-white mb-1">
                  {structureData?.imageRights}
                </p>
                <p className="text-[10px] text-gray-500 font-medium">
                  {structureData?.imageRightsDetail}
                </p>
              </div>
            </div>

            {/* AI Summary Alert */}
            <div className="bg-cyan-500/5 border border-cyan-500/10 p-5 rounded-2xl flex items-start gap-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500 mt-1">
                <Info size={16} />
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-cyan-400 mb-1 uppercase tracking-wider">
                  AI Summary
                </h4>
                <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                  {structureData.aiSummary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk & Clause Alerts Section */}
      <div className="bg-[#11161D]/60 border border-gray-800/60 rounded-3xl p-8 overflow-hidden transition-all duration-300">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsRisksOpen(!isRisksOpen)}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-500/10 rounded-xl text-red-400 border border-red-500/20">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Risk & Clause Alerts
              </h2>
              <p className="text-[11px] text-gray-500 font-medium">
                Identified concerns and recommendations
              </p>
            </div>
          </div>
          <ChevronDown
            className={`text-gray-600 transition-transform duration-300 ${isRisksOpen ? "" : "-rotate-90"}`}
            size={20}
          />
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isRisksOpen
              ? "grid-rows-[1fr] opacity-100 mt-8"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-4">
              {risksData?.risks?.map((risk, index) => (
                <div
                  key={index}
                  className={`${risk.type === "High Risk" ? "bg-[#1A1112]" : "bg-[#1A1811]"} border ${risk.type === "High Risk" ? "border-red-500/10" : "border-orange-500/10"} p-5 rounded-2xl relative overflow-hidden group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className={`${risk.type === "High Risk" ? "bg-red-500" : "bg-orange-500"} text-white text-[8px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-tighter mb-2 inline-block`}
                      >
                        {risk.type}
                      </span>
                      <h4 className="text-[13px] font-bold text-white">
                        {risk.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1">
                        {risk.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`mt-4 pt-4 border-t ${risk.type === "High Risk" ? "border-red-500/5" : "border-orange-500/5"}`}
                  >
                    <p
                      className={`text-[9px] ${risk.type === "High Risk" ? "text-red-500" : "text-orange-500"} uppercase font-black tracking-widest mb-1`}
                    >
                      AI Recommendation:
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium italic">
                      {risk.recommendation}
                    </p>
                  </div>
                </div>
              ))}

              {/* Market Standards Item */}
              <div className="bg-cyan-500/5 border border-cyan-500/10 p-5 rounded-2xl flex items-center gap-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500">
                  <CircleCheckBig size={16} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-cyan-400 font-sans">
                    Market Standard Assessment
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    {risksData?.market_standards_summary || "Clauses are generally within market standards."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {/* Market Value Comparison Section */}
        <div className="bg-[#11161D]/60 border border-gray-800/60 rounded-3xl overflow-hidden transition-all duration-300">
          <div
            className="p-6 flex justify-between items-center cursor-pointer hover:bg-[#1A232E] transition-all"
            onClick={() => setIsMarketValueOpen(!isMarketValueOpen)}
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Market Value Comparison
                </h4>
                <p className="text-[10px] text-gray-500">
                  Contract vs market benchmarks
                </p>
              </div>
            </div>
            <ChevronDown
              className={`text-gray-600 transition-transform duration-300 ${isMarketValueOpen ? "" : "-rotate-180"}`}
              size={18}
            />
          </div>

          <div
            className={`grid transition-all duration-500 ease-in-out ${
              isMarketValueOpen
                ? "grid-rows-[1fr] opacity-100 p-8 pt-2"
                : "grid-rows-[0fr] opacity-0 p-0"
            }`}
          >
            <div className="overflow-hidden">
              {/* Three Metric Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-3 text-center">
                    Current Market Value
                  </p>
                  <p className="text-2xl font-bold text-[#00D1FF]">
                    {marketData.currentMarketValue}
                  </p>
                </div>
                <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-3 text-center">
                    Contract Salary
                  </p>
                  <p className="text-2xl font-bold text-white">
                    {marketData.contractSalary}
                  </p>
                </div>
                <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-3 text-center">
                    Market Average
                  </p>
                  <p className="text-2xl font-bold text-gray-400">
                    {marketData.marketAverage}
                  </p>
                </div>
              </div>

              {/* Salary Percentile Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                    Salary Percentile
                  </p>
                  <p className="text-[11px] text-orange-400 font-bold">
                    {marketData.percentileText}
                  </p>
                </div>
                <div className="h-2 w-full bg-gray-800/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)] transition-all duration-1000"
                    style={{
                      width: `${marketData.salaryPercentile}%`,
                    }}
                  />
                </div>
              </div>

              {/* Status Alert Box */}
              <div className="p-5 bg-orange-500/5 border border-orange-500/10 rounded-2xl flex gap-4">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500 h-fit">
                  <Info size={18} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-orange-400 mb-1">
                    {marketData.status}
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                    {marketData.recommendation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scenario Comparison Section */}
        <div className="bg-[#11161D]/60 border border-gray-800/60 rounded-3xl overflow-hidden transition-all duration-300">
          <div
            className="p-6 flex justify-between items-center cursor-pointer hover:bg-[#1A232E] transition-all"
            onClick={() => setIsScenarioOpen(!isScenarioOpen)}
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                <Target size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Scenario Comparison
                </h4>
                <p className="text-[10px] text-gray-500">
                  Compare current vs alternative offers
                </p>
              </div>
            </div>
            <ChevronDown
              className={`text-gray-600 transition-transform duration-300 ${isScenarioOpen ? "" : "-rotate-180"}`}
              size={18}
            />
          </div>

          <div
            className={`grid transition-all duration-500 ease-in-out ${
              isScenarioOpen
                ? "grid-rows-[1fr] opacity-100 p-8 pt-2"
                : "grid-rows-[0fr] opacity-0 p-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Contract Card */}
                <div className="bg-[#0B0E14] border border-gray-800/80 p-7 rounded-2xl relative">
                  <div className="flex justify-between items-center mb-6">
                    <h5 className="text-[14px] font-bold text-white">
                      {scenarioData?.currentContract?.title}
                    </h5>
                    {scenarioData?.currentContract?.badge && (
                      <span className="bg-gray-800/80 text-gray-500 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">
                        {scenarioData?.currentContract?.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                        Financial Value
                      </p>
                      <p className="text-[16px] font-bold text-white">
                        {scenarioData?.currentContract?.financialValue}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                        Playing Time Probability
                      </p>
                      <p className="text-[16px] font-bold text-[#00D1FF]">
                        {scenarioData?.currentContract?.playingTimeProbability}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                        Career Growth Impact
                      </p>
                      <p className="text-[16px] font-bold text-white">
                        {scenarioData?.currentContract?.careerGrowthImpact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Alternative Offer Card */}
                <div className="bg-[#0C1218] border border-cyan-500/20 p-7 rounded-2xl relative shadow-[0_0_30px_rgba(6,182,212,0.02)]">
                  <div className="flex justify-between items-center mb-6">
                    <h5 className="text-[14px] font-bold text-white">
                      {scenarioData?.alternativeOffer?.title}
                    </h5>
                    {scenarioData?.alternativeOffer?.badge && (
                      <span className="bg-cyan-500/10 text-cyan-400 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter border border-cyan-500/20">
                        {scenarioData?.alternativeOffer?.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5 flex items-center justify-between">
                        Financial Value
                      </p>
                      <p className="text-[16px] font-bold text-[#00D1FF]">
                        {scenarioData?.alternativeOffer?.financialValue}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                        Playing Time Probability
                      </p>
                      <p className="text-[16px] font-bold text-white">
                        {scenarioData?.alternativeOffer?.playingTimeProbability}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                        Career Growth Impact
                      </p>
                      <p className="text-[16px] font-bold text-[#00D1FF]">
                        {scenarioData?.alternativeOffer?.careerGrowthImpact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Negotiation Assistant Section */}
      <div className="bg-[#11161D]/60 border border-gray-800/60 rounded-3xl p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20">
            <DollarSign size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Negotiation Assistant
            </h2>
            <p className="text-[11px] text-gray-500 font-medium">
              AI-generated talking points and strategy
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-[10px] text-cyan-500 font-black uppercase tracking-widest mb-4">
              Key Talking Points
            </p>
            <ul className="space-y-3">
              {negotiationData?.talkingPoints?.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[11px] text-gray-300 font-medium"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] text-orange-500 font-black uppercase tracking-widest mb-4">
              Strategic Concessions
            </p>
            <ul className="space-y-3">
              {negotiationData?.strategicConcessions?.map((concession, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[11px] text-gray-300 font-medium"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1 shrink-0" />
                  {concession}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
            <p className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-2">
              Walk-Away Threshold
            </p>
            <p className="text-[11px] text-gray-400 font-medium">
              {negotiationData.walkAwayThreshold}
            </p>
          </div>

          <button className="w-full bg-[#00D1FF] hover:bg-[#00B8E0] text-[#0B0E14] py-4 rounded-xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,209,255,0.2)] cursor-pointer">
            Generate Negotiation Brief (PDF)
          </button>
        </div>
      </div>

      {/* Contract Timeline Planner Section */}
      <div className="bg-[#11161D]/60 border border-gray-800/60 rounded-3xl p-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20 shadow-lg shadow-cyan-500/5">
            <Calendar size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Contract Timeline Planner
            </h2>
            <p className="text-[11px] text-gray-500 font-medium">
              Strategic milestones and windows
            </p>
          </div>
        </div>

        <div className="relative pl-12">
          {/* Vertical line connecting the timeline points */}
          <div className="absolute left-[20px] top-4 bottom-4 w-px bg-gray-800/60" />

          <div className="space-y-12">
            {timelineData?.timeline?.map((event, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Event Label Circle (Marker) */}
                <div
                  className={`absolute -left-[44px] top-0 h-10 w-10 rounded-full flex items-center justify-center border text-[8px] font-black tracking-tighter z-10 transition-transform group-hover:scale-110
                    ${
                      event.theme === "cyan"
                        ? "border-cyan-500/40 bg-[#0B0E14] text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        : event.theme === "orange"
                          ? "border-orange-500/40 bg-[#0B0E14] text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.05)]"
                          : "border-gray-800 bg-[#0B0E14] text-gray-500"
                    }`}
                >
                  {event.label}
                </div>

                <div className="flex flex-col items-start gap-1">
                  <h4 className="text-[14px] font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {event.date}
                  </p>
                  {event.badge && (
                    <div
                      className={`mt-2 px-3 py-1 rounded-full text-[9px] font-bold border 
                        ${
                          event.theme === "cyan"
                            ? "bg-cyan-500/5 border-cyan-500/10 text-cyan-600"
                            : "bg-orange-500/5 border-orange-500/10 text-orange-600"
                        }`}
                    >
                      {event.badge}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractView;
