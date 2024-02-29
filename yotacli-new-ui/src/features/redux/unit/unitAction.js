import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//send data to database
export const createUnit = createAsyncThunk(
  "unit/CreateUnitForm",
  async (formData, { rejectWithValue }) => {
    const Token = localStorage.getItem("jwtToken");

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      };
      await axios.post(`/yota-api/units/`, formData, config);
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
// get data from backend
export const postUnits = createAsyncThunk(
  "units/postunits",
  async ({ newUnit }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };

      const response = await axios.post(`/yota-api/units/`, newUnit, config);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//shown to frontend
export const fetchUnits = createAsyncThunk(
  "units/fetchUnits",

  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      const response = await axios.get(`/yota-api/units/`, config);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//delete
export const deleteUnit = createAsyncThunk(
  "unit/DeleteUnit",
  async (unitId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      await axios.delete(`/yota-api/units/${unitId}`, config);
      return unitId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//update
export const updateUnit = createAsyncThunk(
  "unit/updateUnit",
  async ({ unitId, updatedUnit }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      const response = await axios.put(`/yota-api/units/${unitId}`, updatedUnit, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);