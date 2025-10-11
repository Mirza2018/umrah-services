import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    ///Workout
    workoutList: build.query({
      query: (params) => ({
        url: `/workout/workout-group`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.workout],
    }),
    workoutDetails: build.query({
      query: (params) => ({
        url: `/workout/by-sportsId/${params.id}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.workout],
    }),

    workoutCreate: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/workout/add`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.workout],
    }),

    workoutEdit: build.mutation({
      query: (data) => {
        console.log("okok", data);
        return {
          url: `/workout/edit-workout/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: [tagTypes.workout],
    }),
    workoutSingleDelete: build.mutation({
      query: (id) => {
        return {
          url: `/workout/delete-workout/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.workout],
    }),
    workoutAllDelete: build.mutation({
      query: (id) => {
        return {
          url: `/workout/delete-sportsId/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.workout],
    }),

    //All Users
    allUsers: build.query({
      query: (params) => ({
        url: `users/all`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.users],
    }),
    usersBan: build.mutation({
      query: (id) => {
        return {
          url: `/users/ban/${id}`,
          method: "PUT",
        };
      },
      invalidatesTags: [tagTypes.users],
    }),
    usersUnban: build.mutation({
      query: (id) => {
        return {
          url: `/users/unban/${id}`,
          method: "PUT",
        };
      },
      invalidatesTags: [tagTypes.users],
    }),

    ///challenge/all

    allChallenge: build.query({
      query: (params) => ({
        url: `/challenge/all`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.challenge],
    }),

    challengeAdd: build.mutation({
      query: (data) => {
        return {
          url: `/challenge/add`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.challenge],
    }),

    challengeEdit: build.mutation({
      query: (data) => {
        return {
          url: `/challenge/edit/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: [tagTypes.challenge],
    }),

    challengeDelete: build.mutation({
      query: (id) => {
        return {
          url: `/challenge/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.category],
    }),
    ///Earning
    allEarning: build.query({
      query: (params) => ({
        url: `/transaction/alltransactions`,
        method: "GET",
        params,
      }),
      // providesTags: [tagTypes.challenge],
    }),

    ///category

    categoryList: build.query({
      query: (params) => ({
        url: `/category/all`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.category],
    }),
    categoryAdd: build.mutation({
      query: (data) => {
        return {
          url: `/category/add`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.category],
    }),
    categoryEdit: build.mutation({
      query: (data) => {
        return {
          url: `/category/edit/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: [tagTypes.category],
    }),

    categoryDelete: build.mutation({
      query: (id) => {
        return {
          url: `/category/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.category],
    }),

    ////quots/all

    quotsList: build.query({
      query: (params) => ({
        url: `/quots/all`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.quots],
    }),
    quotsAdd: build.mutation({
      query: (data) => {
        return {
          url: `/quots/add`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.quots],
    }),

    quotsDelete: build.mutation({
      query: (id) => {
        return {
          url: `/quots/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.quots],
    }),

    //feedback
    feedbackList: build.query({
      query: (params) => ({
        url: `/feedback/all`,
        method: "GET",
        params,
      }),
      // providesTags: [tagTypes.quots],
    }),

    //fandq

    fandqList: build.query({
      query: (params) => ({
        url: `/fandq/all`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.fandq],
    }),
    fandqAdd: build.mutation({
      query: (data) => {
        return {
          url: `/fandq`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.fandq],
    }),

    fandqDelete: build.mutation({
      query: (id) => {
        return {
          url: `/fandq/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.fandq],
    }),
    fandqEdit: build.mutation({
      query: (data) => {
        return {
          url: `/fandq/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: [tagTypes.fandq],
    }),

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

    //privacy-policy
    privacy: build.query({
      query: (params) => ({
        url: `/static-contents?type=privacy-policy`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.privacy],
    }),
    privacyAdd: build.mutation({
      query: (data) => {
        return {
          url: `/static-contents`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.privacy],
    }),
    ///overView
    count: build.query({
      query: (params) => ({
        url: `/users/count`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.count, tagTypes.earning],
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

    //end
  }),
});

export const {
  useWorkoutListQuery,

  useWorkoutCreateMutation,
  useWorkoutDetailsQuery,
  useWorkoutEditMutation,
  useWorkoutAllDeleteMutation,
  useWorkoutSingleDeleteMutation,
  //users
  useAllUsersQuery,
  useUsersBanMutation,
  useUsersUnbanMutation,
  ///challenge
  useAllChallengeQuery,
  useChallengeAddMutation,
  useChallengeEditMutation,
  useAllEarningQuery,
  useChallengeDeleteMutation,

  //category
  useCategoryListQuery,
  useCategoryAddMutation,
  useCategoryEditMutation,
  useCategoryDeleteMutation,
  ///quots
  useQuotsListQuery,
  useQuotsAddMutation,
  useQuotsDeleteMutation,
  //feedback
  useFeedbackListQuery,

  //fandq
  useFandqAddMutation,
  useFandqListQuery,
  useFandqDeleteMutation,
  useFandqEditMutation,
  //Terms
  useTermsAddMutation,
  useTermsQuery,
  //privacy
  usePrivacyAddMutation,
  usePrivacyQuery,
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
  useNotificationCountQuery
} = adminApi;
