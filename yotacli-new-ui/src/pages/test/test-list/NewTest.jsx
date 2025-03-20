import { useEffect, useRef, useState } from "react";
import Card from "../../../components/Card/Card";
import styles from '../../test/test-list/ListTest.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getAllTest } from "../../../features/tests/testAction";
import { SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";
import { getAllAssignedTraining, listTrainings } from "../../../features/training/trainingAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button } from "react-bootstrap";


const NewTest = () => {
    const { userData } = useSelector(state => state.auth);
    const { testList } = useSelector(state => state.tests);
    const trainings = useSelector((state) => state.trainings);
    const message = useSelector((state) => state.tests.message);
    const testIndividualMsg = useSelector((state) => state.tests.testIndividualMsg);
    const { assignedTraining } = useSelector((state) => state.trainings);

    const [open, setOpen] = useState(false);
    const [openAssignIndividual, setOpenAssignIndividual] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [feedback, setFeedback] = useState("");

    const dispatch = useDispatch();
    const trainingId = useRef();
    const options = { day: "2-digit", month: "long", year: "numeric" };
    let testIds = localStorage.getItem("testId");

    useEffect(() => {
        if (userData.token) {
            dispatch(getAllTest());
            dispatch(listTrainings());
            dispatch(getAllAssignedTraining());
        }
    }, [dispatch, userData.token]);

    const handleRejectClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setFeedback("");
    };

    const handleAddFeedback = () => {
        // Handle the feedback submission logic here
        console.log("Feedback:", feedback);
        setShowModal(false);
        setFeedback("");
    };

    return (
        <div>
            <h6>Test List</h6>
            <Card className={styles["test-list"]}>
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Test Title</th>
                            <th scope="col">Total Question</th>
                            <th scope="col">Created On</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Test Type</th>
                            <th scope="col">Test Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(testList) && testList.filter(test => test.testStatus === 'PENDING').map((response, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{response.testTitle}</td>
                                <td>
                                    <p className="showquestion">
                                        <Link className="nav-link" to={`/test-question/` + response.id}>
                                            {response.totalQuestions}
                                        </Link>
                                    </p>
                                </td>
                                <td>{response.createdAt}</td>
                                <td>{response.endDate}</td>
                                <td>{response.type}</td>
                                <td>{response.testStatus}</td>
                                <td>
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <SiGithubactions style={{ cursor: 'pointer', color: "blue", fontSize: "20px" }} />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link className="dropdown-item">Review Test</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item">Approve Test</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" onClick={handleRejectClick}>Reject Test</Link>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reject Test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea
                        className="form-control"
                        rows="10"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Enter your feedback here"
                    ></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAddFeedback}>
                        Add Feedback
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </div>
    );
};

export default NewTest;