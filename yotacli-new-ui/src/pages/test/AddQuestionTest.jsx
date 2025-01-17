import styles from "../test/AddQuestion.module.css"
import Card from "../../components/Card/Card";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTechnology } from "../../features/technology/technologyAction";
import { questionUnderTechnologyId } from "../../features/tests/testAction";
import { useNavigate } from "react-router-dom";
import ReviewQuestionContext from "../../app/ReviewQuestionContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddQuestionTest = () => {

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth.userData);
    const { technologies } = useSelector((state) => state.technologies);
    const question = useSelector((state) => state.tests.question);
    const [screenContain, setScreenContain] = useState('Add');
    const [selectAll, setSelectAll] = useState(false);
    const technologyId = useRef();
    const navigate = useNavigate();
    const { reviewQuestionJson,
        setReviewQuestionJsonValue,
        totalQuestionCount,
        easyQuestionCount,
        mediumQuestionCount,
        hardQuestionCount
    } = useContext(ReviewQuestionContext);


    useEffect(() => {
        if (token) {
            dispatch(fetchAllTechnology());
        }
    }, [token]);

    const questionByTechnology = () => {
        const techId = technologyId.current.value;
        dispatch(questionUnderTechnologyId(techId))
    }

    const handleChange = (event) => {
        const isChecked = event.target.checked;
        const value = JSON.parse(event.target.value);

        let newCheckedValues;
       if (isChecked ) {
            // If the checkbox is checked, add its value to the checkedValues array
            newCheckedValues = [...reviewQuestionJson, value];
        } else {
            // If the checkbox is unchecked, remove its value from the checkedValues object
            newCheckedValues = reviewQuestionJson.filter(item => item.id !== value.id);
        }
        setReviewQuestionJsonValue(newCheckedValues);
    }
    const handleSelectAll = () => {
        if (selectAll) {
            setReviewQuestionJsonValue([]);
        } else {
            setReviewQuestionJsonValue(question);
        }
        setSelectAll(!selectAll);
    };

    const redirectToReviewPage = () => {
        if (reviewQuestionJson.length === 0 && totalQuestionCount === 0) {
           // alert("You haven't selected any question yet. please select the question and move ahead.!!");
           toast.error("You haven't selected any question yet. please select the question and move ahead.!!",{ className: 'toast-info' });
            return;
        }
        navigate("/review-test");
    }

    const LoadScreenContain = () => {
        switch (screenContain) {
            case 'Add':
                return <AddFormLibrary />
            case 'Upload':
                return (
                    <div style={{ padding: "3%" }}>
                        <Card className={styles["fileContainer"]}>
                            <UploadQuestion />
                        </Card>
                    </div>
                )
            default:
                return <AddFormLibrary />
        }
    }


    const ButtonContain = () => {
        return (
            <>
                {/* button code */}
                <div style={{ padding: "10px" }}>
                    <Button type="submit"
                        variant="primary"
                        size="sm"
                        onClick={() => setScreenContain('Add')}>
                        Add From Library
                    </Button>
                    &nbsp;
                    &nbsp;

                    <Button type="submit"
                        variant="primary"
                        size="sm"
                        onClick={() => setScreenContain('Upload')}>
                        Upload
                    </Button>
                </div>
                {/* end button code */}
            </>
        )
    }

    const AddFormLibrary = () => {
        return (
            <div>
                {/* level code */}
                <div className="container text-center" style={{ fontStyle: "italic" }}>
                    <div className="row">
                        <hr></hr>
                        <div className="col-6">
                            <b>
                                Total Questions to be added - {totalQuestionCount > 0 ? totalQuestionCount : 0}
                            </b>
                        </div>
                        <div className="col-2">
                            <b>Easy - {easyQuestionCount > 0 ? easyQuestionCount : 0}</b>
                        </div>
                        <div className="col-2">
                            <b>Medium - {mediumQuestionCount > 0 ? mediumQuestionCount : 0}</b>
                        </div>
                        <div className="col-2">
                            <b>Hard - {hardQuestionCount > 0 ? hardQuestionCount : 0}</b>
                        </div>
                    </div>
                </div>
                <hr></hr>
                {/* end level code */}

                {/* technology Search */}
                <div className="container text-center mt-3" style={{ width: "60%" }}>
                    <div className="row">
                        <div className="col-3">
                            Technology:
                        </div>
                        <div className="col-6" style={{ float: "right" }}>
                            <select className="form-select form-select-sm"
                                aria-label="Small select example"
                                ref={technologyId}>
                                <option selected>----</option>
                                {
                                    technologies.map((response, index) => (
                                        <option value={response.id} key={index}>
                                            {response.technology}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col-3" style={{ float: "left" }}>
                            <Button variant="secondary" size="sm" onClick={questionByTechnology}>
                                show
                            </Button>
                        </div>
                    </div>
                </div>
                {/* end technlogy search */}

                {/* search box code */}
                {
                    question.length !== 0 ? (
                        <div className={styles["searchBoxContainer"]}>
                            <Card>
                                <div className="container text-center mt-2" style={{ padding: "10px" }}>
                                    <div className="row">
                                        <div className="col-4">
                                            <input className="form-control form-control-sm" type="text" placeholder="Search..." aria-label=".form-control-sm example" style={{ float: "left" }} />
                                        </div>
                                        <div className="col">
                                            <Button
                                                onClick={redirectToReviewPage}
                                                variant="primary"
                                                size="sm"
                                                style={{ float: "right" }}
                                            >
                                                Add Selected Ques.
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: "1%", marginTop: "-6px" }}>
                                    <table className="table table-bordered table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                     {/* added select All checkBox */}
                                                <div className="form-check" style={{ display: "inline-block" }}>
                                                    <input className="form-check-input" type="checkbox" id="selectAll" checked={selectAll} onChange={handleSelectAll} />
                                                </div>
                                                </th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Level</th>
                                                <th scope="col">Question</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                question.map((response, index) => (
                                                    <tr key={response.id}>
                                                        <td>
                                                            <div className="form-check" style={{ display: "inline-block" }}>
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id={` flexCheckDefault checkbox-${response.id}`}
                                                                    checked={reviewQuestionJson.some(item => item.id === response.id)}
                                                                    value={JSON.stringify(response)}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>{response.category.name}</td>
                                                        <td>{response.questionLevel}</td>
                                                        <td>{response.questionTitle}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                            <ToastContainer/>
                        </div>
                    )
                        : (
                            <div className={styles["custom-text-center"]}>
                                <b>The question has not been presented yet, you will get it based on the search results.</b>
                            </div>
                        )
                }
                {/* end search box code */}
            </div>
        )
    }

    const UploadQuestion = () => {
        return (
            <div style={{ padding: "5%" }}>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label style={{ float: "left" }}>Choose question paper</Form.Label>
                    <Form.Control type="file" size="lg" />
                </Form.Group>
                <div>
                    <Button
                        variant="secondary"
                        size="sm"
                        style={{ float: "left" }}>
                        Upload
                    </Button>
                </div>
            </div>
        )
    }


    return (
        <div>
            <div className={styles["textHeader"]}>
                <h6 style={{ marginTop: "1px" }}>Add Questions</h6>
            </div>

            <div className={styles["pageContainer"]}>
                <Card>
                    <ButtonContain />
                    <LoadScreenContain />
                </Card>
            </div>
        </div >
    )
}