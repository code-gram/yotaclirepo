import { createSlice } from "@reduxjs/toolkit";
import {
  approveTrainingStatus,
  getTrainingStatus,
} from "./approveTrainingAction";

const approveTrainingStatusSlice = createSlice({
  name: "trainingStatus",
  initialState: {
    approveDate: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(approveTrainingStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.approveDate = action.payload;
      state.error = null;
    });
    builder.addCase(approveTrainingStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    builder.addCase(approveTrainingStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default approveTrainingStatusSlice.reducer;
