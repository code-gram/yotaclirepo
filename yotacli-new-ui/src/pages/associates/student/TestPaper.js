import { React, useEffect, useState, createContext } from "react";
import StudentCard from "./StudentCard";
import Card from "react-bootstrap/Card";
import TextPaperType from "./TestPaperType";
import ItereateCircle from "./circle/ItereateCircle";
import { fetchTestByTestId } from "../../../features/associates/associateAction";
import { useSelector, useDispatch } from "react-redux";
import Timer from "./Timer";
import { useParams } from "react-router-dom";
import { getQuestionByTestid } from "../../../features/Question/questionAction";
import { storeResult } from "../../../features/TestResult/testResultAction";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  settime,
  setAssociateMark,
} from "../../../features/TestResult/TestResultSlice";

const TestPaper = () => {
  const { token, email } = useSelector((state) => state.auth.userData);
  const { test } = useSelector((state) => state.associates);

  const { questions } = useSelector((state) => state.questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOption, setCurrentOption] = useState("");
  const [totalMark, setTotalMark] = useState(0);
  const [isAttempt, setIsAttempt] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState();
  const [startTime, setStartTime] = useState(
    new Date().toLocaleTimeString("en-US")
  );
  const dispatch = useDispatch();
  const { id } = useParams("id");
  // const [selectedOptions, setSelectedOptions] = useState(() => Array(questions?.length || 0).fill(false));
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (token) dispatch(fetchTestByTestId(id));
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getQuestionByTestid({ id: id, email: email }));
      dispatch(settime(startTime));
    }
  }, []);

  function handleOption(event) {
    if (event.target.value) {
      setCurrentAnswer(event.target.value);
      setCurrentOption(true);
    }
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: event.target.value,
    });
  }

  // const rightAnswer = questions.map((data, index) => {
  //   return data.correctAnswer;
  // });
  function handleCircleClick(index) {
    setCurrentQuestion(index);
  }

  const rightAnswer = () => {
    const a = questions[currentQuestion].correctAnswer;
    const b = "option_" + a;
    console.log(questions[currentQuestion]?.[b]);
    return questions[currentQuestion]?.[b];
  }
 
  const saveAndNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentOption) {
      setIsAttempt(true);
    } else {
      setIsAttempt(false);
    }
    const answer = rightAnswer();
    if (answer === currentAnswer) {
      setTotalMark(totalMark + 1);
    }
    setCurrentAnswer("");
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentOption) {
      setIsAttempt(true);
    } else {
      setIsAttempt(false);
    }
    const answer = rightAnswer();
    if (answer === currentAnswer) {
      setTotalMark(totalMark + 1);
    }
    setCurrentAnswer("");
  };

  function handleSubmitExam() {
    setOpen(true);
    if (token) {
      let data = {
        testId: id,
        userEmailId: email,
        result: totalMark,
      };
      dispatch(storeResult({ data }));
      dispatch(setAssociateMark(totalMark));
    }
  }

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-12 col-md-8 p-2">
            <div className="p-2 g-col-6 text-start">
              <StudentCard
                header={test?.testTitle}
                text1={
                  <TextPaperType
                    Qtype={test?.type}
                    totalQ={test?.totalQuestions}
                    totalMarks={test?.totalQuestions}
                    totalTime={test?.totalTime + " min"}
                  />
                }
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-2 g-col-6 text-start">
              <div className="p-2 g-col-6 text-start">
                <Timer totaltime={test?.totalTime} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="grid gap-0 row-gap-1">
              {/* <div className="p-2 g-col-6 text-start">
                            <StudentCard header={test?.testName} text1=
                                {<TextPaperType Qtype={test?.testType} totalQ={test?.totalQuestions} totalMarks={test?.totalMarks}
                                    totalTime={test?.totalTime + " min"} />} />
                        </div> */}
              <div className="col">
                <div className="p-2 g-col-6 text-start">
                  {/* <Question testid={test?.id} /> */}
                  <div className="container text-start">
                    <div className="row">
                      <div className="col">
                        <Card>
                          <Card.Header>
                            <p> Q {currentQuestion + 1}</p>
                          </Card.Header>
                          <Card.Body>
                            <Card.Text>
                              {questions[currentQuestion]?.questionTitle}{" "}
                            </Card.Text>
                            <div>
                              <div class="container text-end">
                                <div className="row">
                                  <div className="col">
                                    <div className="col">
                                      {/* {showMarks && (
                                      <div className="col">[Marks : 1]</div>
                                    )}{" "} */}
                                      {/* Cleaner conditional rendering */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group form-horizontal pt-2">
                                <div class="form-check">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="answer-entry"
                                    onChange={handleOption}
                                    value={questions[currentQuestion]?.option_A}
                                    checked={selectedOptions[currentQuestion] === questions[currentQuestion]?.option_A}
                                  />
                                  <span>
                                    {questions[currentQuestion]?.option_A}
                                  </span>
                                </div>
                                <div class="form-check">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="answer-entry"
                                    onChange={handleOption}
                                    value={questions[currentQuestion]?.option_B}
                                    checked={selectedOptions[currentQuestion] === questions[currentQuestion]?.option_B}
                                  />
                                  <span>
                                    {questions[currentQuestion]?.option_B}
                                  </span>
                                </div>
                                <div class="form-check">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="answer-entry"
                                    onChange={handleOption}
                                    value={questions[currentQuestion]?.option_C}
                                    checked={selectedOptions[currentQuestion] === questions[currentQuestion]?.option_C}
                                  />
                                  <span>
                                    {questions[currentQuestion]?.option_C}
                                  </span>
                                </div>
                                <div class="form-check">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="answer-entry"
                                    onChange={handleOption}
                                    value={questions[currentQuestion]?.option_D}
                                    checked={selectedOptions[currentQuestion] === questions[currentQuestion]?.option_D}
                                  />
                                  <span>
                                    {questions[currentQuestion]?.option_D}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                          <div className="col">
                            <div className="p-2 g-col-6 text-start">
                              <div className="card">
                                <div className="card-body">
                                  <button
                                    type="button"
                                    className="btn btn-success float-start"
                                    onClick={saveAndNext}
                                  >
                                    Save & Next
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-light float-end "
                                    onClick={prevQuestion}
                                  >
                                    Prev
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-light float-end me-1"
                                    onClick={nextQuestion}
                                  >
                                    Next
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col">
            <div className="p-2 g-col-6 text-start">
              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-success float-start"
                    onClick={saveAndNext}
                  >
                    Save & Next
                  </button>
                  <button
                    type="button"
                    className="btn btn-light float-end "
                    onClick={prevQuestion}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    className="btn btn-light float-end me-1"
                    onClick={nextQuestion}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          </div>

          <div className="col-12 col-md-4">
            <div className="grid gap-0 row-gap-1">
              {/* <div className="p-2 g-col-6 text-start" ><Timer paperTime={test?.totalTime} /></div> */}
              <div className="p-2 g-col-6 text-start">
                <StudentCard
                  header="Questions"
                  // text1={<ItereateCircle isAttempted={isAttempt} />}
                  text1={<ItereateCircle selectedOptions={selectedOptions} onCircleClick={handleCircleClick} />}
                />
              </div>
              <div className="p-2 g-col-6 text-start p-2">
                <StudentCard
                  text2="Orange color Question indicate that you verified Question but not answered
                Green color Question indicate that you have submitted those Question"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="grid gap-0 row-gap-3">
              <div className="p-2 g-col-6 text-start"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="d-grid gap-2 col-2 mx-auto">
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleSubmitExam}
              >
                Submit Exam
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Exam Submit !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mr-4">
          <div>
            <h5>Do you want to Submit Exam!</h5>
          </div>
          <button
            className="submitt-button btn btn-success"
            type="submit"
            style={{ borderRadius: "revert-layer", marginLeft: "390px" }}
          >
            <Link className="nav-link" to="/test-result">
              Submit
            </Link>
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TestPaper;
