import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headerContents } from "../../../components/utils/Authentication";

export const fetchClientQuestion = createAsyncThunk("clientQuestion",async (clientId) => {
    return axios
      .get(`/yota-api/client-questions/${clientId}`,{
        headers:headerContents()
      })
      .then(response =>  response.data)
      .catch(error=>console.log("ERROR"))
  });
  
  export const clientQuestionsList = createSlice({
    name: "clientList",
    initialState: {
      clientQuestions: [],
      loading: false,
      error: null,
    },
    extraReducers: {
      [fetchClientQuestion.pending]: (state) => {
        state.loading = true;
      },
  
      [fetchClientQuestion.fulfilled]: (state, action) => {
        state.loading = false;
        state.clientQuestions = action.payload;
        console.log("slice"+action.payload)
      },
  
      [fetchClientQuestion.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  export default clientQuestionsList.reducer;