import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuthToken } from "../../../components/utils/Authentication";

export const registerAssociate = createAsyncThunk("registerassociate", async (data, { rejectedWithValue }) => {
    const token = getAuthToken();
    const response = await fetch('/yota-api/associates/register/', {
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
        console.log(result);

        return result;

    }
    catch (error) {
        return rejectedWithValue(error);
    }


});



export const associateRegister = createSlice({
    name: "associateRegister",
    initialState: {
        associate: [],
        loading: false,
        error: null,
    },

    extraReducers: {
        [registerAssociate.pending]: (state) => {
            state.loading = true;
        },

        [registerAssociate.fulfilled]: (state, action) => {
            state.loading = false;
            state.associate = action.payload;
        },

        [registerAssociate.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default associateRegister.reducer;