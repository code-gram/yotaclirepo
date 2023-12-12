import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router";
import {getAuthToken, headerContents } from "../../../components/utils/Authentication";
const token = getAuthToken();
const headerContent = headerContents();
export const createClient = createAsyncThunk("createClient",
  async (data, { rejectedWithValue }) => {
    const response = await fetch("http://localhost:9090/yota/api/client/", {
      method: "POST",
      headers: headerContent,
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
//update
export const updateClient = createAsyncThunk(
  "updateClient",
  async (data, { rejectWithValue }) => {
    try {
      axios
        .put(`http://localhost:9090/yota/api/client/${data.clientId}`, data, {
          headers:headerContent
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//get
export const fetchClient = createAsyncThunk("client", () => {
  return axios
    .get(`http://localhost:9090/yota/api/clients`,{
      headers: headerContent
    })
    .then((response) => response.data)
    .catch((error) => console.log("ERROR"));
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
      console.log(action.payload);
    },

    [fetchClient.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Update Client Data
    [updateClient.pending]: (state) => {
      state.loading = true;
    },

    [updateClient.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { clientId },
      } = action.meta;
      if (clientId) {
        state.clients = state.clients.map((item) =>
          item._id === clientId ? action.payload : item
        );
      }
    },
    [updateClient.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

//delete
export const deleteClient = createAsyncThunk(
  "deleteClient",

  async (id, { rejectWithValue }) => {
    //const native = useNavigate();
    if (window.confirm("Do you want to remove"))
      try {
        const response = await fetch(`http://localhost:9090/yota/api/client/${id}`, {
          method: "DELETE",
          headers: headerContents()
        }).then((res) => {
          window.location.reload();
          //native(0)
          alert("Removed Succesfully");
        });
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);

        return rejectWithValue(error.response.data);
      }
  }
);

export default clientList.reducer;
