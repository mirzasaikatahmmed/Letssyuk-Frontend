import type {
  ClubAIAnalysisResponse,
  PlayerScoutingData,
  TacticalAnalysisData,
  OppositionAnalysisData,
  AcademyDevelopmentData,
  SquadIntelligenceData,
  RecruitmentNeedsData,
  MatchArchiveData,
  StaffBriefingData,
  TransferPlanningData,
  CustomClubDashboardData,
} from "@/types/club.types";
import { aiBaseApi } from "../../api/aiBaseApi";

export const clubsApi = aiBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClubScoutingReport: builder.query<ClubAIAnalysisResponse<PlayerScoutingData>, string>({
      query: (clubId) => `/club/analysis/${clubId}/player-scouting-report`,
      providesTags: ["ClubPlayerScouting"],
    }),
    getClubTacticalAnalysis: builder.query<ClubAIAnalysisResponse<TacticalAnalysisData>, string>({
      query: (clubId) => `/club/analysis/${clubId}/tactical-match-analysis`,
      providesTags: ["ClubTacticalAnalysis"],
    }),
    getClubOppositionAnalysis: builder.query<ClubAIAnalysisResponse<OppositionAnalysisData>, string>({
      query: (clubId) => `/club/analysis/${clubId}/opposition-analysis`,
      providesTags: ["ClubOppositionAnalysis"],
    }),
    getClubAcademyTracker: builder.query<ClubAIAnalysisResponse<AcademyDevelopmentData>, string>({
      query: (clubId) => `/club/analysis/${clubId}/academy-development-tracker`,
      providesTags: ["ClubAcademyTracker"],
    }),
    getClubSquadIntelligence: builder.query<ClubAIAnalysisResponse<SquadIntelligenceData>, string>({
      query: (clubId) => `/club/analysis/${clubId}/squad-performance-intelligence`,
      providesTags: ["ClubSquadIntelligence"],
    }),
    getClubRecruitmentNeeds: builder.query<ClubAIAnalysisResponse<RecruitmentNeedsData>, string>({
      query: (clubId) => `/club/analysis/${clubId}/recruitment-needs-publisher`,
      providesTags: ["ClubRecruitmentNeeds"],
    }),
    getClubMatchArchive: builder.query<ClubAIAnalysisResponse<MatchArchiveData>, string>({
      query: (clubId) => `/club/analysis/${clubId}/match-report-archive`,
      providesTags: ["ClubMatchArchive"],
    }),
    getClubStaffBriefing: builder.query<ClubAIAnalysisResponse<StaffBriefingData>, string>({
      query: (clubId) => `/club/analysis/${clubId}/staff-briefing-generator`,
      providesTags: ["ClubStaffBriefing"],
    }),
    getClubTransferPlanning: builder.query<ClubAIAnalysisResponse<TransferPlanningData>, string>({
      query: (clubId) => `/club/analysis/${clubId}/transfer-squad-planning`,
      providesTags: ["ClubTransferPlanning"],
    }),
    getClubCustomDashboard: builder.query<ClubAIAnalysisResponse<CustomClubDashboardData>, string>({
      query: (clubId) => `/club/analysis/${clubId}/custom-club-dashboard`,
      providesTags: ["ClubCustomDashboard"],
    }),
  }),
});

export const {
  useGetClubScoutingReportQuery,
  useGetClubTacticalAnalysisQuery,
  useGetClubOppositionAnalysisQuery,
  useGetClubAcademyTrackerQuery,
  useGetClubSquadIntelligenceQuery,
  useGetClubRecruitmentNeedsQuery,
  useGetClubMatchArchiveQuery,
  useGetClubStaffBriefingQuery,
  useGetClubTransferPlanningQuery,
  useGetClubCustomDashboardQuery,
} = clubsApi;
