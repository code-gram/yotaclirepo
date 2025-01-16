import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

export const allQuestion = createAsyncThunk(
  "question/allQuestion",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/questions/get/list/tech?techId=${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Fetching all questions from test
export const getAllQuestionsOfTest = createAsyncThunk(
  "question/getAllQuestionsOfTest",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/questions/getTestQuestions?testId=${id}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const questionByCategory = createAsyncThunk(
  "question/questionByCategory",
  async ({catId,techId},{ rejectWithValue }) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/questions/get/all/cat?catId=${catId}&techId=${techId}`
      );
     
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteQuestion= createAsyncThunk(
  "/questions/deleteQuestion",
  async ({quesId },{ rejectWithValue}) => {
    try {
      const response = await axios.delete(
        AXIOS_BASE_URL + `/questions/${quesId}`,
      );
      return response.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getQuestionByTestid= createAsyncThunk(
  "/questions/getQuestionByTestid",
  async ({id,email},{ rejectWithValue}) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/questions/questionset/${id}?email=${email}`,
      );
    
      return response.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);