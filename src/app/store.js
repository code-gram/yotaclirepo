import{configureStore} from "@reduxjs/toolkit";
import listStudentSlice from "../Redux/studentDashboard/listStudentSlice";
import NotificationListSlice from "../Redux/studentDashboard/NotificationListSlice";


 const store =configureStore({
    reducer:{
        studenttestlink : listStudentSlice,
        notification: NotificationListSlice
    },
});

export default store;