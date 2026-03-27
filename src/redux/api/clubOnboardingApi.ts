import { baseApi } from './baseApi';

export const clubOnboardingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClubOnboarding: builder.query({
      query: () => '/club-onboarding/me',
      providesTags: ['Club'],
    }),
    upsertClubInfo: builder.mutation({
      query: (data) => ({
        url: '/club-onboarding/club-info',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Club'],
    }),
    upsertPrimaryContact: builder.mutation({
      query: ({ clubId, ...data }) => ({
        url: `/club-onboarding/${clubId}/contact`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Club'],
    }),
    upsertTeams: builder.mutation({
      query: ({ clubId, ...data }) => ({
        url: `/club-onboarding/${clubId}/teams`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Club'],
    }),
    upsertServices: builder.mutation({
      query: ({ clubId, ...data }) => ({
        url: `/club-onboarding/${clubId}/services`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Club'],
    }),
    upsertRecruitment: builder.mutation({
      query: ({ clubId, ...data }) => ({
        url: `/club-onboarding/${clubId}/recruitment`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Club'],
    }),
    upsertOutput: builder.mutation({
      query: ({ clubId, ...data }) => ({
        url: `/club-onboarding/${clubId}/output`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Club'],
    }),
    upsertConsent: builder.mutation({
      query: ({ clubId, ...data }) => ({
        url: `/club-onboarding/${clubId}/consent`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Club'],
    }),
  }),
});

export const { 
  useGetClubOnboardingQuery, 
  useUpsertClubInfoMutation, 
  useUpsertPrimaryContactMutation, 
  useUpsertTeamsMutation, 
  useUpsertServicesMutation,
  useUpsertRecruitmentMutation,
  useUpsertOutputMutation,
  useUpsertConsentMutation
} = clubOnboardingApi;
