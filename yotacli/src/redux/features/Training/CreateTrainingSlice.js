import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headerContents } from "../../../components/utils/Authentication";

export const createTraining = createAsyncThunk(
  "createtraining",
  async (data, { rejectWithValue }) => {
    const response = await fetch("/yota-api/trainings/", {
      method: "POST",
      headers: headerContents(),
      body: JSON.stringify(data),
    });

    try {
      const result = await response.json();
      if (response.data.status === 200) {
        alert("training created sucessfully...");
      }
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const trainingCreate = createSlice({
  name: "trainingCreate",
  initialState: {
    training: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [createTraining.pending]: (state) => {
      state.loading = true;
    },

    [createTraining.fulfilled]: (state, action) => {
      state.loading = false;
      state.training = [action.payload];
    },

    [createTraining.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default trainingCreate.reducer;
