import{configureStore} from "@reduxjs/toolkit";
import listStudentSlice from "../Redux/studentDashboard/listStudentSlice";


 const store =configureStore({
    reducer:{
        studenttestlink : listStudentSlice
    },
});

export default store;