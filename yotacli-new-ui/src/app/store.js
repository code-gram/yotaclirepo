import { configureStore } from "@reduxjs/toolkit";
import securityReducer from "../features/security/securitySlice";
import { securityApi } from "../app/services/securtiy/securtiyService"
import unitSlice from "../features/redux/unit/unitSlice"
export const store = configureStore({
  reducer: {
    security: securityReducer,
    unit: unitSlice.reducer, 
    [securityApi.reducerPath]: securityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(securityApi.middleware),
});


