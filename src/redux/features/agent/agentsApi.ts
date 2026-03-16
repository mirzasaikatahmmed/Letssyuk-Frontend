import type {
  ContractStructureResponse,
  RiskClauseResponse,
  MarketValueBenchmarkingResponse,
  ScenarioComparisonResponse,
  NegotiationPreparationResponse,
  CareerContractTimelineResponse,
  OpportunityMatchingResponse,
  PlayerMonitoringResponse,
} from "@/types/agent.types";
import { aiBaseApi } from "../../api/aiBaseApi";

export const agentsApi = aiBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getContractStructure: builder.query<ContractStructureResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/contract-structure-analyzer`,
      providesTags: ["AIRecommendation"],
    }),
    getRiskClauseFlagging: builder.query<RiskClauseResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/risk-clause-flagging`,
      providesTags: ["AIRecommendation"],
    }),
    getMarketValueBenchmarking: builder.query<MarketValueBenchmarkingResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/market-value-benchmarking`,
      providesTags: ["AIRecommendation"],
    }),
    getScenarioComparison: builder.query<ScenarioComparisonResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/scenario-comparison-engine`,
      providesTags: ["AIRecommendation"],
    }),
    getNegotiationPreparation: builder.query<NegotiationPreparationResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/negotiation-preparation-assistant`,
      providesTags: ["AIRecommendation"],
    }),
    getCareerContractTimeline: builder.query<CareerContractTimelineResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/career-contract-timeline`,
      providesTags: ["AIRecommendation"],
    }),
    getOpportunityMatching: builder.query<OpportunityMatchingResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/opportunity-matching`,
      providesTags: ["AIRecommendation"],
    }),
    getPlayerMonitoring: builder.query<PlayerMonitoringResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/player-monitoring`,
      providesTags: ["AIRecommendation"],
    }),
  }),
});

export const {
  useGetContractStructureQuery,
  useGetRiskClauseFlaggingQuery,
  useGetMarketValueBenchmarkingQuery,
  useGetScenarioComparisonQuery,
  useGetNegotiationPreparationQuery,
  useGetCareerContractTimelineQuery,
  useGetOpportunityMatchingQuery,
  useGetPlayerMonitoringQuery,
} = agentsApi;
