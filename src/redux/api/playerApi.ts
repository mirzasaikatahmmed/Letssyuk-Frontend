import { baseApi } from "./baseApi";

export const playerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileCompletion: builder.query({
      query: (playerId) => ({
        url: `/players/${playerId}/completion`,
        method: "GET",
      }),
      providesTags: ["Player"],
    }),
    getPlayerDetails: builder.query({
      query: (playerId) => ({
        url: `/players/${playerId}`,
        method: "GET",
      }),
      providesTags: ["Player"],
    }),
    upsertPersonal: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/players/${userId}/personal`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Player"],
    }),
  }),
});

export const {
  useGetProfileCompletionQuery,
  useGetPlayerDetailsQuery,
  useUpsertPersonalMutation,
} = playerApi;
