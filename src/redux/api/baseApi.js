// import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";
import { getBaseUrl } from "../getBaseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: getBaseUrl(),
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    const signUpToken = getState().auth.signUpToken;
    const resendSignUpToken = getState().auth.resendSignUpToken;
    const forgotPassToken = getState().auth.forgotPasswordToken;
    const resetPasswordToken = getState().auth.resetPasswordToken;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    if (signUpToken) {
      headers.set("authorization", `Bearer ${signUpToken}`);
    }

    if (forgotPassToken) {
      headers.set("signUpToken", `signUpToken ${forgotPassToken}`);
    }
    if (resendSignUpToken) {
      headers.set("authorization", `Bearer ${resendSignUpToken}`);
    }

    if (resetPasswordToken) { 
      headers.set("Forget-password", `Forget-password ${resetPasswordToken}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

// const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 401) {
//     const res = await fetch(`${getBaseUrl()}/auth/refresh-token`, {
//       method: "POST",
//       credentials: "include",
//     });

//     const data = await res.json();
//     if (data?.data?.accessToken) {
//       const user = api.getState().auth.user;

//       api.dispatch(
//         setUser({
//           user,
//           token: data.data.accessToken,
//         })
//       );

//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       // api.dispatch(logout());
//     }
//   }

//   return result;
// };
