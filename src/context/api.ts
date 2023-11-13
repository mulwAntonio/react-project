import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// remember to add api url
const BaseUrl = "";

export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: () => ({}),
});
