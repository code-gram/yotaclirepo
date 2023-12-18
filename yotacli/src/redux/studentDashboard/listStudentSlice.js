import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken } from "../../components/utils/Authentication";

const fetchstudent = createAsyncThunk("student", () => {
    const token = getAuthToken();
    return axios
        .get(`http://localhost:9090/yota/api/associates/testlink/1`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }
        )
        .then((response) => response.data)
});
const studenttestlink = createSlice({
    name: "studenttestlink",
    initialState: {
        students: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [fetchstudent.pending]: (state) => {
            state.loading = true;
        },
       
        [fetchstudent.fulfilled]: (state, action) => {
            console.log("----------TEST----------------", action.payload)
            state.loading = false;
            state.students = action.payload;
        },
        [fetchstudent.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    },
});
export default studenttestlink.reducer;
export { fetchstudent };