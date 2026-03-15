import type {
  AiAnalysisResponse,
  MatchPreparationData,
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
  }),
});

export const { useGetMatchPreparationQuery } = athleteAiApi;
