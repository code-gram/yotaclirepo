import { createSlice } from "@reduxjs/toolkit";
import { allQuestion, getAllQuestionsOfTest } from "./questionAction";
import { getQuestionByTestid } from "./questionAction";
import TestQuestions from "../../pages/test/TestQuestions";

const initialState = {
  questions: [],
  testQuestions: [],
  loading: false,
  error: null,
  success: false,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetching all Question by tech id
    builder.addCase(allQuestion.pending, (state) => {
      state.loading = true;
      state.questions = [];
      state.success = false;
      state.error = null;
    });
    builder.addCase(allQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.questions = action.payload;
    });
    builder.addCase(allQuestion.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.questions = [];
    });
  //fetching all question by testid
    builder.addCase(getAllQuestionsOfTest.pending, (state) => {
      state.loading = true;
      state.questions = [];
      state.success = false;
      state.error = null;
    });
    builder.addCase(getAllQuestionsOfTest.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.questions = action.payload;
    });
    builder.addCase(getAllQuestionsOfTest.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.questions = [];
    });

    //fetching question by testid
    builder.addCase(getQuestionByTestid.pending, (state) => {
      state.loading = true;
      state.questions = [];
      state.success = false;
      state.error = null;
    });
    builder.addCase(getQuestionByTestid.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.questions = action.payload;
    });
    builder.addCase(getQuestionByTestid.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.questions = [];
    });
    
  },
});

export default questionsSlice.reducer;
