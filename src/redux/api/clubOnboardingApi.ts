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
    // We will add the other endpoints here later
  }),
});

export const { useGetClubOnboardingQuery, useUpsertClubInfoMutation, useUpsertPrimaryContactMutation } = clubOnboardingApi;
