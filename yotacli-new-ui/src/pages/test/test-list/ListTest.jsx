import { useEffect, useRef, useState } from "react"
import Card from "../../../components/Card/Card"
import styles from '../../test/test-list/ListTest.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addTestToIndividualAssociate, addTestToTrainings, countAssociateToAddedTraining, getAllTest } from "../../../features/tests/testAction";
import { SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { getAllAssignedTraining, listTrainings } from "../../../features/training/trainingAction";
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ListTest = () => {
    const { userData } = useSelector(state => state.auth);
    const { testList } = useSelector(state => state.tests);
    console.log("tesList: ", testList)
    const trainings = useSelector((state) => state.trainings);
    const message = useSelector((state) => state.tests.message);
    const testIndividualMsg = useSelector((state) => state.tests.testIndividualMsg);
    const { assignedTraining } = useSelector((state) => state.trainings);

    const [open, setOpen] = useState(false);
    const [openAssignIndividual, setOpenAssignIndividual] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [userId, setUserId] = useState();
    const [userName, setUserName] = useState();

    const dispatch = useDispatch();
    const trainingId = useRef();
    const options = { day: "2-digit", month: "long", year: "numeric" };
    let testIds = localStorage.getItem("testId");

    console.log(testList);

    useEffect(() => {
        if (userData.token) {
            dispatch(getAllTest())
            dispatch(listTrainings());
            dispatch(getAllAssignedTraining());
        }
    }, []);

    const handleUserIdChange = (e) => {
        const selectedUserId = e.target.value;
        if (selectedUserId !== null) {
            setUserId(selectedUserId);
            const userNames = assignedTraining.find(user => user.userId === Number(selectedUserId));
            console.log(userNames)
            setUserName(userNames.userName);
        } else {
            setUserId("");
            setUserName("");
        }

    }

    const addTestToTraining = () => {
        const trainingIds = trainingId.current.value;
        if (testIds > 0 && trainingIds > 0) {
            dispatch(addTestToTrainings({ testId: testIds, trainingId: trainingIds }))
                .then(() => dispatch(getAllTest()))
                .catch((error) => error);
            setShowMessage(true)
        } else {
            toast.error("Something went wrong please try again!!", { className: 'toast-info' });
        }
    }

    const addTestIndividualAssociate = () => {
        const testIds = localStorage.getItem("testIdIndividual")
        console.log("testId", testIds)
        if (testIds !== null) {
            console.log("testing 1")
            dispatch(addTestToIndividualAssociate({ testId: testIds, userId: userId }))
                .then(() => dispatch(getAllTest()))
                .catch((error) => error);
            setShowMessage(true);
        } else {
            toast.error("Something went wrong please try again!!", { className: 'toast-info' });
        }
    }

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
                            <th scope="col">Invited</th>
                            <th scope="col">ShortListed</th>
                            <th scope="col">Created On</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Test Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(testList) && testList.filter(test => test.testStatus === 'APPROVED').map((response, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{response.testTitle}</td>
                                    <td>
                                        <p className="showquestion">
                                            <Link
                                                className="nav-link"
                                                to={`/test-question/` + response.id}
                                            >
                                                {response.totalQuestions}
                                            </Link>
                                        </p>

                                    </td>
                                    <td>{response.totalAssociateCount}</td>
                                    <td></td>
                                    <td>{response.createdAt}</td>
                                    <td>{response.endDate}</td>
                                    <td>{response.type}</td>
                                    <td>
                                        <a
                                            className="nav-link dropdown-toggle"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <SiGithubactions style={{ cursor: 'pointer', color: "blue", fontSize: "20px" }} />
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Clone Test
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" onClick={() => {
                                                    setOpen(true);
                                                    localStorage.setItem("testId", response.id)
                                                }}>
                                                    Assign to training
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" onClick={() => {
                                                    setOpenAssignIndividual(true)
                                                    localStorage.setItem("testIdIndividual", response.id)
                                                }}>
                                                    Assign to individual
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item"
                                                    to="/add-question-test"
                                                    onClick={() => localStorage.setItem("testId", response.id)}>
                                                    Add question
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Edit Test
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    View Questions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Extend
                                                </Link>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


                <Modal show={open} onHide={() => setOpen(false)}>
                    <Modal.Header>
                        <Modal.Title>Training list - Assign to training</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {
                                showMessage === true
                                    ? (message === 'Test successfully assigned to Training.'
                                        ? <p style={{ color: "green" }}>{message}</p>
                                        : <p style={{ color: "red" }}>{message}</p>)
                                    : ""
                            }
                        </div>

                        <div>
                            <label for="inputState" class="form-label">
                                Training Name
                            </label>
                            <Form.Select ref={trainingId}>
                                <option>--Select training that you want to assign--</option>
                                {
                                    Array.isArray(trainings.trainings) &&
                                    trainings.trainings.map((training, index) => (
                                        <option value={training.id}>
                                            {training.trainingName}
                                        </option>
                                    ))
                                }
                            </Form.Select>
                        </div>
                    </Modal.Body>
                    <br />
                    <Modal.Footer>
                        <Button
                            variant="primary"
                            size="sm"
                            className={styles["assign-button"]}
                            onClick={() => {
                                setOpen(false);
                                setShowMessage(false)
                            }}
                        >
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            className={styles["assign-button"]}
                            onClick={addTestToTraining}
                        >
                            Assign to training
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={openAssignIndividual} onHide={() => setOpenAssignIndividual(false)}>
                    <Modal.Header>
                        <Modal.Title>Test - Assign to individual</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {
                                showMessage === true
                                    ? (testIndividualMsg === 'Test successfully assigned to individual associate.'
                                        ? <p style={{ color: "green" }}>{testIndividualMsg}</p>
                                        : <p style={{ color: "red" }}>{testIndividualMsg}</p>)
                                    : ""
                            }
                        </div>
                        <div>
                            <Form.Select className="mt-1" onChange={handleUserIdChange}>
                                <option>Select Employee ID</option>
                                {
                                    Array.isArray(assignedTraining) && assignedTraining.map((response, index) => (
                                        <option value={response.userId}>{response.userId}</option>
                                    ))
                                }
                            </Form.Select>

                            <br />
                            <Form.Select>
                                <option>{userName || 'Select User Name'}</option>
                            </Form.Select>
                        </div>

                        <br />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="primary"
                            size="sm"
                            className={styles["assign-button"]}
                            onClick={() => {
                                setOpenAssignIndividual(false);
                                setUserId("");
                                setUserName("");
                                setShowMessage(false)
                            }}
                        >
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            className={styles["assign-button"]}
                            onClick={addTestIndividualAssociate}
                        >
                            Assign to individual
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card>
            <ToastContainer />
        </div>
    )
}

