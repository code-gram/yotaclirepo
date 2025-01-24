import { createSlice } from "@reduxjs/toolkit";
import { addQuestionInTest, addTest, countQuestion, getAllTest, questionUnderTechnologyId, updateTotalQuestionCount, addTestToTrainings, countAssociateToAddedTraining, addTestToIndividualAssociate } from "./testAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  tests: [],
  question: [],
  testDetails: {},
  loading: false,
  error: null,
  success: false,
  questionCount: 0,
  easyCount: 0,
  mediumCount: 0,
  hardCount: 0,
  message: "",
  testList: [],
  testIndividualMsg:"",
  testIndividual:[]
};

<div>
  <ToastContainer/>
</div>

const testSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTest.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(addTest.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.testDetails = action.payload;
    });
    builder.addCase(addTest.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.testDetails = {};
    });

    builder.addCase(countQuestion.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(countQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.questionCount = action.payload.questionCount;
      state.easyCount = action.payload.easyCount;
      state.mediumCount = action.payload.mediumCount;
      state.hardCount = action.payload.hardCount;
    });
    builder.addCase(countQuestion.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.tests = [];
    });

    //question by technology
    builder.addCase(questionUnderTechnologyId.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(questionUnderTechnologyId.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.question = action.payload;
    });
    builder.addCase(questionUnderTechnologyId.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.question = [];
    });

    //get all test
    builder.addCase(getAllTest.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(getAllTest.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.testList = action.payload;
    });
    builder.addCase(getAllTest.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.testList = [];
    });

    //add question in test
    builder.addCase(addQuestionInTest.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(addQuestionInTest.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.tests = action.payload;

      // Check the status code and show an alert if needed
      if (action.payload.statusCode === 201) {
        toast.success(action.payload.data);
      }
    });
    builder.addCase(addQuestionInTest.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.tests = [];
    });

    //update total question count
    builder.addCase(updateTotalQuestionCount.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(updateTotalQuestionCount.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.tests = action.payload;
    });
    builder.addCase(updateTotalQuestionCount.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.tests = [];
    });


    //add test to training
    builder.addCase(addTestToTrainings.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(addTestToTrainings.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.tests = action.payload;

      if (action.payload.statusCode === 201) {
        state.message = action.payload.data;
      }

    });
    builder.addCase(addTestToTrainings.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.tests = [];
      console.log(action.payload)

      if (action.payload.status === 'BAD_REQUEST') {
        state.message = action.payload.message;
      }
    });

     //add test to individual associate
     builder.addCase(addTestToIndividualAssociate.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(addTestToIndividualAssociate.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.testIndividual = action.payload;
      console.log(action.payload)

      if (action.payload === 'Test successfully assigned to individual associate.') {
        state.testIndividualMsg = action.payload;
      }

    });
    builder.addCase(addTestToIndividualAssociate.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.testIndividual = [];
      console.log(action.payload.message);

      if (action.payload.status === 'BAD_REQUEST') {
        state.testIndividualMsg = action.payload.message;
      }
    });
  },
});

export default testSlice.reducer;
