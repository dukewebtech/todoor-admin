import { SoftwrkApi } from "configs/StoreQueryConfig";

const BASE_URL = '/api'

export const UserApi = SoftwrkApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/signup`,
        method: "POST",
        ...config,
      }),
    }),
    login: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/auth/login`,
        method: "POST",
        ...config,
      }),
    }),

    getAll: builder.query({
      query: (arg) => {
        const { userType } = arg;
        return {
          url: `${BASE_URL}/company/getalluser`,
          method: "GET",
          params: { userType },
        };
      },
    }),

    getAllCompanyRiders: builder.query({
      query: (arg) => {
        const { userType } = arg;
        return {
          url: `${BASE_URL}/company/getalluser`,
          method: "GET",
          params: { userType },
        };
      },
    }),

    // getAllRidersForCompany: builder.query({
    //   query: (arg) => {
    //     const { userId } = arg;
    //     return {
    //       url: `${BASE_URL}/super-admin/getallriderscompany`,
    //       method: "GET",
    //       params: { userId },
    //     };
    //   },
    // }),

    getStats: builder.query({
      query: (arg) => {
        // const { userType } = arg;
        return {
          url: `${BASE_URL}/super-admin/userStatsChart`,
          method: "GET",
          // params: { userType },
        };
      },
    }),
  }),
});

// ;

export default UserApi;
