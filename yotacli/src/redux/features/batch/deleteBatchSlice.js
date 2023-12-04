import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthToken } from "../../../components/utils/Authentication";

export const batchDelete = createAsyncThunk("deletebatch", async (id, { rejectWithValue }) => {
    if (window.confirm("Do you want to remove"))
        try {
            const token = getAuthToken();
            const response = await fetch(`/yota-api/batches/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                }
            ).then((response) => {
                alert("Removed Succesfully");
                window.location.reload();
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
});

export const deleteBatch = createSlice({

    name: "deletebatch",
    initialState: {
        batch: [],
        loading: false,
        error: null,
    },

    extraReducers: {

        [batchDelete.pending]: (state) => {
            state.loading = true;
        },

        [batchDelete.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {

                state.batch = state.batch.filter((ele) => ele.id !== id);
            }

        },

        [batchDelete.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },


});

export default deleteBatch.reducer;