import Card from "../../../components/Card/Card";
import styles from "../Questions.module.css";
import { SelectComponent } from "../../../components/select-component/SelectComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllTechnology } from "../../../features/technology/technologyAction";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { updateQuestion } from "../../../features/uploadQuestions/uploadQuestion";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const UpdateQuestion = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth.userData);
  const { questions } = useSelector((state) => state.questions);

  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentOption, setCurrentOption] = useState();
  const [questionLevel, setQuestionLevel] = useState();
  const [questionTitle, setQuestionTitle] = useState();
  const [option_A, setOption_A] = useState();
  const [option_B, setOption_B] = useState();
  const [option_C, setOption_C] = useState();
  const [option_D, setOption_D] = useState();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };
 
  const formats = [
    'header',
    'bold', 'italic', 'underline',
    'code-block',
    'list', 'bullet',
    'link', 'image',
  ];

  const handlequestionTitle = (value)=>{
    setQuestionTitle(value)
    console.log(questionTitle);
  }
  const handleOptionA = (value) =>{
    setOption_A(value);
  }
  const handleOptionB = (value) =>{
    setOption_B(value);
  }
  const handleOptionC = (value) =>{
    setOption_C(value);
  }
  const handleOptionD = (value) =>{
    setOption_D(value);
  }

  const navigate = useNavigate();
  const { id } = useParams("id");

  const correct_options_list = [
    {
      id: 1,
      current_Option: "A",
    },
    {
      id: 2,
      current_Option: "B",
    },
    {
      id: 3,
      current_Option: "C",
    },
    {
      id: 4,
      current_Option: "D",
    },
  ];

  const question_level_list = [
    {
      id: 1,
      question_level: "EASY",
    },
    {
      id: 2,
      question_level: "MEDIUM",
    },
    {
      id: 3,
      question_level: "HARD",
    },
  ];

  const questionData = questions.filter((quesData) => {
    return quesData.id == id ? quesData : null;
  });

  useEffect(() => {
    if (token) {
      questionData.map((data) => {
        setOption_A(data.option_A);
        setOption_B(data.option_B);
        setOption_C(data.option_C);
        setOption_D(data.option_D);
        setQuestionTitle(data.questionTitle);
        setQuestionLevel(data.questionLevel);
        setCurrentOption(data.correctAnswer);
      });
    }
  }, []);

  function currentOptionHanderChangeHandler(event) {
    setCurrentOption(event.target.value);
  }

  function questionLevelHanderChangeHandler(event) {
    setQuestionLevel(event.target.value);
  }

  useEffect(() => {
    if (token) {
      dispatch(fetchAllTechnology());
    }
  }, [token, dispatch]);

  function addNewQuestionHandler(event) {
    event.preventDefault();
    let data = {
      correctAnswer: currentOption,
      option_A: option_A,
      option_B: option_B,
      option_C: option_C,
      option_D: option_D,
      questionLevel: questionLevel,
      questionTitle: questionTitle,
    };
    console.log(data);
    dispatch(
      updateQuestion({
        data,
        quesId: id,
      })
    );

    setCurrentOption();
    setSelectedTechnology();
    setSelectedCategory();
    setOption_A("");
    setOption_B("");
    setOption_C("");
    setOption_D("");
    setQuestionLevel();
    setQuestionTitle("");

    toast("Question Updated Successfully!");
    setTimeout(() => {
      navigate("/technology-list");
    }, 2000);
  }

  return (
    <div>
      <Card className={styles["card-container"]}>
        <p className={styles["page-title"]}>Update Question</p>
        <Card className={styles["form-container"]}>
          <form onSubmit={addNewQuestionHandler}>
            {/* for the future use
            <div className={styles["form-group"]}>
              <label htmlFor="technology">
                Technology
                <span className={styles["required-span"]}> *</span>
              </label>
              <div className={styles["select-icon-group"]}>
                <SelectComponent
                  name="technology_select"
                  width={"select-dropdown"}
                  id="tech"
                  optionChangeHandler={technologyChangeHandler}
                  options={technologies}
                  dataFieldName={"technology"}
                  keyFieldName={"id"}
                  valueFieldName={"id"}
                  selectedValue={selectedTechnology}
                  defaultValue={""}
                />
                <AddIcon
                  size={30}
                  title={"Add New Technology"}
                  onAdd={addTechnologyEventHandler}
                />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="category">
                Category
                <span className={styles["required-span"]}> *</span>
              </label>
              <div className={styles["select-icon-group"]}>
                <SelectComponent
                  name="category_select"
                  width={"select-dropdown"}
                  id="cat"
                  optionChangeHandler={categoryChangeHandler}
                  options={categories}
                  dataFieldName={"name"}
                  keyFieldName={"id"}
                  valueFieldName={"id"}
                  selectedValue={selectedCategory}
                  defaultValue={""}
                />
                <AddIcon
                  size={30}
                  title={"Add New Category"}
                  onAdd={addCategoryEventHandler}
                />
              </div>
            </div> */}
            <div className={styles["form-group-question"]}>
              <label htmlFor="question-title">
                Question
                <span className={styles["required-span"]}> *</span>
              </label>
            </div>
            
              <div style={{marginBottom: 50}}>
                          <ReactQuill
                                      value={questionTitle}
                                      onChange={handlequestionTitle}
                                      theme="snow"
                                      modules={modules}
                                      formats={formats}
                                      style={{height : '12rem'}}
                                    />
                          
              {/* <textarea
                rows={8}
                cols={80}
                name="questionTitle"
                value={questionTitle}
                onChange={(event) => setQuestionTitle(event.target.value)}
              /> */}
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="question-title">
                Options
                <span className={styles["required-span"]}> *</span>
              </label>
            </div>
            <div className={styles["form-group"]}>
              <div style={{ marginBottom: 60, marginRight: 5 }}>
                <ReactQuill
                  name="option_A"
                  value={option_A}
                  placeholder={"Option A"}
                  onChange={handleOptionA}
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: '10rem' }}
                />
              </div>
              <div style={{ marginBottom: 60, marginLeft: 5 }}>
                <ReactQuill
                  name="option_B"
                  value={option_B}
                  placeholder={"Option B"}
                  onChange={handleOptionB}
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: '10rem' }}
                />
              </div>
              {/* <textarea
                rows={4}
                cols={20}
                name="option_A"
                value={option_A}
                placeholder={"Option A"}
                onChange={(event) => setOption_A(event.target.value)}
              />
              <textarea
                rows={4}
                cols={20}
                name="option_B"
                value={option_B}
                placeholder={"Option B"}
                onChange={(event) => setOption_B(event.target.value)}
              /> */}
            </div>
            <div className={styles["form-group"]}>
              <div style={{ marginBottom: 60, marginRight: 5 }}>
                <ReactQuill
                  name="option_C"
                  value={option_C}
                  placeholder={"Option C"}
                  onChange={handleOptionC}
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: '10rem' }}
                />
              </div>
              <div style={{ marginBottom: 60, marginLeft: 5 }}>
                <ReactQuill
                  name="option_D"
                  value={option_D}
                  placeholder={"Option D"}
                  onChange={handleOptionD}
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: '10rem' }}
                />
              </div>
              {/* <textarea
                rows={4}
                cols={20}
                name="option_C"
                value={option_C}
                placeholder={"Option C"}
                onChange={(event) => setOption_C(event.target.value)}
              />
              <textarea
                rows={4}
                cols={20}
                name="option_D"
                value={option_D}
                placeholder={"Option D"}
                onChange={(event) => setOption_D(event.target.value)}
              /> */}
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="question-title">
                Choose Correct Option
                <span className={styles["required-span"]}> *</span>
              </label>
              <div className={styles["select-icon-group"]}>
                {/* <SelectComponent
                  name="current_Option"
                  width={"select-dropdown"}
                  id="currentoption"
                  options={correct_options_list}
                  dataFieldName={"current_Option"}
                  keyFieldName={"id"}
                  valueFieldName={"current_Option"}
                  optionChangeHandler={currentOptionHanderChangeHandler}
                  selectedValue={currentOption}
                /> */}
                <select
                  onChange={currentOptionHanderChangeHandler}
                  value={currentOption}
                >
                  <option value="" disabled={true}>
                    select
                  </option>
                  {correct_options_list.map((option, index) => {
                    return (
                      <option key={index} value={option.current_Option}>
                        {option.current_Option}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="question-title">
                Question Level
                <span className={styles["required-span"]}> *</span>
              </label>
              <div className={styles["select-icon-group"]}>
                {/* <SelectComponent
                  name="question_Level"
                  width={"select-dropdown"}
                  dataFieldName={"question_level"}
                  keyFieldName={"id"}
                  valueFieldName={"question_level"}
                  id="queslevel"
                  options={question_level_list}
                  optionChangeHandler={questionLevelHanderChangeHandler}
                  selectedValue={questionLevel}
                /> */}
                <select
                  onChange={questionLevelHanderChangeHandler}
                  value={questionLevel}
                >
                  <option value="" disabled={true}>
                    select
                  </option>
                  {question_level_list.map((option, index) => {
                    return (
                      <option key={index} value={option.question_level}>
                        {option.question_level}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <Container className={"text-center"}>
              <Button color={"primary"} type={"submit"}>
                Update
              </Button>
              <Button color={"danger"} className={"ms-2"}>
                Cancel
              </Button>
            </Container>
          </form>
        </Card>
      </Card>
      <ToastContainer />
    </div>
  );
};
export default UpdateQuestion;
