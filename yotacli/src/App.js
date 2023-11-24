import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Route, Routes } from "react-router-dom";
import StudentDashboard from "./student/StudentDashboard";
import Analytics from "./student/pages/Analytics";
import TestLinks from "./student/pages/TestLinks";
import Training from "./student/pages/Training";
import TrainingSummary from "./student/pages/TrainingSummary";
import { Signout } from "./student/pages/Signout";
import StdDashboard from "./student/pages/Dashboard";
import UserLogin from "./components/user/UserLogin";
import UserRegistration from "./components/user/UserRegistration";
import ForgotPassword from "./components/user/ForgotPassword";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Associate from "./components/user/Associate";
import Admin from "./components/user/Admin";
import TraineeDashboardLayout from "./components/trainee/dashboard-layout/TraineeDashboardLayout";
import Sidebar from "./components/trainer/dashboard/common/Sidebar";
import TrainerDashboard from "./components/trainer/dashboard/common/TrainerDashboard";
import "./App.css"


function App() {
  return (
          <div className="Main"> 
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route
            path="/trainer/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
            />
          <Route
            path="/associate/*"
            element={
              <ProtectedRoute>
                {/* <Associate /> */}
                <TraineeDashboardLayout />
              </ProtectedRoute>
            }
            />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
            />

          <Route path="/student/*" element={<StudentDashboard />}>
            <Route path="analytics" element={<Analytics />} />
            <Route path="testlinks" element={<TestLinks />} />
            <Route path="training" element={<Training />} />
            <Route path="trainingsummary" element={<TrainingSummary />} />
            <Route path="signout" element={<Signout />} />
          </Route>
          <Route path="/newtrainer/*" element={<TrainerDashboard />}>
            <Route path="sidebar" element={<Sidebar />} />

          </Route>
        </Routes>
      </Provider>
    </div>
            </div>
  );
}

export default App;
