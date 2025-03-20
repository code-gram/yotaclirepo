import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

export const setSelectedTechnology = (technology) => ({
  type: 'SET_TECHNOLOGY',
  payload: technology,
});

export const createTechnology = createAsyncThunk(
  "technology/createTechnology",
  async (technologyPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        AXIOS_BASE_URL + "/technology/addTechnology",
        technologyPayload
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchAllTechnology = createAsyncThunk(
  "technology/fetchAllTechnology",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(AXIOS_BASE_URL + "/technology/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTechnology = createAsyncThunk(
  "technology/updateTechnology",
  async ({id,data}, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        AXIOS_BASE_URL + `/technology/updateTechnology/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
