import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { store } from "./app/store";
import Dashboard from "./components/dashboard/Dashboard";
import TraineeDashboardLayout from "./components/trainee/dashboard-layout/TraineeDashboardLayout";
import TrainerDashboardLayout from "./components/trainer/dashboard/common/TrainerDashboardLayout";
import Admin from "./components/user/Admin";
import ForgotPassword from "./components/user/ForgotPassword";
import UserLogin from "./components/user/UserLogin";
import UserRegistration from "./components/user/UserRegistration";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import StudentDashboard from "./student/StudentDashboard";
import Analytics from "./student/pages/Analytics";
import { Signout } from "./student/pages/Signout";
import TestLinks from "./student/pages/TestLinks";
import Training from "./student/pages/Training";
import TrainingSummary from "./student/pages/TrainingSummary";

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
           
              <Route
              path="/newTrainer/*"
              element={
                <ProtectedRoute>
                  <TrainerDashboardLayout/>
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
            
          </Routes>
        </Provider>
      </div>
    </div>
  );
}

export default App;
