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
    upsertAgentLicense: builder.mutation({
      query: (data) => ({
        url: '/agents/onboard/license',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Agent'],
    }),
    uploadCloudinaryFile: builder.mutation({
      query: (fileData: FormData) => ({
        url: '/files/cloudinary/upload',
        method: 'POST',
        body: fileData,
      }),
    }),
  }),
});

export const {
  useGetAgentsQuery,
  useUpsertAgentDetailsMutation,
  useUpsertAgentLicenseMutation,
  useUploadCloudinaryFileMutation,
} = agentOnboardingApi;
