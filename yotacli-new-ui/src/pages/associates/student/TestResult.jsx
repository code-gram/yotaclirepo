import React from "react";
import Card from "../../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import "./TestResult.css";
import { useEffect } from "react";
import { setEndTime } from "../../../features/TestResult/TestResultSlice";
import { useNavigate } from "react-router-dom";
import { storeResult,updateResult } from "../../../features/TestResult/testResultAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TestResult = () => {
  const { test } = useSelector((state) => state.associates);
  const { questions } = useSelector((state) => state.questions);

  const { time, endTime, AssociateMark } = useSelector(
    (state) => state.testresult
  );
  
  const { token, email } = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setEndTime(new Date().toLocaleTimeString("en-US")));
  }, []);

  const takentime = parseInt(endTime.slice(3, 5)) - parseInt(time.slice(3, 5));

  function handleSubmitClose() {
    let data = {
      testId: test?.id,
      userEmailId: email,
      result: AssociateMark,
      startTime: time,
      endTime: endTime,
      timeTaken: takentime,
      testStatus:"COMPLETED",
    };
    dispatch(updateResult({ data }));
    toast("Result Save Successfully!");
    setTimeout(() => {
      navigate("/myTest");
    }, 2000);
  }

  return (
    <>
    <div className="container-fluid">
      <Card>
        <div className="p-3">
          <h2>Test-Analysis</h2>
          <button
            type="button"
            className="btn btn-success submitClose"
            onClick={handleSubmitClose}
          >
            Submit & Close
          </button>

          <div className="heading">
            <h4 className="instruction">Test-Name : {test?.testTitle}</h4>
            <h4 className="associateName"> {email}</h4>
          </div>

          <br />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card ">
                  <div className="card-body carddata">
                    <h5> Start-Time : {time}</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body carddata">
                    <h5>Submit-Time : {endTime} </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row flex">
              <div className="col">
                <div className="card">
                  <div className="card-body carddata">
                    <h5>Total_Mark</h5> <br />
                    <span>{questions.length}</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body carddata">
                    <h5>Associate_Score</h5> <br />
                    <span>{AssociateMark}</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body carddata">
                    <h5>Time_Taken</h5> <br />
                    <span>{takentime} : Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <ToastContainer />
      </div>
    </>
  );
};
export default TestResult;
