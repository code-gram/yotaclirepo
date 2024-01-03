import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const userLoginData = createAsyncThunk(
  "createLoginData",
  async (userCredentail) => {
    const response = await axios.post('/yota-api/users/authenticate', userCredentail)     
     const data = await response.data;
     console.log(data);
     return data;
  }
);

export const userLogin = createSlice({
  name: "userLogin",
  initialState: {
    authToken: "",
    userRole: "",
    status: false
  },

  extraReducers(builder) {
    builder
      .addCase(userLoginData.pending, (state, action) => {
        state.status = 'loading'
        
      })
      .addCase(userLoginData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.authToken = action.payload.authToken;
        state.userRole = action.payload.userRole;
        console.log("authToken  ", action.payload.authToken)
        console.log("userRole  ", action.payload.userRole)

      })
      .addCase(userLoginData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }

});
export default userLogin.reducer;
