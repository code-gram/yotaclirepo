import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create Technology by pragati
export const createTech = createAsyncThunk(
  "createtech",
  async (data, { rejectedWithValue }) => {
    console.log("Create Tech: ", data);
    const response = await fetch(
      "http://localhost:9090/yota/api/technologies/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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

//update technology by pragati

export const UpdateTech = createAsyncThunk(
  "UpdateTech",
  async (data, { rejectWithValue }) => {
    try {
      debugger;
      console.log("testt==" + data.shortDescription);
      axios
        .put(`http://localhost:9090/yota/api/technologies/${data.id}`, data)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//get
export const fetchTechnology = createAsyncThunk("technology", async () => {
  return axios
    .get(`http://localhost:9090/yota/api/technologies/`)
    .then((response) => response.data.map((technology) => technology));
});

//delete tech by pragati
export const deleteTechnology = createAsyncThunk(
  "deleteAssociate",
  async (id, { rejectWithValue }) => {
    if (window.confirm("Do you want to remove"))
      try {
        const response = await fetch(
          `http://localhost:9090/yota/api/technologies/${id}`,
          {
            method: "DELETE",
          }
        ).then((res) => {
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

// Get Test Number API
export const fetchTechnologyTestNumber = createAsyncThunk(
  "technologyTestNumber",
  async () => {
    return axios
      .get(`http://localhost:9090/yota/api/technologies/tests`)
      .then((response) => response.data);
  }
);

// Get Test Deatils of Technology API
export const fetchTechnologyTestDetails = createAsyncThunk(
  "fetchTechnologyTestDetails",
  async (name) => {
    return axios
      .get(`http://localhost:9090/yota/api/technologies/tests/${name}`)
      .then((response) => response.data);
  }
);

// --------------------------------------------------------------------------------------
export const techCreate = createSlice({
  name: "techCreate",
  initialState: {
    technologies: [],
    searchTech: [],
    testNumberArray: [],
    testDetailsArray: [],
    loading: false,
    error: null,
  },

  reducers: {
    handleSearchTech: (state, action) => {
      state.searchTech = [];
      state.searchTech.push(action.payload);
    },
  },

  extraReducers: {
    // create
    [createTech.pending]: (state) => {
      state.loading = true;
    },

    [createTech.fulfilled]: (state, action) => {
      state.loading = false;
      state.technology = [action.payload];
    },

    [createTech.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //get
    [fetchTechnology.pending]: (state) => {
      state.loading = true;
      // state.searchError = false;
    },

    [fetchTechnology.fulfilled]: (state, action) => {
      state.loading = false;
      // state.searchError = false;
      state.technologies = action.payload;
      state.searchTech = action.payload;
    },

    [fetchTechnology.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //updated Pragati

    [UpdateTech.pending]: (state) => {
      state.loading = true;
    },
    [UpdateTech.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.technologies = state.technologies.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [UpdateTech.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteTechnology.pending]: (state) => {
      state.loading = true;
    },
    [deleteTechnology.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.associate = state.associate.filter(
          (associate) => associate.id !== id
        );
      }
    },

    [deleteTechnology.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    //get Test Number
    [fetchTechnologyTestNumber.pending]: (state) => {
      state.loading = true;
      // state.searchError = false;
      console.log("in Create Slice.js", state.testNumberArray);
    },

    [fetchTechnologyTestNumber.fulfilled]: (state, action) => {
      state.loading = false;
      // state.searchError = false;
      state.testNumberArray = [action.payload];
      // state.searchTech = action.payload;
      console.log("in Create Slice.js", state.testNumberArray);
    },

    [fetchTechnologyTestNumber.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //get Test Details
    [fetchTechnologyTestDetails.pending]: (state) => {
      state.loading = true;
      // state.searchError = false;
    },

    [fetchTechnologyTestDetails.fulfilled]: (state, action) => {
      state.loading = false;
      // state.searchError = false;
      state.testDetailsArray = [action.payload];
      // state.searchTech = action.payload;
      console.log("in Create Slice.js", state.testDetailsArray);
    },

    [fetchTechnologyTestDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { handleSearchTech } = techCreate.actions;
export default techCreate.reducer;
