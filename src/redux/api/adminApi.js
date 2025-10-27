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

    allNotification: build.query({
      query: (params) => ({
        url: `/notification/admin-notification`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.notification],
    }),

    notificationCount: build.query({
      query: (params) => ({
        url: `/notification/admin-notification-count`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.notificationCount],
    }),
    notificationRead: build.mutation({
      query: (data) => {
        return {
          url: `/notification/read-admin`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.notificationCount, tagTypes.notification],
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

    requestedVendor: build.query({
      query: (params) => ({
        url: `/users/pending-vendor`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.vendorRequest],
    }),
    requestedVendorDetails: build.query({
      query: (data) => ({
        url: `/users/vendor-details/${data?.id}/${data?.sID}`,
        method: "GET",
      }),
      providesTags: [tagTypes.vendorRequest],
    }),

    acceptVendorRequest: build.mutation({
      query: (data) => {
        return {
          url: `/users/approve/${data?.driverData}/${data?.sID}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.vendorRequest, tagTypes.vendor],
    }),
    deleteVendorRequest: build.mutation({
      query: (data) => {
        return {
          url: `/users/reject/${data?.driverData}/${data?.sID}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.vendorRequest],
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

    acceptervicesRequest: build.mutation({
      query: (id) => {
        return {
          url: `/vsm/approve/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.serviceRequest],
    }),
    rejectServicesRequest: build.mutation({
      query: (id) => {
        return {
          url: `/vsm/reject/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.serviceRequest],
    }),
    //All Transaction
    allTransactions: build.query({
      query: (params) => ({
        url: `/transaction/alltransactions`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.trsnsaction],
    }),
    totalTransaction: build.query({
      query: (params) => ({
        url: `/transaction/earning`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.trsnsaction],
    }),

    //Admin
    allAdmin: build.query({
      query: (params) => ({
        url: `/admin/all`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.admin],
    }),

    addAdmin: build.mutation({
      query: (body) => {
        return {
          url: `/admin/add`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [tagTypes.admin],
    }),

    editAdmin: build.mutation({
      query: (data) => {
        return {
          url: `/admin/edit/${data?.id}`,
          method: "PUT",
          body: data?.data,
        };
      },
      invalidatesTags: [tagTypes.admin],
    }),
    deleteAdmin: build.mutation({
      query: (id) => {
        return {
          url: `/admin/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.admin],
    }),

    //refund
    allRefund: build.query({
      query: (params) => ({
        url: `/transaction/refund`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.refund],
    }),

    //FeedBack
    allFeedback: build.query({
      query: (params) => ({
        url: `/feedback/all-admin`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.feedback],
    }),

    actionFeedback: build.mutation({
      query: (id) => {
        return {
          url: `/feedback/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.feedback],
    }),

    //payouts
    allPayout: build.query({
      query: (params) => ({
        url: `/transaction/payout`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.payout],
    }),
    /// Support
    allSupport: build.query({
      query: (params) => ({
        url: `/support`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.support],
    }),
    readSupport: build.mutation({
      query: (id) => {
        return {
          url: `/support/toggle/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.support],
    }),
    /// Notification Post

    addNotification: build.mutation({
      query: (body) => {
        return {
          url: `/notification/direct-notification`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [tagTypes.notificationPost],
    }),
    addNotificationSubAdmin: build.mutation({
      query: (body) => {
        return {
          url: `/notification/add-subadmin-notification`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [tagTypes.notificationPost],
    }),

    historyNotification: build.query({
      query: (params) => ({
        url: `/notification/my-notification`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.notificationPost],
    }),
    requestedNotification: build.query({
      query: (params) => ({
        url: `/notification/request`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.notificationPost],
    }),

    approveNotification: build.mutation({
      query: (data) => {
        return {
          url: `/notification/approve/${data?.id}`,
          method: "PUT",
          body: data?.data,
        };
      },
      invalidatesTags: [tagTypes.notificationPost],
    }),

    //Banner

    allBanner: build.query({
      query: (params) => ({
        url: `/quots/all`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.banner],
    }),

    postBanner: build.mutation({
      query: (body) => {
        return {
          url: `/quots/add`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [tagTypes.banner],
    }),
    deleteBanner: build.mutation({
      query: (data) => {
        return {
          url: `/quots/delete/${data.id}`,
          method: "DELETE",
          body: data.data,
        };
      },
      invalidatesTags: [tagTypes.banner],
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
  useAllNotificationQuery,
  useNotificationCountQuery,
  useNotificationReadMutation,
  //users
  useAllUsersQuery,
  useUsersBanMutation,
  useUsersUnbanMutation,
  ///Vendor
  useAllVendorQuery,
  useVendorsBanMutation,
  useRequestedVendorQuery,
  useRequestedVendorDetailsQuery,
  useAcceptVendorRequestMutation,
  useDeleteVendorRequestMutation,
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
  useAcceptervicesRequestMutation,
  useRejectServicesRequestMutation,
  //Transaction
  useAllTransactionsQuery,
  useTotalTransactionQuery,
  //Admin
  useAllAdminQuery,
  useAddAdminMutation,
  useEditAdminMutation,
  useDeleteAdminMutation,
  //refund
  useAllRefundQuery,
  //feedback
  useAllFeedbackQuery,
  useActionFeedbackMutation,
  ///payout
  useAllPayoutQuery,
  //Support
  useAllSupportQuery,
  useReadSupportMutation,
  //Notification
  useAddNotificationMutation,
  useAddNotificationSubAdminMutation,
  useHistoryNotificationQuery,
  useApproveNotificationMutation,
  useRequestedNotificationQuery,
  //Banner
  useAllBannerQuery,
  usePostBannerMutation,
  useDeleteBannerMutation,
} = adminApi;
