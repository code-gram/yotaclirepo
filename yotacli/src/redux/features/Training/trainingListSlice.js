import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headerContents } from "../../../components/utils/Authentication";

export const fetchTraining = createAsyncThunk("training", async () => {
  const response = await axios.get(`/yota-api/trainings/`, {
    headers: headerContents(),
  });
  return response.data.map((training) => training);
});

export const trainingList = createSlice({
  name: "trainingList",
  initialState: {
    trainings: [],
    searchBraining: [],
    testNumberArray: [],
    testDetailsArray: [],
    loading: false,
    error: null,
  },
  reducers: {
    handleSearchtraining: (state, action) => {
      state.searchBraining = [];
      state.searchBraining.push(action.payload);
    },
  },
  extraReducers: {
    [fetchTraining.pending]: (state) => {
      state.loading = true;
    },

    [fetchTraining.fulfilled]: (state, action) => {
      state.loading = false;
      state.trainings = action.payload;
      state.searchtraining = [];
      state.searchtraining.push(action.payload);
      state.testDetailsArray = [action.payload];
      state.testNumberArray = [action.payload];
    },

    [fetchTraining.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { handleSearchtraining } = trainingList.actions;
export default trainingList.reducer;
