import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    authToken: JSON.parse(localStorage.getItem("authToken")!) || null,
    errorMsg: null,
  },
  reducers: {
    resetState: () => {},
    setToken: () => {},
  },
});

export const { resetState, setToken } = authSlice.actions;
export default authSlice.reducer;
