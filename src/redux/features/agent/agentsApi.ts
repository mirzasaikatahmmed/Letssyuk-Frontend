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
      providesTags: ["AgentContractStructure"],
    }),
    getRiskClauseFlagging: builder.query<RiskClauseResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/risk-clause-flagging`,
      providesTags: ["AgentRiskClause"],
    }),
    getMarketValueBenchmarking: builder.query<MarketValueBenchmarkingResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/market-value-benchmarking`,
      providesTags: ["AgentMarketValue"],
    }),
    getScenarioComparison: builder.query<ScenarioComparisonResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/scenario-comparison-engine`,
      providesTags: ["AgentScenarioComparison"],
    }),
    getNegotiationPreparation: builder.query<NegotiationPreparationResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/negotiation-preparation-assistant`,
      providesTags: ["AgentNegotiationPreparation"],
    }),
    getCareerContractTimeline: builder.query<CareerContractTimelineResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/career-contract-timeline`,
      providesTags: ["AgentCareerTimeline"],
    }),
    getOpportunityMatching: builder.query<OpportunityMatchingResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/opportunity-matching`,
      providesTags: ["AgentOpportunityMatching"],
    }),
    getPlayerMonitoring: builder.query<PlayerMonitoringResponse, string>({
      query: (agentId) => `/agent/analysis/${agentId}/player-monitoring`,
      providesTags: ["AgentPlayerMonitoring"],
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
