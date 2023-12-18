import axios from 'axios';
import classes1 from "./HeaderItem.module.css";
import classes from "./UpdateQuestionForm.module.css";
import Button from '../../../ui/button/Button';
import InputField from '../../../ui/inputField/InputField';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getAuthToken } from '../../utils/Authentication';

const UpdateQuestionForm = () => {

  const nevigate = useNavigate();
  const { id } = useParams();
  const initialState = {

    questionType: "mcq",
    questionLevel: "",
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
    answerType: "easy"

  };

  const [updateQuestionData, setUpdateQuestionData] = useState(initialState);
  const token = getAuthToken();
  useEffect(() => {
    if (id) {
      axios.get(`/yota-api/questions/${id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": token
          }
        }
      ).then(
        res => {
          console.log(res.data);
          setUpdateQuestionData(res.data);
        });
    }
  },
    [id]);
  console.log(updateQuestionData);

  const getNewQuestionData = (event) => {
    setUpdateQuestionData({ ...updateQuestionData, [event.target.name]: event.target.value });
    console.log(updateQuestionData);
  }

  const onHandleUpdate = () => {
    axios.put(`/yota-api/questions/`, updateQuestionData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": token
        }
      }
    )
      .then(
        res => {
          console.log(updateQuestionData);
          console.log(res.data);
        }
      )
      .catch(error => {
        console.error(error);
      })
    alert("question updated successfully");
    nevigate("/trainer");
  }
  return (
    <>
      <div className="row">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes1.boxtitle}>Update Question</h5>
          </div>

          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <form className="form-inline" onSubmit={onHandleUpdate}>
              <div className={classes1.btn}>
                <Button onSubmit={onHandleUpdate}>Update</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />

      <div className="row align-items-end" style={{ marginLeft: "20px" }}>
        <div className={`col-3 mb-3 ${classes.inputName}`}>
          <label htmlFor="description" style={{ marginBottom: "25px" }}>Question:</label>
        </div>
        <div className={`col mt-6`} style={{ width: "200px" }}>
          <InputField>
           
            <textarea name='question' value={updateQuestionData.question} onChange={getNewQuestionData} style={{ width: "450px", border: "none" }} />
          </InputField>
        </div>
        <div className="col" style={{ paddingBottom: "40px" }}>
          <span
            id="descriptionHelpInline"
            className="form-text"
            style={{ marginLeft: "130px" }}
          >
            Maximum 50 words.
          </span>
        </div>
        <div className="row align-items-end" style={{ marginTop: "1%" }}>
          <div style={{ display: "inline-block" }}>
            <ul>
              <li>
                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "85px" }}>
                  <div>
                    <label htmlFor="inputNewQuestion" className="col-form-label">
                      Option(A)
                    </label>
                  </div>

                  <div className={`col-12`} style={{ marginLeft: "110px", marginTop: "5px" }}>
                    <InputField>
                      <input
                        type="text"
                        id="inputName"
                        name="a"
                        value={updateQuestionData.a}
                        className={`form-control ${classes.inputField}`}
                        onChange={getNewQuestionData}
                        aria-describedby="nameHelpInline"
                        placeholder="Enter Option 1"
                        style={{ width: "450px" }}
                      />
                    </InputField>
                  </div></div>

              </li><li>

                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "85px" }}>
                  <div>
                    <label htmlFor="inputNewQuestion" className="col-form-label">
                      Option(B)
                    </label>
                  </div>

                  <div className={`col-12`} style={{ marginLeft: "110px", marginTop: "5px" }}>
                    <InputField>
                      <input
                        type="text"
                        id="inputName"
                        name="b"
                        value={updateQuestionData.b}
                        className={`form-control ${classes.inputField}`}
                        onChange={getNewQuestionData}
                        aria-describedby="nameHelpInline"
                        placeholder="Enter Option 2"
                        style={{ width: "450px" }}
                      />
                    </InputField>
                  </div></div>

              </li><li>

                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "85px" }}>
                  <div>
                    <label htmlFor="inputNewQuestion" className="col-form-label">
                      Option(C)
                    </label>
                  </div>
                  <div className={`col-12`} style={{ marginLeft: "110px", marginTop: "5px" }}>
                    <InputField>
                      <input
                        type="text"
                        id="inputName"
                        name="c"
                        value={updateQuestionData.c}
                        className={`form-control ${classes.inputField}`}
                        onChange={getNewQuestionData}
                        aria-describedby="nameHelpInline"
                        placeholder="Enter Option 3"
                        style={{ width: "450px" }}
                      />
                    </InputField>
                  </div>
                </div>

              </li><li>

                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "85px", marginTop: "5px" }}>
                  <div>
                    <label htmlFor="inputNewQuestion" className="col-form-label">
                      Option(D)
                    </label>
                  </div>

                  <div className={`col-12 `} style={{ marginLeft: "110px" }}>
                    <InputField>
                      <input
                        type="text"
                        id="inputName"
                        name="d"
                        value={updateQuestionData.d}
                        className={`form-control ${classes.inputField}`}
                        onChange={getNewQuestionData}
                        aria-describedby="nameHelpInline"
                        placeholder="Enter Option 4"
                        style={{ width: "450px" }}
                      />
                    </InputField>
                  </div> </div>
              </li>
            </ul>
          </div>
          <div style={{ width: "100%", display: "flex", marginLeft: "252px" }}>
            <div style={{ margin: "5px" }}>
              <InputField>
                <select name="correctAnswer" onChange={getNewQuestionData} value={updateQuestionData.correctAnswer}>
                  <option value="Select">Choose the Correct Answer</option>
                  <option value={updateQuestionData.a}>Option:A</option>
                  <option value={updateQuestionData.b}>Option:B</option>
                  <option value={updateQuestionData.c}>Option:C</option>
                  <option value={updateQuestionData.d}>Option:D</option>
                </select>
              </InputField>
            </div>
            <div style={{ marginLeft: "37px", marginTop: "5px" }}>
              <InputField>
                <select name="questionLevel" onChange={getNewQuestionData} value={updateQuestionData.questionLevel}>
                  <option value="Select">Select Difficulty Level</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </InputField>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default UpdateQuestionForm
