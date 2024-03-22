import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginUser } from "../components/user/LoginUser.jsx";
import { RegisterUser } from "../components/user/RegisterUser.jsx";
import { MainContent } from "../components/common/dashboard-layout/mainContent";
import { Dashboard } from "../components/dashboard/Dashboard.js";
import { AddQuestion } from "../components/question-management/add-questions/AddQuestion.jsx";
import { CreateTraining } from "../components/training-management/CreateTraining.jsx";
import { ListUnit } from "../components/unit-management/list-unit/ListUnit.jsx";
import { ListTechnology } from "../components/technology-management/list-technology/listTechnology.jsx";
import { TrainingList } from "../components/training-management/TrainingList.jsx";
import { ClientForm } from "../components/client-management/add-client/ClientForm.jsx";
import { TechnologyForm } from "../components/technology-management/add-technology/TechnologyForm.jsx";
import { AddAssociate } from "../components/associate-management/add-associate/AddAssociate.jsx";
import { ListQuestions } from "../components/question-management/list-questions/ListQuestions.jsx";
import ListClient from "../components/client-management/list-client/ListClient.jsx";
import { CreateUnitForm } from "../components/unit-management/add-unit/CreateUnitForm.jsx";
import { ListElement } from "../components/question-management/test-list/ListElement.jsx";
import { AssociatesList } from "../components/associate-management/list-associate/AssociatesList.jsx";
import { AssociateAssignedTestsList } from "../components/dashboard/list-associateAssignedTests/associateAssignedTestsList.jsx";
import { TestInstruction } from "../components/question-management/test-instruction/TestInstruction.jsx";
import { TestList } from "../components/take-test/take-test/TestList.jsx";
import { StartTest } from "../components/take-test/take-test/StartTest.jsx";
import { TestQuestions } from "../components/take-test/take-test/test-questions/TestQuestions.jsx";
import { ApproveStatus } from "../components/training-management/training-model/ApproveStatus.jsx";
import { ChangeTrainingStatus } from "../components/training-management/training-model/ChangeTrainingStatus.jsx";
export const AppRoutes = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/requester-registration" element={<RegisterUser />} />
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
        path="/dashboard/assigned-tests-list"
        element={
          <MainContent>
            <AssociateAssignedTestsList />
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
        path="/test-testLists"
        element={
          <MainContent>
            <ListElement />
          </MainContent>
        }
      />
      <Route
        path="/test-instruction"
        element={
          <MainContent>
            <TestInstruction />
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
            <AssociatesList />
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
      <Route
        path="/takeTest"
        element={
          <MainContent>
            <TestList />
          </MainContent>
        }
      />
      <Route path="/start-test" element={<StartTest />} />
      {/* <Route path="/approveTraining" element={<ApproveStatus />} /> */}
      <Route
        path="/take-quetions"
        element={
          <MainContent>
            <TestQuestions />
          </MainContent>
        }
      />
      <Route
        path="/approveTraining/:id"
        element={
          <MainContent>
            <TrainingList />
            <ApproveStatus />
          </MainContent>
        }
      />
      <Route
        path="/changeTrainingStatus/:id"
        element={
          <MainContent>
            <TrainingList />
            <ChangeTrainingStatus />
          </MainContent>
        }
      />
    </Routes>
  );
};
