import Button from "react-bootstrap/esm/Button";
import Card from "../../components/Card/Card";
import { TableHeader } from "../../components/table-component/TableHeader";
import styles from "../training-performance-report/TPR.module.css"
import { ExportToExcel } from "../../components/excel-utils/ExcelUtils";
import { useNavigate } from "react-router-dom"

export const TPR = () => {

    const theadData = ["Sr No", "Emp No", "Name", "Email", "React Basic", "Component", "Avg %", "Feedback"];

    const navigates = useNavigate();

    const trainingPerformanceDetails = [
        {
            "empNo": 1010,
            "name": "Mayuri Mundada",
            "email": "mayuri.mundada@yash.com",
            "reactBasic": 5,
            "component": 10,
            "avg": "30%",
            "feedback": "its performance is too good"
        },
        {
            "empNo": 1011,
            "name": "Gauri Mundada",
            "email": "gauri.mundada@yash.com",
            "reactBasic": 5,
            "component": 10,
            "avg": "30%",
            "feedback": "its performance is not good as well as did not attended seaction"
        }
    ]

    const handleExportToExcel = () => {
        ExportToExcel(trainingPerformanceDetails, 'TrainingPerformanceReport')
    }

    //Description limit 
    const descriptionLimit = (feedback) => {
        return feedback.split(" ").slice(0, 6).join(" ");
    };

    const handleClick = () =>{
        navigates("/associate-performance-report")
    }

    return (
        <div>
            <h6>Training Performance Report</h6>
            <Card className={styles["tpr-list"]}>
                <div className="row">
                    <div className="col-md-10">
                        <div className={styles["header"]}>
                            <h6>{`Training Name: React.js | Total trainees: 5 | Total Tests: 15 `}</h6>
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
                            trainingPerformanceDetails.map((response, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{response.empNo}</td>
                                    
                                    <td onClick={handleClick} className="clicke-name" style={{ cursor: "pointer" }}>{response.name}</td>
                                    
                                    <td>{response.email}</td>
                                    <td>{response.reactBasic}</td>
                                    <td>{response.component}</td>
                                    <td>{response.avg}</td>
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