import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { headerContents } from "../../../components/utils/Authentication";

export const UpdateAssociate = createAsyncThunk(
    "UpdateAssociate",
    async (data, { rejectWithValue }) => {
      try {
        debugger;
        console.log("testt==" + data.shortDescription);
        axios
          .put(`/yota-api/associates/${data.id}`, data,{
            headers:headerContents()
          })
          .then((res) => {
            console.log(res.data);
          });
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const associateUpdate = createSlice ({
    name : "associateUpdate",
    initialState : {
        associates : [],
        loading : false,
        error : null,
    },

    extraReducers:{
        [UpdateAssociate.pending] : (state) => {
            state.loading = true;
        },

        [UpdateAssociate.fulfilled]: (state, action) => {
            state.loading = false;
            const {
              arg: { id },
            } = action.meta;
            if (id) {
              state.associates = state.associates.map((item) =>
                item._id === id ? action.payload : item
              );
            }
          },

        [UpdateAssociate.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default associateUpdate.reducer;