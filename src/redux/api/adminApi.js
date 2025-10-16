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

    usersBan: build.mutation({
      query: (id) => {
        return {
          url: `/users/ban-unban/${id}`,
          method: "PATCH",
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
    ///api/v1/users/all-vendo
    allVendor: build.query({
      query: (params) => ({
        url: `/users/all-vendor`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.vendor],
    }),

    vendorsBan: build.mutation({
      query: (id) => {
        return {
          url: `/users/ban-unban/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.vendor],
    }),
    //service-type/

    allService: build.query({
      query: (params) => ({
        url: `/service-type`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.serviceType],
    }),

    addService: build.mutation({
      query: (body) => {
        return {
          url: `/service-type`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [tagTypes.serviceType],
    }),
    editService: build.mutation({
      query: (data) => {
        return {
          url: `/service-type/${data?.id}`,
          method: "PUT",
          body: data?.data,
        };
      },
      invalidatesTags: [tagTypes.serviceType],
    }),

    deleteService: build.mutation({
      query: (id) => {
        return {
          url: `/service-type/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.serviceType],
    }),

    ///services
    allServices: build.query({
      query: (params) => ({
        url: `/service/all`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.service],
    }),
    createService: build.mutation({
      query: (body) => {
        return {
          url: `/service`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [tagTypes.service],
    }),

    editCreateService: build.mutation({
      query: (data) => {
        return {
          url: `/service/${data?.id}`,
          method: "PUT",
          body: data?.data,
        };
      },
      invalidatesTags: [tagTypes.service],
    }),
    deleteCreateService: build.mutation({
      query: (id) => {
        return {
          url: `/service/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.service],
    }),
    //Vendor Service
    servicesRequest: build.query({
      query: (params) => ({
        url: `/vsm/all-pending`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.serviceRequest],
    }),
    servicesRequestDetails: build.query({
      query: (id) => ({
        url: `vsm/req-details/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.serviceRequest],
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
  useUsersBanMutation,
  useUsersUnbanMutation,
  ///Vendor
  useAllVendorQuery,
  useVendorsBanMutation,
  //Service type
  useAllServiceQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
  useEditServiceMutation,
  //Create service
  useCreateServiceMutation,
  useAllServicesQuery,
  useEditCreateServiceMutation,
  useDeleteCreateServiceMutation,
  //service Requests
  useServicesRequestQuery,
  useServicesRequestDetailsQuery,
} = adminApi;
