
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuthToken } from "../../../components/utils/Authentication";

export const deleteAssociate = createAsyncThunk("deleteAssociate", async (id, { rejectWithValue }) => {
    if (window.confirm("Do you want to remove associate?"))
        try {
            const token = getAuthToken();
            const response = await fetch(`/yota-api/associates/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                }
            ).then(() => {
                alert("Removed Successfully..!");
                window.location.reload(false);
                        
            });
            const result = await response.json();

            return result;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
})


export const associateDelete = createSlice({
    name: "associateDelete",
    initialState: {
        associate: [],
        loading: false,
        error: null,
    },
    extraReducer: {
        [deleteAssociate.pending]: (state) => {
            state.loading = true;
        },
        [deleteAssociate.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.associate = state.associate.filter((associate) => associate.id !== id);
            }
        },
        [deleteAssociate.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    }
});

export default associateDelete.reducer;