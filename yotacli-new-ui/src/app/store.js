import { configureStore } from "@reduxjs/toolkit";
import { securityApi } from "../app/services/securtiy/securtiyService";
import securityReducer from "../features/security/securitySlice";
import technologyReducer from "../features/redux/technology/technologySlice";
import testReducer from "../features/redux/test/testSlice";
import trainingsReducer from "../features/redux/training/trainingSlice";
import clientReducer from "../features/redux/client/clientSlice";
import unitSlice from "../features/redux/unit/unitSlice";
import associateSlice from "../features/redux/associate/associateSlice";
// import questionSlice from "../features/redux/questions/questionSlice";
import trainingReducer from "../features/redux/training/trainingSlice";
import competencyReducer from "../features/redux/competency/competnencySlice";
import trainingTypeReducer from "../features/redux/training/training-type/trainingTypeSlice";
import testsReducer from "../features/redux/test/TestListSlice";
import questionSlices from "../features/redux/questions/questionSlices";
import associateAssignedTests from "../features/redux/associateAssignedTests/associateAssignedTestsSlice";
import { clientApi } from "./services/securtiy/clientService";
import approveTrainingSlice from "../features/redux/training/training-status/approveTrainingSlice";
import approveTrainingStatusSlice from "../features/redux/training/training-status/approveTrainingStatusSlice";
import changeTrainingStatusSlice from "../features/redux/training/training-status/changeTrainingStatusSlice";
export const store = configureStore({
  reducer: {
    security: securityReducer,
    technology: technologyReducer,
    test: testReducer,
    tests: testsReducer,
    trainings: trainingsReducer,
    client: clientReducer,
    unit: unitSlice.reducer,
    associates: associateSlice,
    // questions: questionSlice.reducer,
    questions: questionSlices.reducer,
    competency: competencyReducer,
    trainigType: trainingTypeReducer,
    training: trainingReducer,
    associate: associateSlice,
    associateAssignedTests,
    fetchTrainer: approveTrainingSlice,
    trainingStatus: approveTrainingStatusSlice,
    changeTrainingStatus: changeTrainingStatusSlice,
    [securityApi.reducerPath]: securityApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(securityApi.middleware, clientApi.middleware),
});
