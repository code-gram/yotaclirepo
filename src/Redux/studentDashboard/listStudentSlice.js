import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const fetchstudent=createAsyncThunk("student",() =>{
    return axios
    .get (`http://localhost:9090/yota/api/associates/testlink/1`)
    .then((response)=>response.data)
    //.then(x =>console.log("TESTLINK---",x))
} );
 const studenttestlink=createSlice({
    name:"studenttestlink",
    initialState:{
        students:[],
        loading:false,  
        error:null,
    },
    extraReducers :{
        [fetchstudent.pending]:(state)=>{
            state.loading=true;
        },
        // [fetchstudent.fullfilled]:(state,action)=>{
        //     console.log(action.payload)
        //     state.loading=fasle;
        //     state.students=action.payload;
        // },
        [fetchstudent.fulfilled]: (state, action) => {
            console.log("----------TEST----------------",action.payload)
            state.loading = false;
            state.students = action.payload;
        },
        [fetchstudent.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },

    },
});
export default studenttestlink.reducer;
export {fetchstudent};