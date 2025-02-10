import Card from "../../components/Card/Card"
import { TableHeader } from "../../components/table-component/TableHeader";
import styles from "../../pages/assign-associates/AssignedAssociateList.module.css";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export const AssignedAssociateList = () => {
    const navigate = useNavigate();
    const { trainings } = useSelector((state) => state.trainings);
    const theadData = ["Sr No", "Emp Id", "Name", "Email ID", "Account Status", "Average % "];

    const showData = () => {
        return (
            <>
                <Card className={styles["training-list"]}>
                    <div>
                        <Button
                            variant="secondary"
                            size="sm"
                            style={{ marginRight: "100%", marginBottom: "5%"}}
                            onClick={() => navigate("/add-training")}
                            >
                            Back
                        </Button>
                    </div>
                    <div className={styles["header"]}>
                        <h6>{`Training Name: ${trainings.trainingName} | Total trainees: ${trainings.registeredInTraining} | Total Tests: 15 `}</h6>
                    </div>
                    <table className="table table-bordered table-striped table-hover mt-1">
                        <TableHeader theadData={theadData} />
                        <tbody>
                            {
                                trainings.assignTest.map((associate, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{associate.empId}</td>
                                        <td>{associate.fullName}</td>
                                        <td>{associate.emailId}</td>
                                        <td>{associate.accountStatus}</td>
                                        <td>{associate.avgPercentageMarks}</td>         
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Card>
            </>
        )
    }

    const showErrorMessage = () => {
        return (
            <div>
                <b>Training hasn't been assigned yet..</b>
            </div>
        )
    }

    return (
        <div>
            <h6>Assigned Training Associate List Update</h6>
            {
                trainings && trainings.assign
                    ? showData()
                    : showErrorMessage()
            }
        </div>
    )
}