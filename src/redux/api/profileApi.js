import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: `/users/my_profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.profile],
    }),

    profileUpdate: build.mutation({
      query: (profile) => ({
        url: `/users/update_profile`,
        method: "PATCH",
        body: profile,
      }),
      invalidatesTags: [tagTypes.profile],
    }),
  }),
});

export const { useGetProfileQuery, useProfileUpdateMutation } = profileApi;
