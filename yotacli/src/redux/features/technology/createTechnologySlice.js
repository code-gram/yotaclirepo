import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken } from "../../../components/utils/Authentication";

export const fetchTechnology = createAsyncThunk("technology", async () => {
  const token = getAuthToken();
  return await axios.get(`/yota-api/technologies/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": token
    }
  }).then((response) => response.data.map((technology) => technology));
});

export const techList = createSlice({
  name: "techList",
  initialState: {
    technologies: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchTechnology.pending]: (state) => {
      state.loading = true;
    },

    [fetchTechnology.fulfilled]: (state, action) => {
      state.loading = false;
      state.technologies = action.payload;
    },

    [fetchTechnology.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default techList.reducer;
