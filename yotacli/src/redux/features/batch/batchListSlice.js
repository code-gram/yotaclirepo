import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headerContents } from "../../../components/utils/Authentication";

export const fetchBatch = createAsyncThunk("batch", () => {
  return axios.get(`/yota-api/batches/`,
      {
        headers:headerContents()
      }
    )
    .then((response) => response.data.map((batch) => batch));
});

export const batchList = createSlice({
  name: "batchList",
  initialState: {
    batches: [],
    searchBatch:[],
    testNumberArray:[],
    testDetailsArray:[],
    loading: false,
    error: null,
  },
  reducers: {
    handleSearchBatch: (state, action) => {
        state.searchBatch = [];
        state.searchBatch.push(action.payload)
    },
  },
  extraReducers: {
    [fetchBatch.pending]: (state) => {
      state.loading = true;
    },

    [fetchBatch.fulfilled]: (state, action) => {
      state.loading = false;
      state.batches = action.payload;
      state.searchBatch=[];
      state.searchBatch.push(action.payload);
      state.testDetailsArray = [action.payload];
      state.testNumberArray = [action.payload];
    },

    [fetchBatch.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { handleSearchBatch } = batchList.actions;
export default batchList.reducer;
