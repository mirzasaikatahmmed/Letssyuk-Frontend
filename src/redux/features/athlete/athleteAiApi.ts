import type {
  AiAnalysisResponse,
  MatchPreparationData,
  PriorityFocusResponse,
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
  }),
});

export const { useGetMatchPreparationQuery, useGetPriorityFocusQuery } =
  athleteAiApi;
