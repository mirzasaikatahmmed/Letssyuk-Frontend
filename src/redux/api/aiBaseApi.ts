import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: (import.meta.env.VITE_AI_API_URL as string) || "https://ai.onyxsportai.com",
  prepareHeaders: (headers) => {
    const token = Cookies.get("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const aiBaseApi = createApi({
  reducerPath: "aiApi",
  baseQuery,
  tagTypes: [
    "AIRecommendation",
    "MatchPreparation",
    "ClubPlayerScouting",
    "ClubTacticalAnalysis",
    "ClubOppositionAnalysis",
    "ClubAcademyTracker",
    "ClubSquadIntelligence",
    "ClubRecruitmentNeeds",
    "ClubMatchArchive",
    "ClubStaffBriefing",
    "ClubTransferPlanning",
    "ClubCustomDashboard",
    "AgentContractStructure",
    "AgentRiskClause",
    "AgentMarketValue",
    "AgentScenarioComparison",
    "AgentNegotiationPreparation",
    "AgentCareerTimeline",
    "AgentOpportunityMatching",
    "AgentPlayerMonitoring",
  ],
  endpoints: () => ({}),
});
