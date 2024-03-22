import { createSlice } from "@reduxjs/toolkit";
import { ChangeTrainingStatus } from "../../../../components/training-management/training-model/ChangeTrainingStatus";
import { getTrainingStatus } from "./approveTrainingAction";

const changeTrainingStatus = createSlice({
  name: "changeTrainingStatus",
  initialState: {
    trainingStatus: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrainingStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.trainingStatus = action.payload;
      state.error = null;
    });
    builder.addCase(getTrainingStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    builder.addCase(getTrainingStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default changeTrainingStatus.reducer;
