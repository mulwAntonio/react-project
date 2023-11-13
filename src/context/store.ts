import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/authSlice.js";
import { rootApi } from "./api.js";

export const stateStore = configureStore({
  reducer: {
    auth: AuthReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(rootApi.middleware),
  devTools: true,
});

export type RootStateType = ReturnType<typeof stateStore.getState>;
export type RootDispatchType = typeof stateStore.dispatch;
