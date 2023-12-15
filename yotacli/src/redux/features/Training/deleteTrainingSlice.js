import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { headerContents } from "../../../components/utils/Authentication";

export const trainingDelete = createAsyncThunk(
  "deletetraining",
  async (id, { rejectWithValue }) => {
    if (window.confirm("Do you want to remove"))
      try {
        const response = await fetch(`/yota-api/trainings/${id}`, {
          method: "DELETE",
          headers: headerContents(),
        }).then((response) => {
          alert("Removed Succesfully");
          window.location.reload();
        });
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data);
      }
  }
);

export const deletetraining = createSlice({
  name: "deletetraining",
  initialState: {
    training: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [trainingDelete.pending]: (state) => {
      state.loading = true;
    },

    [trainingDelete.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.training = state.training.filter((ele) => ele.id !== id);
      }
    },

    [trainingDelete.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default deletetraining.reducer;
