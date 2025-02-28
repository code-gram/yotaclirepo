import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

//add test
export const addTest = createAsyncThunk(
  "test/addTest",
  async (TestPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        AXIOS_BASE_URL + "/tests/add-test",
        TestPayload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const countQuestion = createAsyncThunk(
  "test/countQuestion",
  async (technologyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(AXIOS_BASE_URL + "/questions/count-details",
        {
          params: {
            techId: technologyId
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const questionUnderTechnologyId = createAsyncThunk(
  "test/questionUnderTechnologyId",
  async (technologyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/questions/get/list/tech`, {
        params: {
          techId: technologyId
        }
      }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//get all test
export const getAllTest = createAsyncThunk(
  "test/getAllTest",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(AXIOS_BASE_URL + "/tests/all-test");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//add question in test
export const addQuestionInTest = createAsyncThunk(
  "test/addQuestionInTest",
  async ({ questionIds, testId }, { rejectWithValue }) => {

    // Convert array to JSON string
    const jsonArray = JSON.stringify(questionIds);

    try {
      const response = await axios.post(
        AXIOS_BASE_URL + "/tests/add-question-in-test",
        jsonArray,
        {
          params: { testId: testId }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//update total question count
export const updateTotalQuestionCount = createAsyncThunk(
  "test/updateTotalQuestionCount",
  async ({ totalQuestionCount, testId }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        AXIOS_BASE_URL + `/tests/total-question-count`,
        null,
        {
          params: {
            testIds: testId,
            totalQuestionCounts: totalQuestionCount
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//add test to training
export const addTestToTrainings = createAsyncThunk(
  "test/addTestToTrainings",
  async ({ testId, trainingId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        AXIOS_BASE_URL + "/training/assign-test-to-training",
        null,
        {
          params: {
            testIds: testId,
            trainingIds: trainingId
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//add test to assign to individual
export const addTestToIndividualAssociate = createAsyncThunk(
  "test/addTestToIndividualAssociate",
  async ({ testId, userId }, { rejectWithValue }) => {
    console.log(testId + " " + userId)
    try {
      const response = await axios.post(
        AXIOS_BASE_URL + "/tests/assign-test-individual-associate",
        null,
        {
          params: {
            testIds: testId,
            userIds: userId
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);