import React, { useEffect, useState } from "react";
//import styless from "./ShowQuestion.module.css";
import styles from "./TestQuestions.module.css";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesUnderTechnologyById } from "../../features/category/categoryAction";
import {
  getAllQuestionsOfTest,
  questionByCategory,
  deleteQuestion,
} from "../../features/Question/questionAction";
import { fetchTestByTestId } from "../../features/associates/associateAction";
import { Link } from "react-router-dom";
import { EditIcon, DeleteIcon } from "../../components/icons/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TestQuestions = () => {
  const { userData } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.categories);
  const { questions } = useSelector((state) => state.questions);
  const  testQuestions  = useSelector((state) => state.questions.testQuestions);
  const { categoryquestions } = useSelector((state) => state.categoryquestions);
  const { technologies } = useSelector((state) => state.technologies);
  const [selectedCategory, setSelectedCategory] = useState();
  const { test } = useSelector((state) => state.associates);
  const { id } = useParams("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  //console.log("jsx file : "+testQuestions)
  console.log(id);


  useEffect(() => {
      if (userData.token) dispatch(fetchTestByTestId(id));
    }, []);
    console.log("Test Details: "+test)
  useEffect(() => {
    if (userData.token) {   
      dispatch(getAllQuestionsOfTest(id));
    }
  }, [userData]);
  const technologyes = technologies.filter((tech) => {
    return tech.id === id;
  });
console.log("Category Data",categories)
  const catName = categories.filter((data) => {
console.log("Data: "+ data.id)
    return data.id == selectedCategory ? data.name :
    "";
  });
  const CategoriesName = catName.map((data)=>{
      return data.name;
  });
  const handleQuestionByCategory = () => {
    //useEffect(() => {},[]);
    dispatch(questionByCategory({ catId: selectedCategory, techId: id }));
  };
  
  function handleDelete(data) {
    // dispatch(deleteQuestion({ quesId: data }));
    // toast("Question Delete Successfully!");
    // setTimeout(() => {
    //   navigate("/technology-list");
    // }, 2000);
  }
  return (
    <>
      {technologyes.map((tech) => {
        return (
          <h4 className="text-start" key={tech.id}>
            Question From {tech.technology} Technology
          </h4>
        );
      })}
      
      <div>
      <Button
          variant="secondary"
          size="sm"
          style={{ marginRight: "100%" }}
          onClick={() => navigate("/list-test")}
        >
         Back
        </Button>

        <h3>Test Name : {test?.testTitle}</h3>

      </div>
      
     
      <div className="mt-2">     
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Question</th>
              <th scope="col">Level</th>
              <th scope="col">Last Modified</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {testQuestions.length
              ? testQuestions.map((data, index) => {
                  return (
                    <tr key={data.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.questionTitle}</td>
                      <td>{data.questionLevel}</td>                                           
                      {data.updated_At != null ? (
                        <td>{data.updated_At}</td>
                      ) : (
                        <td>Not Modified</td>
                      )}
                      <td>
                        <p className="editDelete">
                          <Link aria-disabled="true"
                            className="nav-link"
                            to={`/UpdateQuestion/` + data.id}
                          >
                            <EditIcon />
                          </Link>
                          <button
                          disabled
                            style={{ border: "none" }}
                            onClick={
                              () => handleDelete(data.id)
                            }
                          >
                            <DeleteIcon />
                          </button>
                        </p>
                      </td>
                    </tr>
                  );
                })
              : questions.map((data, index) => {
               
                  return (
                    <tr key={data.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.questionTitle}</td>
                      <td>{data.questionLevel}</td>
                      {/* <td>{data.category.name}</td>  */}
                      {data.updated_At != null ? (
                        <td>{data.updated_At}</td>
                      ) : (
                        <td>Not Modified</td>
                      )}
                      <td>
                        <p className="editDelete">
                          <Link
                            className="nav-link"
                            to={`/UpdateQuestion/` + data.id}
                          >
                            <EditIcon />
                          </Link>
                          <button
                            style={{ border: "none" }}
                            onClick={
                              () => handleDelete(data.id)
                              // dispatch(deleteQuestion({ quesId: data.id }))
                            }
                          >
                            <DeleteIcon />
                          </button>
                        </p>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
};
export default TestQuestions;
