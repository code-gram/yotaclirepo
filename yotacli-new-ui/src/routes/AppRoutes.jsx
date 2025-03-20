import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/register/SignUp";
import { useEffect, useState } from "react";
import axios from "axios";
import { isTokenExpired } from "../security/jwt/JwtService";
import { Home } from "../pages/home/Home";
import { getDecryption } from "../security/crypto/EncryptionDecryption";
import {
  DEFAULT_REQUEST_HEADER_CONTENT_TYPE,
  PUBLIC_URLS,
  TOKEN_KEY,
  USER_ROLES,
} from "../constants/helperConstants";
import { AllAssociates } from "../pages/associates/AllAssociates";
import { AllTrainers } from "../pages/trainers/AllTrainers";
import { PendingUsers } from "../pages/pending-users/PendingUsers";
import { logout, syncUserAuthData } from "../features/login/loginAction";
import { RegisteredAssociates } from "../pages/registered-associates/RegisteredAssociates";
import { useDispatch, useSelector } from "react-redux";
import TechnologyList from "../pages/technology/TechnologyList";
import ShowQuestion from "../pages/technology/ShowQuestion";
import Training from "../pages/training/Training";
import { AddQuestion } from "../pages/questions/add-question/AddQuestion";
import { AssignedAssociateList } from "../pages/assign-associates/AssignedAssociateList";
import { UpdateQuestion } from "../pages/questions/update-question/UpdateQuestion";
import CategoryList from "../pages/category/CategoryList";
import TestPaper from "../pages/associates/student/TestPaper";
import MyTrainings from "../pages/associates/MyTrainings";
import MyTest from "../pages/associates/MyTest";
import TestResult from "../pages/associates/student/TestResult";
import { TPR } from "../pages/training-performance-report/TPR";
import { AddTest } from "../pages/test/AddTest";
import { AssociatesList } from "../pages/associates/AssociatesList";
import { ProfileDetails } from "../pages/profile-details/ProfileDetails";
import { ListTest } from "../pages/test/test-list/ListTest";
import { ReviewTest } from "../pages/test/review-test-question/ReviewTest";
import StartTest from "../../src/pages/associates/StartTest";
import { AddQuestionTest } from "../pages/test/AddQuestionTest";
import { RejectedUsers } from "../pages/rejected-users/RejectedUsers";
import TestQuestions from "../pages/test/TestQuestions";
import AssosciatePerformanceReport from "../pages/training-performance-report/AssociatePerformanceReport";
import Preview from '../pages/test/review-test-question/Preview'
import NewTest from "../pages/test/test-list/NewTest";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = useSelector((state) => state.auth);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    dispatch(syncUserAuthData());
  }, [navigate, dispatch]);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      if (isTokenExpired(token)) {
        console.log("Token Expired");
        dispatch(logout());
        navigate("/");
      }
    } else {
      console.log("Token not found");
      if (!PUBLIC_URLS.includes(location.pathname)) navigate("/");
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
          const decryptedToken = getDecryption(token);
          if (decryptedToken && !isTokenExpired(token)) {
            config.headers["Authorization"] = `Bearer ${decryptedToken}`;
            config.headers["Content-Type"] = config.headers["Content-Type"]
              ? config.headers["Content-Type"]
              : DEFAULT_REQUEST_HEADER_CONTENT_TYPE;
            return config;
          }
        }
        config.headers["Content-Type"] = config.headers["Content-Type"]
          ? config.headers["Content-Type"]
          : DEFAULT_REQUEST_HEADER_CONTENT_TYPE;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  useEffect(() => {
    if (userData.userRole)
      setUserRole(userData.userRole?.substring(5).replace("_", " "));
  }, [userData]);

  return (
    <Routes>
      {/*Public Routes*/}
      <Route path={"/"} element={<Login />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<SignUp />} />
      <Route path={"/home"} element={<Home />} />

      {/*---------Adding private routes---------*/}

      {/*For Technical Manager*/}
      {userRole === USER_ROLES.TECHNICAL_MANAGER && (
        <>
          <Route path={"/all-pending-users"} element={<PendingUsers />} />
          <Route path={"/all-rejected-users"} element={<RejectedUsers />} />
          <Route path={"/technology-list"} element={<TechnologyList />} />
          <Route
            path={"/all-registered-associates"}
            element={<RegisteredAssociates />}
          />
          <Route path={"/category-list"} element={<CategoryList />} />
          <Route path={"/addCategory/:id"} element={<CategoryList />} />
          <Route path={"/add-training"} element={<Training />} />
          <Route path={"/all-associates"} element={<AllAssociates />} />
          <Route path={"/associates"} element={<AssociatesList />} />
          <Route path={"/all-trainers"} element={<AllTrainers />} />
          <Route path={"/add-test/:screen"} element={<AddTest />} />
          <Route path={"/list-test"} element={<ListTest />} />
          <Route path={"/new-test"} element={<NewTest />} />
          <Route path={"/preview"} element={<Preview />} />
          <Route path={"/review-test"} element={<ReviewTest />} />
          <Route path={"/add-question"} element={<AddQuestion />} />
          <Route path={"/assigned-associate"} element={<AssignedAssociateList />} />
          <Route path={"/training-performance-report"} element={<TPR />} />
          <Route path={"/show-question/:id"} element={<ShowQuestion />} />
          <Route path={"/show-question"} element={<ShowQuestion />} />
          <Route path={"/UpdateQuestion/:id"} element={<UpdateQuestion />} />
          <Route path={"/add-question-test"} element={<AddQuestionTest />} />
          <Route path={"/test-question/:id"} element={<TestQuestions />} />
          <Route path={"/associate-performance-report"} element={<AssosciatePerformanceReport />} />
          
        </>
      )}

      {/*For Trainers*/}
      {userRole === USER_ROLES.TRAINER && (
        <>
          <Route path={"/add-training"} element={<Training />} />
          <Route path={"/add-question"} element={<AddQuestion />} />
          <Route path={"/add-test"} element={<AddTest />} />
          <Route path={"/review-test"} element={<ReviewTest />} />
          <Route path={"/list-test"} element={<ListTest />} />
          <Route path={"/preview"} element={<Preview />} />
          <Route path={"/test-question/:id"} element={<TestQuestions />} />
          <Route path={"/UpdateQuestion/:id"} element={<UpdateQuestion />} />
          <Route path={"/add-question-test"} element={<AddQuestionTest />} />

          <Route
            path={"/assigned-associate"}
            element={<AssignedAssociateList />}
          />
          <Route path={"/training-performance-report"} element={<TPR />} />
          <Route path={"/technology-list"} element={<TechnologyList />} />
          <Route path={"/show-question/:id"} element={<ShowQuestion />} />
          <Route path={"/show-question"} element={<ShowQuestion />} />
          <Route path={"/technology-list"} element={<TechnologyList />} />
          <Route path={"/category-list"} element={<CategoryList />} />
          <Route path={"/associate-performance-report"} element={<AssosciatePerformanceReport />} />
         
        </>
      )}

      {/*For Associates*/}
      {userRole === USER_ROLES.ASSOCIATE && (
        <>
          <Route path={"/my-test/:id"} element={<TestPaper />} />
          <Route path={"/myTrainings"} element={<MyTrainings />} />
          <Route path={"/myTest"} element={<MyTest />} />
          <Route path={"/profile-details"} element={<ProfileDetails />} />
          <Route path={"/test-result"} element={<TestResult />} />
          <Route path={"/starttest/:id"} element={<StartTest />} />
          <Route path={"/reports"} element={"/"} />
        </>
      )}

      {/*this should always be kept at last place, keep all the application urls above this one*/}
      {/*Default Route*/}
      <Route path={"/*"} element={<Navigate to={"/"} />} />
    </Routes>
  );
};
