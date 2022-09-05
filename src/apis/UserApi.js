import { SoftwrkApi } from "configs/StoreQueryConfig";

export const UserApi = SoftwrkApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (config) => ({ url: "/user/login", ...config }),
    }),
  }),
});

export default UserApi;
