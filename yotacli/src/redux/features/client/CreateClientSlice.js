import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createClient = createAsyncThunk(
    "createClient",
    async (data, { rejectedWithValue }) => {
      console.log("Create createClient: ", data);
      const response = await fetch(
        "http://localhost:9090/yota/api/client/",
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
  //get
export const fetchClient = createAsyncThunk("client",() => {
  return axios
    .get(`http://localhost:9090/yota/api/clients`)
    .then(response =>  response.data)
    .catch(error=>console.log("ERROR"))
});

export const clientList = createSlice({
  name: "clientList",
  initialState: {
    clients: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchClient.pending]: (state) => {
      state.loading = true;
    },

    [fetchClient.fulfilled]: (state, action) => {
      state.loading = false;
      state.clients = action.payload;
      console.log(action.payload)
    },

    [fetchClient.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default clientList.reducer;