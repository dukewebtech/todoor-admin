import { SoftwrkApi } from "configs/StoreQueryConfig";

const BASE_URL = '/api/auth'

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
        url: `${BASE_URL}/loginadmin`,
        method: "POST",
        ...config,
      }),
    }),
  }),
});

export default UserApi;
