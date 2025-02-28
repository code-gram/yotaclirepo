import { React, useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../../../pages/technology/ShowQuestion.module.css";
import { getQuestionByTestid } from "../../../features/Question/questionAction";
import { BasicInfo } from "../../test/BasicInfo";
import {
    settime,
    setAssociateMark,
} from "../../../features/TestResult/TestResultSlice";
import ReviewQuestionContext from "../../../app/ReviewQuestionContext";
import parse, { domToReact } from 'html-react-parser';

function Preview() {
    const { token, email } = useSelector((state) => state.auth.userData);
    // const { test } = useSelector((state) => state.associates);
    const { reviewQuestionJson } = useContext(ReviewQuestionContext);
    const { questions } = useSelector((state) => state.questions);
    const testDetails = useSelector((state) => state.tests.testDetails);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentOption, setCurrentOption] = useState("");
    const [totalMark, setTotalMark] = useState(0);
    const [isAttempt, setIsAttempt] = useState(null);
    const navigate = useNavigate();
    const [currentAnswer, setCurrentAnswer] = useState();
    const [startTime, setStartTime] = useState(
        new Date().toLocaleTimeString("en-US")
    );
    const dispatch = useDispatch();
    const { id } = useParams("id");
    const [selectedOptions, setSelectedOptions] = useState([]);

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

    const rightAnswer = () => {
        const a = reviewQuestionJson[currentQuestion].correctAnswer;
        const b = "option_" + a;
        console.log(reviewQuestionJson[currentQuestion]?.[b]);
        return reviewQuestionJson[currentQuestion]?.[b];
    }

    const prevQuestion = () => {
        console.log("testDetails", testDetails)
        console.log("handleSubmit", BasicInfo)
        if (currentQuestion > 0) {
            console.log("testDetails", testDetails)
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleClick = (e) => {
        e.preventDefault()
        console.log("testDetails", testDetails)
        console.log("BasicInfo", BasicInfo)
        navigate("/review-test")
    }

    const nextQuestion = () => {
        console.log("reviewQuestionJson1111", reviewQuestionJson)
        if (currentQuestion < reviewQuestionJson.length - 1) {
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

    const options = {
        replace: (domNode) => {
          if (domNode.name === 'pre') {
            return (
              <pre className={styles['code-block']}>
                {domToReact(domNode.children)}
              </pre>
            );
          }
        }
      };

    return (
        <>
            <div className="d-flex justify-content-between align-items-cente">
                <button
                    type="button"
                    className="btn"
                    style={{ marginLeft: "80px", backgroundColor: "grey" }}
                    onClick={handleClick}
                >
                    Back
    </button>
                <div className="flex-grow-1 text-center">
                    <h4>
                        Test Name : {testDetails?.testTitle} | Total Questions : {reviewQuestionJson?.length}
                    </h4>
                </div>
            </div>
            <div className="container ">
                <div className="row">

                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="grid gap-0 row-gap-1">

                            <div className="col">
                                <div className="p-2 g-col-6 text-start">
                                    {/* <Question testid={test?.id} /> */}
                                    <div className="container text-start">
                                        <div className="row">
                                            <div className="col">
                                                {
                                                    // reviewQuestionJson.map((data, index)=>(
                                                    <Card style={{ width: '65rem' }}>
                                                        <Card.Header>
                                                            <p> Q {currentQuestion + 1} : {reviewQuestionJson[currentQuestion]?.questionTitle? parse(reviewQuestionJson[currentQuestion].questionTitle, options) : ""}{" "}</p>
                                                        </Card.Header>
                                                        <Card.Body>
                                                            <div className={styles["scrollable-container1"]}>
                                                                <div class="container text-end">
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <div className="col">
                                                                              
                                                                                {/* Cleaner conditional rendering */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group form-horizontal pt-2">

                                                                    <div>
                                                                        <div className="row">
                                                                            <div className="col-6">
                                                                                <div className={styles["scrollable-container"]}>
                                                                                    <div className="form-check">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="form-check-input"
                                                                                            name="answer-entry"
                                                                                            onChange={handleOption}
                                                                                            value={reviewQuestionJson[currentQuestion]?.option_A}
                                                                                            checked={selectedOptions[currentQuestion] === reviewQuestionJson[currentQuestion]?.option_A}
                                                                                        />
                                                                                        <span>{reviewQuestionJson[currentQuestion]?.option_A ? parse(reviewQuestionJson[currentQuestion].option_A,options) : "" }</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                            <div className="col-6">
                                                                                <div className={styles["scrollable-container"]}>
                                                                                    <div className="form-check">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="form-check-input"
                                                                                            name="answer-entry"
                                                                                            onChange={handleOption}
                                                                                            value={reviewQuestionJson[currentQuestion]?.option_B}
                                                                                            checked={selectedOptions[currentQuestion] === reviewQuestionJson[currentQuestion]?.option_B}
                                                                                        />
                                                                                        <span>{reviewQuestionJson[currentQuestion]?.option_B ? parse(reviewQuestionJson[currentQuestion].option_B,options) : "" }</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="row pt-2">
                                                                        <div className="col-6">
                                                                            <div className={styles["scrollable-container"]}>
                                                                                <div className="form-check">
                                                                                    <input
                                                                                        type="radio"
                                                                                        className="form-check-input"
                                                                                        name="answer-entry"
                                                                                        onChange={handleOption}
                                                                                        value={reviewQuestionJson[currentQuestion]?.option_C}
                                                                                        checked={selectedOptions[currentQuestion] === reviewQuestionJson[currentQuestion]?.option_C}
                                                                                    />
                                                                                    <span>{reviewQuestionJson[currentQuestion]?.option_C ? parse(reviewQuestionJson[currentQuestion].option_C,options) : "" }</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-6">
                                                                            <div className={styles["scrollable-container"]}>
                                                                                <div className="form-check">
                                                                                    <input
                                                                                        type="radio"
                                                                                        className="form-check-input"
                                                                                        name="answer-entry"
                                                                                        onChange={handleOption}
                                                                                        value={reviewQuestionJson[currentQuestion]?.option_D}
                                                                                        checked={selectedOptions[currentQuestion] === reviewQuestionJson[currentQuestion]?.option_D}
                                                                                    />
                                                                                    <span>{reviewQuestionJson[currentQuestion]?.option_D ? parse(reviewQuestionJson[currentQuestion].option_D,options) : "" }</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                        <div className={styles["minimized-length"]}>
                                                            <div className="p-2 g-col-6 text-start">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-warning float-start "
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

                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
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

            </div>
        </>
    )
}

export default Preview;