import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  validToken: false,
  error: null,
  loading: false,
  jwtToken: null,
  success: false,
};

const securitySlice = createSlice({
  name: "security",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //registration
    builder.addCase("security/registeruser/pending", (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase("security/registeruser/fulfilled", (state, action) => {
      state.loading = false;
      state.success = true; // registration successfull
    });
    builder.addCase("security/registeruser/rejected", (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //login
    builder.addCase("security/loginuser/pending", (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase("security/loginuser/fulfilled", (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.jwtToken = action.payload.jwtToken;
    });
    builder.addCase("security/loginuser/rejected", (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    //logout
  },
});

export default securitySlice.reducer;
