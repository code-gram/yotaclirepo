
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken } from "../../../components/utils/Authentication";

export const createBatch = createAsyncThunk("createbatch", async (data, { rejectWithValue }) => {
    const token = getAuthToken();
    console.log("Token::::>" + token)
    const response = await fetch("/yota-api/batches/", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(data)
    })

    try {
        const result = await response.json();
        if(response.data.status===200){
            alert("Batch created sucessfully...")
        }
        return result;
    }
    catch (error) {
        return rejectWithValue(error);
    }
})


export const batchCreate = createSlice({

    name: "batchCreate",
    initialState: {
        batch: [],
        loading: false,
        error: null,
    },

    extraReducers: {

        [createBatch.pending]: (state) => {
            state.loading = true;
        },

        [createBatch.fulfilled]: (state, action) => {
            state.loading = false;
            state.batch = [action.payload];
        },

        [createBatch.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


    },


});
export default batchCreate.reducer;