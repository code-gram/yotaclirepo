import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken, headerContents } from "../../../components/utils/Authentication";

const headerContent = headerContents();
export const createAssociate = createAsyncThunk(
  "createAssociate",
  async (data, { rejectedWithValue }) => {
    console.log("Create Associate: ", data);
    const response = await fetch(
      "/yota-api/associates/",
      {
        method: "POST",
        headers: headerContent,
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const UpdateAsso = createAsyncThunk(
  "UpdateAsso",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      alert(id);

      axios
        .put(`/yota-api/associates/`, data,{
          headers: headerContent
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAssociate = createAsyncThunk("associate", () => {
  return axios
    .get(`/yota-api/associates/`,{
      headers: headerContent
    })
    .then((response) => response.data.map((associate) => associate));
});

export const fetchAssociateTestNumber = createAsyncThunk("associateTestNumber", async () => {
  return axios
    .get(`/yota-api/associates/tests`,{
      headers:headerContent
    })
    .then((response) => response.data);
});

export const fetchAssociateTestDetails = createAsyncThunk("fetchAssociateTestDetails", async (name) => {
  return axios
    .get(`/yota-api/associates/tests/${name}`,{
      headers:headerContent
    })
    .then((response) => response.data);
});

export const associateList = createSlice({
  name: "associateList",
  initialState: {
    associates: [],
    searchAssociate: [],
    testNumberArray: [],
    testDetailsArray:[],
    loading: false,
    error: null,
  },

  reducers: {
    handleSearchAsso: (state, action) => {
      state.searchAssociate = [];
      state.searchAssociate.push(action.payload)
    },
  },

  extraReducers: {

    [createAssociate.pending]: (state) => {
      state.loading = true;
    },

    [createAssociate.fulfilled]: (state, action) => {
      state.loading = false;
      state.associate = [action.payload];
    },

    [createAssociate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchAssociate.pending]: (state) => {
      state.loading = true;
    },

    [fetchAssociate.fulfilled]: (state, action) => {
      state.loading = false;
      state.associates = action.payload;
    },

    [fetchAssociate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchAssociate.pending]: (state) => {
      state.loading = true;
    },

    [fetchAssociate.fulfilled]: (state, action) => {
      state.loading = false;
      state.associates = action.payload;
      state.searchAssociate = action.payload;
    },

    [fetchAssociate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [UpdateAsso.pending]: (state) => {
      state.loading = true;
    },
    [UpdateAsso.fulfilled]: (state, action) => {
      state.loading = false;
      state.batch = state.batch.map((ele) =>
        ele.name === action.payload.name ? action.payload : ele
      );
    },
    [UpdateAsso.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  
    [fetchAssociateTestNumber.pending]: (state) => {
      state.loading = true;
      console.log("in List Associate Slice.js", state.testNumberArray);
    },

    [fetchAssociateTestNumber.fulfilled]: (state, action) => {
      state.loading = false;
      state.testNumberArray = [action.payload];
      console.log("in List Associate Slice.js",state.testNumberArray);
    },

    [fetchAssociateTestNumber.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchAssociateTestDetails.pending]: (state) => {
      state.loading = true;
    },

    [fetchAssociateTestDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.testDetailsArray = [action.payload];
      console.log("in List Associate Slice.js",state.testDetailsArray);
    },

    [fetchAssociateTestDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export const { handleSearchAsso } = associateList.actions;
export default associateList.reducer;