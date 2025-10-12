import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //terms-of-condition
    terms: build.query({
      query: (params) => ({
        url: `/static-contents?type=terms-of-condition`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.terms],
    }),

    termsAdd: build.mutation({
      query: (data) => {
        return {
          url: `/static-contents`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.terms],
    }),

    //Profile details

    userProfile: build.query({
      query: (params) => ({
        url: `/users/user-details`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.user],
    }),

    updateUser: build.mutation({
      query: (data) => {
        return {
          url: `/users/update`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    ////notification

    notificationAll: build.query({
      query: (params) => ({
        url: `/notifications/notification-adminend`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.notification],
    }),
    notificationCount: build.query({
      query: (params) => ({
        url: `notifications/unread-count`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.notification],
    }),
    notificationRead: build.mutation({
      query: (data) => {
        return {
          url: `/notifications/read-admin`,
          method: "PATCH",
          body: data,
        };
      },
      // invalidatesTags: [tagTypes.notification],
    }),

    ///overView
    count: build.query({
      query: (params) => ({
        url: `/users/count`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.overview],
    }),
    userAllRatio: build.query({
      query: (params) => ({
        url: `/users/user-ratio`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.users],
    }),

    earningRatio: build.query({
      query: (params) => ({
        url: `/transaction/earning-ratio`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.earning],
    }),

    ///All users

    allUsers: build.query({
      query: (params) => ({
        url: `/users/all`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.users],
    }),

    //end
  }),
});

export const {
  //Terms
  useTermsAddMutation,
  useTermsQuery,
  //Overview
  useCountQuery,
  useUserAllRatioQuery,
  useEarningRatioQuery,

  //profile
  useUserProfileQuery,
  useUpdateUserMutation,
  //notification
  useNotificationAllQuery,
  useNotificationReadMutation,
  useNotificationCountQuery,
  //users
  useAllUsersQuery,
} = adminApi;
