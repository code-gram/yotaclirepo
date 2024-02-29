import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const backendURL = "http://localhost:8080";

export const registerUser = createAsyncThunk(
  "security/registeruser",
  async (
    { username, fullName, password, confirmPassword },
    { rejectWithValue }
  ) => {
    try {
      debugger;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${backendURL}/yota-api/users/register`,
        { username, fullName, password, confirmPassword },
        config
      );
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "security/loginuser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // debugger;
      const { data } = await axios.post(
        `${backendURL}/yota-api/users/authenticate`,
        { username, password },
        config
      );
      console.log("loginUser->data", data);
      localStorage.setItem("jwtToken", data.authToken);

      return data;
    } catch (error) {
      if (error) {
        console.log(error.response.data);
        toast.error(error.response.data, {
          position:"top-right",
        });
        return rejectWithValue(error.response.data);
      }
    }
  }
);
