import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
// import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // User Login 
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/auth/signin`,
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    //Password Change
    changePassword: build.mutation({
      query: (changePassword) => {
        return {
          url: `/auth/change-password`,
          method: "PATCH",
          body: changePassword,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),



    verifiedEmail: build.mutation({
      query: (otpData) => {
        return {
          url: `/auth/verify_email`,
          method: "POST",
          body: otpData,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    resetPassword: build.mutation({
      query: (password) => {
        return {
          url: `/auth/reset-password`,
          method: "POST",
          body: password,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    resendOTP: build.mutation({
      query: (resendOtp) => {
        return {
          url: `/auth/resend-otp`,
          method: "POST",
          body: resendOtp,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    forgetPassword: build.mutation({
      query: (userEmail) => {
        return {
          url: `/auth/forget-password`,
          method: "POST",
          body: userEmail,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    forgetOtpVerify: build.mutation({
      query: (otpData) => {
        return {
          url: `/auth/verify-otp`,
          method: "POST",
          body: otpData,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),


    

    //end
  }),
});

export const { useUserLoginMutation, useChangePasswordMutation,useForgetPasswordMutation, useForgetOtpVerifyMutation,useResendOTPMutation, useResetPasswordMutation } = authApi;
