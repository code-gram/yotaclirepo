import Button from "react-bootstrap/esm/Button";
import Card from "../../components/Card/Card";
import React from "react";
import { TableHeader } from "../../components/table-component/TableHeader";
import styles from "../training-performance-report/TPR.module.css"
import { ExportToExcel } from "../../components/excel-utils/ExcelUtils";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const TPR = () => {

    const theadData = ["Sr No", "Emp No", "Name", "Avg %", "Feedback"];
    const { trainings } = useSelector((state) => state.trainings);
    const navigate = useNavigate();

    const handleExportToExcel = () => {
       // ExportToExcel(trainingPerformanceDetails, 'TrainingPerformanceReport')
    }

    //Description limit 
    const descriptionLimit = (feedback) => {
        return feedback.split(" ").slice(0, 6).join(" ");
    };

    const handleClick = () =>{
        navigate("/associate-performance-report")
    }

    return (
        <div>
            <h6>Training Performance Report</h6>
            <Card className={styles["tpr-list"]}>
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
                <div className="row">
                    <div className="col-md-10">
                        <div className={styles["header"]}>
                        <h6>{`Training Name: ${trainings.trainingName} | Total trainees: ${trainings.registeredInTraining} | Total Tests: 15 `}</h6>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Button className={styles["button"]} variant="primary" size="sm"
                            onClick={handleExportToExcel}>
                            Export to excel
                        </Button>
                    </div>
                </div>

                <table className="table table-bordered table-striped table-hover mt-1">
                    <TableHeader theadData={theadData} />
                    <tbody>
                        {
                          trainings.assignTest.map((response, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{response.empId}</td>
                                    <td onClick={handleClick} className="clicke-name" style={{ cursor: "pointer" }}>{response.fullName}</td>
                                    <td>{response.avgPercentageMarks}</td>
                                    <td>{descriptionLimit(response.feedback)}
                                        &nbsp;<span><a className="text-primary"
                                            style={{ cursor: "pointer"}}>more</a>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Card>
            <style jsx>{`
                .clicke-name:hover {
                    color: blue;
                }
            `}</style>
        </div>
    )
}