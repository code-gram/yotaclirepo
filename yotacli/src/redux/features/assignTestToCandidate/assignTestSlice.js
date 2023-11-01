import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const assignTestToCandidate = createAsyncThunk(
  "assignEmail",
  async (test) => {
    const response = await fetch(
      "http://localhost:9090/sendingEmail",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(test),
      }
    );
    const result = await response
      .json()
      .then(function (response) {
        console.log(response);
        window.alert("Email sent succesfully");
      })
      .catch(function (error) {
        console.log(error);
      });
    return result;
  }
);

export const assignTest = createSlice({
  name: "assignEmail",
  initialState: {
    emails: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [assignTestToCandidate.pending]: (state) => {
      state.loading = true;
    },

    [assignTestToCandidate.fulfilled]: (state, action) => {
      state.loading = false;
      state.emails = action.data;
      console.log(action.data);
    },

    [assignTestToCandidate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.data;
    },
  },
});

export default assignTest.reducer;
