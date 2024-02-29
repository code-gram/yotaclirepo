import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginUser } from "../components/user/LoginUser.jsx";
import MainContent from "../components/common/dashboard-layout/mainContent";
import  Dashboard  from "../components/dashboard/dashboard.js";
import { AddQuestion } from "../components/question-management/add-questions/AddQuestion.jsx";
import { CreateTraining } from "../components/training-management/CreateTraining.jsx";
import ListUnit from "../components/unit-management/list-unit/ListUnit.jsx";
import ListTechnology from "../components/technology-management/list-technology/listTechnology.jsx";
import { TrainingList } from "../components/training-management/TrainingList.jsx";
import { ClientForm } from "../components/client-management/add-client/ClientForm.jsx";
import { TechnologyForm } from "../components/technology-management/add-technology/TechnologyForm.jsx";
import { AddAssociate } from "../components/associate-management/add-associate/AddAssociate.jsx";
import { ListAssociateForm } from "../components/associate-management/list-associate/listassociateform.jsx";
import { ListQuestions } from "../components/question-management/list-questions/ListQuestions.jsx";
import ListClient from "../components/client-management/list-client/ListClient.jsx";
import CreateUnitForm from "../components/unit-management/add-unit/CreateUnitForm.jsx";
export default function AppRoutes() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<LoginUser setLoggedIn={setLoggedIn} />} />
      <Route path="/" element={<LoginUser setLoggedIn={setLoggedIn} />} />

      <Route
        path="/dashboard"
        element={
          <MainContent>
            <Dashboard />
          </MainContent>
        }
      />

      <Route
        path="/test-createTest"
        element={
          <MainContent>
            <AddQuestion />
          </MainContent>
        }
      />
      <Route
        path="/test-testList"
        element={
          <MainContent>
            <ListQuestions />
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
        path="/associate-addAssociate"
        element={
          <MainContent>
            <AddAssociate />
          </MainContent>
        }
      />
      <Route
        path="/associate-associateList"
        element={
          <MainContent>
            <ListAssociateForm />
          </MainContent>
        }
      />
      <Route
        path="/technology-createTechnology"
        element={
          <MainContent>
            <TechnologyForm />
          </MainContent>
        }
      />
      <Route
        path="/technology-technologyList"
        element={
          <MainContent>
            <ListTechnology />
          </MainContent>
        }
      />

      <Route
        path="/client-management-createClient"
        element={
          <MainContent>
            <ClientForm />
          </MainContent>
        }
      />
      <Route
        path="/client-clientList"
        element={
          <MainContent>
            <ListClient />
          </MainContent>
        }
      />
      <Route
        path="/Unit-createUnit"
        element={
          <MainContent>
            <CreateUnitForm />
          </MainContent>
        }
      />
      <Route
        path="/Unit-unitList"
        element={
          <MainContent>
            <ListUnit />
          </MainContent>
        }
      />
    </Routes>
  );
}
