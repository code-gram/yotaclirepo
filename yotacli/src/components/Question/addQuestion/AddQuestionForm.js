import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes1 from "./HeaderItem.module.css";
import classes from "./AddQuestionForm.module.css";
import Button from "../../../ui/button/Button";
import InputField from "../../../ui/inputField/InputField";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import { fetchData } from "../../../redux/features/technology/createTechnologySlice";
import fetchTechnologyTestDetails from "../../../redux/features/technology/CreateTechSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { headerContents } from "../../utils/Authentication";
import { useNavigate } from "react-router-dom";

const AddQuestionForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const technology = useSelector((state) => state.technology.testDetailsArray);
  const [techList, setTechList] = useState([]);
  console.log("searchTech array to search Technology:", technology.name);
  console.log("Original Array List:", technology.technologies);
  useEffect(() => {
    axios
      .get("http://localhost:9090/yota/api/technologies/",
        {
          headers: headerContents()
        }
      )
      .then((resp) => {
        if (resp.status == 200) {
          if (resp.data && resp.data.length) {
            let unitData = resp.data;
            let unitDataArray = [];
            for (let i = 0; i < unitData.length; i++) {
              let countObj = {
                value: unitData[i].name,
                label: unitData[i].name,
              };
              unitDataArray.push(countObj);
            }
            console.log('----mk log----', unitDataArray)
            setTechList(unitDataArray);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const fetchTechnologyTestDetails = createAsyncThunk("fetchTechnologyTestDetails", async () => {
      return axios.get(`http://localhost:9090/yota/api/technologies/`, 
      {
        headers: headerContents()
      }).then((response) => response.data);
    });
    console.log("response =>>>>" + fetchTechnologyTestDetails());
    dispatch(fetchTechnologyTestDetails());
  }, [dispatch]);
  const [newQuestion, setNewQuestion] = useState({

    questionType: "mcq",
    answerType: "easy",

  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [editorValue, setEditorValue] = useState("");



  const getNewQuestionData = (event) => {
    console.log("event:", event.target)

    setNewQuestion({ ...newQuestion, [event.target.name]: event.target.value });
    console.log(newQuestion);

  };
  //Backend add question API
  useEffect(() => {
    axios.get('http://localhost:9090/yota/api/questions/questionCode')
      .then(response => {

        console.log("111111111", response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const setRichTextData = (value) => {

    setEditorValue(value);

    setNewQuestion({ ...newQuestion, ["question"]: editorValue });

  };

  const handleOnSubmit = (event) => {

    event.preventDefault();

    console.log("----newQuestion----", JSON.stringify(newQuestion));

    axios
      .post("http://localhost:9090/yota/api/questions/", newQuestion,
        {
          headers: headerContents()
        }
      )
      .then((response) => {
        console.log(response.data);
        
      } , [])
      .catch((error) => {
        console.log(error);
      });
      alert("question added successfully");

      navigate("/trainer/listquestion");
  };
 
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

  };

  const handleUpload = () => {

    if (selectedFile) {

      const formData = new FormData();

      formData.append("file", selectedFile);
      axios

        .post(

          "http://localhost:9090/yota/api/questions/questionUpload",
          formData,
          {
            headers: headerContents()
          }
        )
        .then((response) => {
          // Handle success response here
          console.log("File uploaded successfully:", response.data);
        })
        .catch((error) => {
          // Handle error here
          console.error("Error uploading file:", error);
        });
      alert("Questions from Excel Sheet added successfully");
    }
  };

  const data = [

    { value: "java", label: "JAVA" },
    { value: "reactjs", label: "REACTJS" },
    { value: "aws", label: "AWS" },
    { value: "hibernate", label: "HIBERNATE" }
  ];

  const handleSelectData = (selectOption) => {
    console.log("handleSelectData", selectOption);
    console.log("selectOption.value", selectOption.value);
  };

  // const handleChange = (event) => {
  //   dispatch(settech(event.target.value));
  // };

  return (

    <>

      <div className="row">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes1.boxtitle}>Add New Question</h5>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <form className="form-inline" onSubmit={handleOnSubmit}>
              <div className={classes1.btn}>
                <Button
                  className={classes.button}
                  type="submit"
                  onClick={handleOnSubmit}
                >
                  {" "}
                  Add{" "}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div
        className={`col-1 mb-3 ${classes.inputName}`}
        style={{ width: "100%" }}
      >
        <div style={{ width: "14%" }}>
          <label
            htmlFor="description"
            style={{
              fontSize: "15px",
              marginLeft: "40px",
            }}
          >
            Technology:
          </label>
        </div>
        <div
          className="col-xl-4  col-md-4 col-sm-8 ms-3"
          style={{ width: "86%" }}

        >
          <div style={{ width: "40%", marginLeft: "5px" }}>

            { /*<Select value={technology} onChange={handleSelectData}>
              <div>Select Technology</div>
              {technology.length > 0 &&
               technology.map((item) => (
                  <div key={item.id} value={item.name}>
                    {item.name}
                  </div>
                ))}
            </Select>*/
              //chane

              <Select
                // options={data} 
                options={techList}
                onChange={handleSelectData} />

            }

          </div>
        </div>
      </div>
      <div className="row align-items-end" style={{}}>
        <div className={`col-1 mb-3 ${classes.inputName}`}>
          <label
            htmlFor="description"
            style={{
              lineHeight: "140px",
              marginLeft: "90px",
              fontSize: "15px",
            }}
          >
            Question:
          </label>
        </div>
        <div className={`col-8 mt-2`} style={{ marginLeft: "63px" }}>
          <ReactQuill
            theme="snow"
            value={editorValue}
            onChange={setRichTextData}
            style={{ width: "700px", height: "200px" }}
          />
        </div>
        <div className="row align-items-end" style={{ marginTop: "6%" }}>
          <table>
            <tr>
              <div style={{ display: "flex", marginLeft: "100px" }}>
                <div
                  className={`col-3 ${classes.inputName}`}
                  style={{ marginLeft: "85px" }}
                >
                  <td>
                    <div style={{ paddingTop: "40px" }}>
                      <label
                        htmlFor="inputNewQuestion"
                        className="col-form-label"
                      >
                        (A)
                      </label>
                    </div>
                  </td>
                  <td>
                    <InputField>
                      <textarea
                        type="text"
                        id="inputName"
                        name="option_A"
                        className={`form-control ${classes.inputField}`}
                        onChange={getNewQuestionData}
                        aria-describedby="nameHelpInline"
                        placeholder="Enter Option 1"
                        style={{ width: "300px", height: "110px" }}
                      />

                    </InputField>
                  </td>
                </div>
                <div
                  className={`col-3 ${classes.inputName}`}
                  style={{ marginLeft: "160px" }}
                >
                  <td>
                    <div style={{ paddingTop: "40px" }}>
                      <label
                        htmlFor="inputNewQuestion"
                        className="col-form-label"
                      >

                        (B)

                      </label>
                    </div>
                  </td>
                  <td>
                    <InputField>
                      <textarea
                        type="text"
                        id="inputName"
                        name="option_B"
                        className={`form-control ${classes.inputField}`}
                        onChange={getNewQuestionData}
                        aria-describedby="nameHelpInline"
                        placeholder="Enter Option 2"
                        style={{ width: "300px", height: "110px" }}

                      />
                    </InputField>
                  </td>
                </div>
              </div>
            </tr>
            <tr>
              <div style={{ display: "flex", marginLeft: "100px" }}>
                <div
                  className={`col-3 ${classes.inputName}`}
                  style={{ marginLeft: "85px", marginTop: "10px" }}

                >

                  <td>
                    <div style={{ paddingTop: "40px" }}>
                      <label
                        htmlFor="inputNewQuestion"
                        className="col-form-label"
                      >

                        (C)

                      </label>
                    </div>
                  </td>
                  <td>
                    <InputField>
                      <textarea
                        type="text"
                        id="inputName"
                        name="option_C"
                        className={`form-control ${classes.inputField}`}
                        onChange={getNewQuestionData}
                        aria-describedby="nameHelpInline"
                        placeholder="Enter Option 3"
                        style={{ width: "300px", height: "110px" }}

                      />
                    </InputField>
                  </td>
                </div>
                <div

                  className={`col-3 ${classes.inputName}`}
                  style={{ marginLeft: "160px", marginTop: "10px" }}
                >
                  <td>
                    <div style={{ paddingTop: "40px" }}>
                      <label
                        htmlFor="inputNewQuestion"
                        className="col-form-label"
                      >
                        (D)
                      </label>
                    </div>
                  </td>
                  <td>
                    <InputField>
                      <textarea
                        type="text"
                        id="inputName"
                        name="option_D"
                        className={`form-control ${classes.inputField}`}
                        onChange={getNewQuestionData}
                        aria-describedby="nameHelpInline"
                        placeholder="Enter Option 4"
                        style={{ width: "300px", height: "110px" }}
                      />

                    </InputField>
                  </td>
                </div>
              </div>
            </tr>
            <tr>
              <div style={{ display: "flex", marginLeft: "100px" }}>
                <div
                  className={`col-3 ${classes.inputName}`}
                  style={{ marginLeft: "85px" }}
                >
                  <td style={{ marginLeft: "25px" }}>
                    <div className={`col-12`} style={{ marginTop: "10px" }}>
                      <InputField>

                        <select
                          name="correctAnswer"
                          onChange={getNewQuestionData}
                          style={{ height: "33px", width: "300px" }}
                        >

                          <option value="Select">
                            Choose the Correct Answer
                          </option>

                          <option value={newQuestion.a}>Option:A</option>
                          <option value={newQuestion.b}>Option:B</option>
                          <option value={newQuestion.c}>Option:C</option>
                          <option value={newQuestion.d}>Option:D</option>

                        </select>

                      </InputField>

                    </div>
                  </td>
                </div>

                <div
                  className={`col-3 ${classes.inputName}`}
                  style={{ marginLeft: "160px" }}

                >

                  <td style={{ marginLeft: "20px" }}>
                    <div>
                      <label
                        htmlFor="inputNewQuestion"
                        className="col-form-label"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className={`col-12`} style={{ marginTop: "10px" }}>
                      <InputField>
                        <select
                          name="questionLevel"
                          onChange={getNewQuestionData}
                          style={{ width: "300px", height: "35px" }}

                        >
                          <option value="Select">
                            Select Difficulty Level
                          </option>
                          <option value="Easy">Easy</option>
                          <option value="Medium">Medium</option>
                          <option value="Hard">Hard</option>

                        </select>

                      </InputField>
                    </div>
                  </td>
                </div>
              </div>
            </tr>
            <tr>
              <div style={{ display: "flex", marginLeft: "140px" }}>
                <div
                  className={`col-3 ${classes.inputName}`}
                  style={{ marginLeft: "62px", marginTop: "9px" }}

                >

                  <td style={{ marginLeft: "0px" }}>
                    <div>
                      <label
                        htmlFor="inputNewQuestion"
                        className="col-form-label"

                      ></label>
                    </div>
                  </td>
                  <td>

                    <div>
                      <InputField>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          style={{
                            width: "300px",
                            border: "none",
                            height: "35px",
                            paddingLeft: "35px",
                            paddingTop: "3px",
                          }}
                        />
                      </InputField>
                    </div>
                  </td>
                </div>

                <div
                  className={`col-3 ${classes.inputName}`}
                  style={{ marginLeft: "158px", marginTop: "9px" }}
                >
                  <td style={{ marginLeft: "20px" }}>
                    <div>
                      <label
                        htmlFor="inputNewQuestion"
                        className="col-form-label"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div>
                      <InputField>
                        <input
                          type="button"
                          onClick={handleUpload}
                          value="   Upload  Excel  Sheet  "
                          style={{
                            width: "300px",
                            border: "none",
                            height: "33px",
                          }}
                        />
                      </InputField>
                    </div>
                  </td>
                </div>
              </div>
            </tr>
          </table>
        </div>
      </div>
    </>

  );

};
export default AddQuestionForm;