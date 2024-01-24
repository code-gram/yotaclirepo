import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterUser from "../components/user/RegisterUser.jsx";
import { LoginUser } from "../components/user/LoginUser.jsx";
import MainContent from "../components/common/dashboard-layout/mainContent";
import { AddQuestion } from "../components/question-management/AddQuestion.jsx";
import { CreateTraining } from "../components/training/CreateTraining.jsx";
import { TrainingList } from "../components/training/TrainingList.jsx";
import  ListClient  from "../components/client-management/ListClient.jsx";
export default function AppRoutes() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<LoginUser setLoggedIn={setLoggedIn} />} />
      <Route path="/" element={<LoginUser setLoggedIn={setLoggedIn} />} />
      <Route path="/" element={<RegisterUser />} />
      <Route path="/dashboard" element={<MainContent />} />

      <Route
        path="/test-createTest"
        element={
          <MainContent>
            <AddQuestion />
          </MainContent>
        }
      />
      <Route
        path="/requestTraining"
        element={
          <MainContent>
            <CreateTraining />
          </MainContent>
        }
      />
      <Route
        path="/trainingList"
        element={
          <MainContent>
            <TrainingList />
          </MainContent>
        }
      />
      <Route
        path="/client-management-ListClient"
        element={
          <MainContent>
            <ListClient/>
          </MainContent>
        }
      />
       
    </Routes>
  );
}
