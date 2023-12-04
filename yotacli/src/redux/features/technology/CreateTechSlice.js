import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headerContents} from "../../../components/utils/Authentication";

const headerContent = headerContents();
export const createTech = createAsyncThunk(
  "createtech",
  async (data, { rejectedWithValue }) => {
    console.log("Create Tech: ", data);
    const response = await fetch(
      "/yota-api/technologies/",
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

export const UpdateTech = createAsyncThunk(
  "UpdateTech",
  async (data, { rejectWithValue }) => {
    try {
      debugger;
      console.log("testt==" + data.shortDescription);
      axios
        .put(`/yota-api/technologies/${data.id}`, data, {
          headers: headerContent,
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchTechnology = createAsyncThunk("technology", async () => {
  return axios
    .get(`/yota-api/technologies/`,
      {
        headers: headerContent,
      }
    )
    .then((response) => response.data.map((technology) => technology));
});

export const deleteTechnology = createAsyncThunk(
  "deleteAssociate",
  async (id, { rejectWithValue }) => {
    if (window.confirm("Do you want to remove"))
      try {
        const response = await fetch(
          `/yota-api/technologies/${id}`,
          {
            method: "DELETE",
            headers: headerContent,
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

export const fetchTechnologyTestNumber = createAsyncThunk(
  "technologyTestNumber",
  async () => {
    return axios
      .get(`http://localhost:9090/yota/api/technologies/tests`, {
        headers: headerContent,
      })
      .then((response) => response.data);
  }
);

export const fetchTechnologyTestDetails = createAsyncThunk(
  "fetchTechnologyTestDetails",
  async (name) => {
    return axios
      .get(`http://localhost:9090/yota/api/technologies/tests/${name}`, {
        headers: headerContent,
      })
      .then((response) => response.data);
  }
);

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

    [fetchTechnology.pending]: (state) => {
      state.loading = true;
    },

    [fetchTechnology.fulfilled]: (state, action) => {
      state.loading = false;
      state.technologies = action.payload;
      state.searchTech = action.payload;
    },

    [fetchTechnology.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },


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
    [fetchTechnologyTestNumber.pending]: (state) => {
      state.loading = true;
      console.log("in Create Slice.js", state.testNumberArray);
    },

    [fetchTechnologyTestNumber.fulfilled]: (state, action) => {
      state.loading = false;
      state.testNumberArray = [action.payload];
      console.log("in Create Slice.js", state.testNumberArray);
    },

    [fetchTechnologyTestNumber.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchTechnologyTestDetails.pending]: (state) => {
      state.loading = true;
    },

    [fetchTechnologyTestDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.testDetailsArray = [action.payload];
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
