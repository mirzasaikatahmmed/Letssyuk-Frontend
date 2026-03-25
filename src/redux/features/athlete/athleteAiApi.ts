import type {
  AiAnalysisResponse,
  MatchPreparationData,
  PriorityFocusResponse,
  NutritionEnergyResponse,
  WeeklyStructureResponse,
  TechnicalSkillsResponse,
  PhysicalPerformanceResponse,
  TacticalAwarenessResponse,
  PlayerDevelopmentResponse,
  RecoveryLoadResponse,
  MentalHealthSupportResponse,
  PlayerCvResponse,
} from "@/types/ai.types";
import { aiBaseApi } from "../../api/aiBaseApi";

export const athleteAiApi = aiBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMatchPreparation: builder.query<
      AiAnalysisResponse<MatchPreparationData>,
      string
    >({
      query: (playerId) =>
        `/athlete/analysis/${playerId}/match-preparation-system`,
      providesTags: ["MatchPreparation"],
    }),
    getPriorityFocus: builder.query<PriorityFocusResponse, string>({
      query: (playerId) => `/athlete/analysis/${playerId}/priority-focus`,
      providesTags: ["AIRecommendation"],
    }),
    getNutritionEnergy: builder.query<NutritionEnergyResponse, string>({
      query: (playerId) => `/athlete/analysis/${playerId}/nutrition-energy-plan`,
      providesTags: ["AIRecommendation"],
    }),
    getWeeklyStructure: builder.query<WeeklyStructureResponse, string>({
      query: (playerId) =>
        `/athlete/analysis/${playerId}/weekly-performance-planner`,
      providesTags: ["AIRecommendation"],
    }),
    getTechnicalSkillsEngine: builder.query<TechnicalSkillsResponse, string>({
      query: (playerId) =>
        `/athlete/analysis/${playerId}/technical-skills-engine`,
      providesTags: ["AIRecommendation"],
    }),
    getPhysicalPerformance: builder.query<PhysicalPerformanceResponse, string>({
      query: (playerId) =>
        `/athlete/analysis/${playerId}/physical-performance-dashboard`,
      providesTags: ["AIRecommendation"],
    }),
    getTacticalAwareness: builder.query<TacticalAwarenessResponse, string>({
      query: (playerId) =>
        `/athlete/analysis/${playerId}/tactical-awareness-assistant`,
      providesTags: ["AIRecommendation"],
    }),
    getPlayerDevelopmentPathway: builder.query<
      PlayerDevelopmentResponse,
      string
    >({
      query: (playerId) =>
        `/athlete/analysis/${playerId}/player-development-pathway`,
      providesTags: ["AIRecommendation"],
    }),
    getRecoveryLoadManagement: builder.query<RecoveryLoadResponse, string>({
      query: (playerId) =>
        `/athlete/analysis/${playerId}/recovery-load-management`,
      providesTags: ["AIRecommendation"],
    }),
    getMentalHealthSupport: builder.query<MentalHealthSupportResponse, string>({
      query: (playerId) =>
        `/athlete/analysis/${playerId}/mental-health-wellbeing-support`,
      providesTags: ["AIRecommendation"],
    }),
    getFormattedPlayerCv: builder.query<PlayerCvResponse, string>({
      query: (playerId) => `/athlete/analysis/${playerId}/formatted-player-cv`,
      providesTags: ["AIRecommendation"],
    }),
  }),
});

export const {
  useGetMatchPreparationQuery,
  useGetPriorityFocusQuery,
  useGetNutritionEnergyQuery,
  useGetWeeklyStructureQuery,
  useGetTechnicalSkillsEngineQuery,
  useGetPhysicalPerformanceQuery,
  useGetTacticalAwarenessQuery,
  useGetPlayerDevelopmentPathwayQuery,
  useGetRecoveryLoadManagementQuery,
  useGetMentalHealthSupportQuery,
  useGetFormattedPlayerCvQuery,
  useLazyGetFormattedPlayerCvQuery,
} = athleteAiApi;
