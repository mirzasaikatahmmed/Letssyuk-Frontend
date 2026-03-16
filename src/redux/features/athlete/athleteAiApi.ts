import type {
  AiAnalysisResponse,
  MatchPreparationData,
  PriorityFocusResponse,
  NutritionEnergyResponse,
  WeeklyStructureResponse,
  TechnicalSkillsResponse,
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
      query: (playerId) => `/athlete/analysis/${playerId}/weekly-performance-planner`,
      providesTags: ["AIRecommendation"],
    }),
    getTechnicalSkillsEngine: builder.query<TechnicalSkillsResponse, string>({
      query: (playerId) => `/athlete/analysis/${playerId}/technical-skills-engine`,
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
} = athleteAiApi;
