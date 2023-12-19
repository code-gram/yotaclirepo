import { createSlice } from "@reduxjs/toolkit";

export const userLogin = createSlice({
  name: "userLogin",
  initialState: {
    authToken: "",
    userRole: ""
  },

  reducers: {
    handleLoginToken: (state, action) => {
      state.authToken = action.payload.authToken;
      state.userRole = action.payload.userRole;
    },
  },

});

export const { handleLoginToken } = userLogin.actions;
export default userLogin.reducer
