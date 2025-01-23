import Card from "../../../components/Card/Card";
import styles from "../Questions.module.css";
import { AddIcon, UploadIcon } from "../../../components/icons/Icons";
import { SelectComponent } from "../../../components/select-component/SelectComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllTechnology } from "../../../features/technology/technologyAction";
import { Container, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  uploadQuestion,
  downloadQuestionTemplate,
  uploadQuestionByForm,
} from "../../../features/uploadQuestions/uploadQuestion";

export const AddQuestion = () => {
  const dispatch = useDispatch();
  const { technologies } = useSelector((state) => state.technologies);
  const { token } = useSelector((state) => state.auth.userData);
  const downloadedTemplateContentDetails = useSelector(
    (state) => state.uploadQuestion
  );
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState(null);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [technology, setTechnology] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");
  const [currentOption, setCurrentOption] = useState(null);
  const [questionLevel, setQuestionLevel] = useState(null);
  const [questionTitle, setQuestionTitle] = useState(null);
  const [option_A, setOption_A] = useState(null);
  const [option_B, setOption_B] = useState(null);
  const [option_C, setOption_C] = useState(null);
  const [option_D, setOption_D] = useState(null);
  const navigate = useNavigate();
  const [newQuestion, setNewQuestion] = useState({
    questionTitle: "",
    correctAnswer: "",
    option_A: "",
    option_B: "",
    option_C: "",
    option_D: "",
    questionLevel: "",
  });

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

  function technologyChangeHandler(event) {
    setSelectedTechnology(event.target.value);
    setSelectedCategory("");
  }

  function categoryChangeHandler(event) {
    setSelectedCategory(event.target.value);
  }

  function currentOptionHanderChangeHandler(event) {
    setCurrentOption(event.target.value);
  }

  function questionLevelHanderChangeHandler(event) {
    setQuestionLevel(event.target.value);
  }

  function addTechnologyEventHandler(event) {
    event.preventDefault();
    navigate("/technology-list");
  }

  function addCategoryEventHandler(event) {
    event.preventDefault();
    if (selectedTechnology) {
      let technologyId = Number(selectedTechnology);
      navigate("/addCategory/" + technologyId)
      getCategoriesByTechnology(technologyId);
    }else{
      toast.error("Please select technology from the Technology List.",{ className: 'toast-info' })
    }
  }

  useEffect(() => {
    if (token) {
      dispatch(fetchAllTechnology());
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (selectedTechnology) {
      const catArr = technologies
        .filter((technology) => technology.id === Number(selectedTechnology))
        .map((tech) => tech.categories)
        .flatMap((cat) => cat);

      setCategories(catArr.length > 0 ? catArr : null);
      setSelectedCategory(null);
    }
  }, [selectedTechnology]);

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
    dispatch(
      uploadQuestionByForm({
        data,
        techId: selectedTechnology,
        catId: selectedCategory,
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

    toast.success("Question Addeed Successfully!",{ className: 'toast-info' });
    setTimeout(() => {
      navigate("/technology-list");
    }, 5000);
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTechnologyChange = (event) => {
    setTechnology(event.target.value);
    getCategoriesByTechnology(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleModalUploadTrainingButton = () => {
    setOpen(true);
  };

  const handleSubmitUploadTrainingButton = () => {
    let data = {
      file: file,
      techId: technology,
      catId: category,
    };
    if (file) {
      dispatch(
        uploadQuestion({ file: file, techId: technology, catId: category })
      );
    }

    setCategory("");
    setTechnology("");
    setFile(null);

    setOpen(false);
  };

  function getCategoriesByTechnology(id) {
    const data = technologies.find((item) => item.id == id);
    setCategoryList(data.categories);
  }

  const handleDownloadTemplate = () => {
    dispatch(downloadQuestionTemplate({}));
  };

  return (
    <div>
      <Card className={styles["card-container"]}>
        <Container
          direction="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <div
            onClick={handleDownloadTemplate}
            style={{
              paddingRight: "20px",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            Download Template
          </div>
          <Button
            color={"primary"}
            onClick={handleModalUploadTrainingButton}
            title="Upload Question"
          >
            <UploadIcon color={"#ffffff"} title="Upload Question" /> Upload
            Questions
          </Button>
        </Container>
        <p className={styles["page-title"]}>Add New Question</p>
        <Card className={styles["form-container"]}>
          <form onSubmit={addNewQuestionHandler}>
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
            </div>
            <div className={styles["form-group-question"]}>
              <label htmlFor="question-title">
                Question
                <span className={styles["required-span"]}> *</span>
              </label>
            </div>
            <div className={styles["form-group-question"]}>
              <textarea
                rows={8}
                cols={80}
                name="questionTitle"
                value={questionTitle}
                onChange={(event) => setQuestionTitle(event.target.value)}
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="question-title">
                Options
                <span className={styles["required-span"]}> *</span>
              </label>
            </div>
            <div className={styles["form-group"]}>
              <textarea
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
              />
            </div>
            <div className={styles["form-group"]}>
              <textarea
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
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="question-title">
                Choose Correct Option
                <span className={styles["required-span"]}> *</span>
              </label>
              <div className={styles["select-icon-group"]}>
                <SelectComponent
                  name="currentOption"
                  width={"select-dropdown"}
                  id="currentoption"
                  options={correct_options_list}
                  dataFieldName={"current_Option"}
                  keyFieldName={"id"}
                  valueFieldName={"current_Option"}
                  optionChangeHandler={currentOptionHanderChangeHandler}
                  selectedValue={currentOption}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="question-title">
                Question Level
                <span className={styles["required-span"]}> *</span>
              </label>
              <div className={styles["select-icon-group"]}>
                <SelectComponent
                  name="questionLevel"
                  width={"select-dropdown"}
                  dataFieldName={"question_level"}
                  keyFieldName={"id"}
                  valueFieldName={"question_level"}
                  id="queslevel"
                  options={question_level_list}
                  optionChangeHandler={questionLevelHanderChangeHandler}
                  selectedValue={questionLevel}
                  defaultValue={""}
                />
              </div>
            </div>
            <Container className={"text-center"}>
              <Button color={"primary"} type={"submit"}>
                {/* <Link className="nav-link" to="/add-question"> */}
                Add
                {/* </Link> */}
              </Button>
              <Button color={"danger"} className={"ms-2"}>
                Cancel
              </Button>
            </Container>
          </form>
        </Card>
      </Card>
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Question Bank
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mr-4">
          <div>
            <div className="form-group row mb-1">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-4 col-form-label mt-0"
              >
                Technology
              </label>
              <div className="col-sm-8">
                <div className="technologyDrop">
                  <select
                    className="form-select form-select-sm w-90 mt-1"
                    aria-label=".form-select-sm example"
                    onChange={handleTechnologyChange}
                  >
                    <option value="" disabled selected>
                      Select Technology
                    </option>
                    {technologies &&
                      technologies.map((technologies, index) => (
                        <option key={index} value={technologies.id}>
                          {technologies.technology}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group row mb-1">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-4 col-form-label mt-0"
              >
                Categories
              </label>
              <div className="col-sm-8">
                <div className="technologyDrop">
                  <select
                    className="form-select form-select-sm w-90 mt-1"
                    aria-label=".form-select-sm example"
                    onChange={handleCategoryChange}
                  >
                    <option value="" disabled selected>
                      Select Category
                    </option>
                    {categoryList &&
                      categoryList.map((tech, index) => (
                        <option key={index} value={tech.id}>
                          {tech.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group row ">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-4 col-form-label mt-0"
              >
                Upload File
              </label>
              <div className="col-sm-8 mt-1">
                <input type="file" onChange={handleFileChange} />
              </div>
            </div>
          </div>

          <button
            className="submitt-button btn btn-primary"
            type="submit"
            onClick={handleSubmitUploadTrainingButton}
            style={{ borderRadius: "revert-layer", marginLeft: "390px" }}
            disabled={!file}
          >
            Submit
          </button>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </div>
  );
};