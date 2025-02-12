import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const AssosciatePerformanceReport = () =>{
    const location = useLocation();
    const { response } = location.state || {};
    const navigates = useNavigate();

    const handleBack = () =>{
        navigates("/training-performance-report")
    }

    return (
        <div>
            <h3>Associate Performance Report</h3>
            {response ? (
                <div className="container mt-4">
                    <div className="border p-4">
                        <div className="d-flex flex-column align-items-start">
                        <Button
                            variant="secondary"
                            size="sm"
                            style={{ float: "left"}}
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                        </div>
                    
                        <div className="d-flex flex-column align-items-start mt-4">
                            <h5>{response.fullName}</h5>
                            <p><b>Average: </b><strong>{response.avgPercentageMarks}</strong></p>
                            <p><b>Trainer Observation: </b>{response.feedback}</p>
                        </div>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Sr No</th>
                        <th scope="col">Test Name</th>
                        <th scope="col">Maximum Mark</th>
                        <th scope="col">Obtained Mark</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>React Basics</td>
                        <td>20</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>props and state</td>
                        <td>20</td>
                        <td>12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
                <p>No data available.</p>
            )}
            
        </div>
    );
};

export default AssosciatePerformanceReport;