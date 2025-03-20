import { createSlice } from "@reduxjs/toolkit";
import { createTechnology, fetchAllTechnology, updateTechnology } from "./technologyAction";

const initialState = {
    technologies: [],
    selectedTechnology:'',
    loading: false,
    error: null,
    success: false,
}

const technologySlice = createSlice({
    name: 'technologies',
    initialState,
    reducers: {
        setSelectedTechnology: (state, action) => {
            state.selectedTechnology = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createTechnology.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        });
        builder.addCase(createTechnology.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.technologies.push(action.payload);
        });
        builder.addCase(createTechnology.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        });
        builder.addCase(fetchAllTechnology.pending, (state) => {
            state.loading = true;
            state.success = false;
        });
        builder.addCase(fetchAllTechnology.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.technologies = action.payload;
        });
        builder.addCase(fetchAllTechnology.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        });

        builder.addCase(updateTechnology.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        });
        builder.addCase(updateTechnology.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.technologies.push(action.payload);
        });
        builder.addCase(updateTechnology.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        });
    }
})

export const { setSelectedTechnology } = technologySlice.actions;

export default technologySlice.reducer;