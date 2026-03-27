import { baseApi } from '@/redux/api/baseApi';

export const agentOnboardingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAgents: builder.query({
      query: () => '/agents',
      providesTags: ['Agent'],
    }),
    upsertAgentDetails: builder.mutation({
      query: (data) => ({
        url: '/agents/onboard',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Agent'],
    }),
  }),
});

export const {
  useGetAgentsQuery,
  useUpsertAgentDetailsMutation,
} = agentOnboardingApi;
