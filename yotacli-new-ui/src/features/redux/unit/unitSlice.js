import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUnits, deleteUnit ,updateUnit } from "../../redux/unit/unitAction";
const initialState = {
  postedUnit: [],
  deleteUnit:null,
  sortUnits:null,
  updateUnit:null,
  loading: false,
  error: null,
  order: "ASC",
 
};

const unitSlice = createSlice({
  name: "units",
  initialState: {
    units: [],
    loading: false,
    error: null,
    order: "ASC",
  },
  reducers: {
    
    // sortUnits: (state, action) => {
    //   const { column, type } = action.payload;
    //   state.units.sort((a, b) => {
    //     const order = state.order === "ASC" ? 1 : -1;
    //     // Adjust the comparison based on the column and type
    //     if (type === "string") {
    //       return order * (a[column].localeCompare(b[column]));
    //     } else if (type === "number") {
    //       return order * (a[column] - b[column]);
    //     } else {
    //       // Handle other data types if necessary
    //       return 0;
    //     }
    //   });
    //   state.order = state.order === "ASC" ? "DSC" : "ASC";
    // },
    sortUnits: (state, action) => {
      const { column, type } = action.payload;
      state.units.sort((a, b) => {
        const order = state.order === "ASC" ? 1 : -1;
        if (type === "string") {
          // Sort strings
          const valA = a[column].toLowerCase();
          const valB = b[column].toLowerCase();
          if (valA < valB) return -order;
          if (valA > valB) return order;
          return 0;
        } else if (type === "number") {
          // Sort numbers
          return order * (a[column] - b[column]);
        } else {
          // Handle other data types if necessary
          return 0;
        }
      });
      state.order = state.order === "ASC" ? "DSC" : "ASC";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUnits.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchUnits.fulfilled, (state, action) => {
      state.loading = false;
      state.units = action.payload;
    });

    builder.addCase(fetchUnits.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteUnit.fulfilled, (state, action) => {
      const unitIndex = state.units.findIndex((unit) => unit.id === action.payload);
      state.units.splice(unitIndex, 1);
    });
    builder.addCase(updateUnit.fulfilled, (state, action) => {
      const updatedUnit = action.payload;
    const index = state.units.findIndex(unit => unit.id === updatedUnit.id);
      if (index !== -1) {
        state.units[index] = updatedUnit;
      }
    });
  
  },
});
export const { sortUnits } = unitSlice.actions;

export default unitSlice;
