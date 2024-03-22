import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const approveTraining = createAsyncThunk(
  "approveTraining/approveTraining",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      const response = await axios.get(`/yota-api/users/trainer`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const approveTrainingStatus = createAsyncThunk(
  "approveTraining/approveTraining",
  async (trainingRequest, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      const response = await axios.put(
        `/yota-api/trainings/updateActualStartAndEndDate`,
        trainingRequest,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getTrainingStatus = createAsyncThunk(
  "approveTraining/approveTraining",
  async (trainingRequest, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      const response = await axios.put(
        `/yota-api/trainings/updateTrainingStatus`,
        trainingRequest,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
