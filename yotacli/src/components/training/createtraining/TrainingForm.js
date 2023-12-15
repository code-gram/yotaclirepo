import React, { Fragment, useEffect } from "react";
import InputField from "../../../ui/inputField/InputField";
import classes from "./TrainingForm.module.css";
import { useState } from "react";
import { training, useDispatch } from "react-redux";
import { createTraining } from "../../../redux/features/Training/CreateTrainingSlice";
import Button from "../../../ui/button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { getAuthToken } from "../../utils/Authentication";
import {Dropdown} from 'react-bootstrap'


const TrainingForm = (props) => {
  const [trainings, setTrainings] = useState({});
  const dispatch = useDispatch();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedUnit, setSelectedUnit] = useState([]);
  const [unitData, setUnitData] = useState("");
  const [selectedCompetency, setSelectedCompetency] = useState([]);
  const [competencyData, setCompetencyData] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [selectedTechnologyNames, setSelectedTechnologyNames] = useState([]);
  const [selectedTrainingtype, setSelectedTrainingtype] = useState([]);
  const [trainingtypeData, setTrainingtypeData] = useState("");
  const token = getAuthToken();
  useEffect(() => {
    // Assuming 'token' is defined elsewhere
    axios.get("/yota-api/technologies/", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
        },
    })
    .then((resp) => {
        if (resp.status === 200 && resp.data && resp.data.length) {
            let technologyData = resp.data;
            let technologyDataArray = technologyData.map(item => ({
id: item.id,
name: item.name,
                selected: false
            }));
            setSelectedTechnology(technologyDataArray);
        }
    })
    .catch((err) => console.log(err));
}, []);

const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
        setSelectedTechnologyNames(prevState => [...prevState, value]);
    } else {
        setSelectedTechnologyNames(prevState => prevState.filter(name => name !== value));
    }
};


  useEffect(() => {
    axios
      .get("/yota-api/masters/unit", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((resp) => {
        if (resp.status == 200) {
          if (resp.data && resp.data.length) {
            let unitData = resp.data;
            let unitDataArray = [];
            for (let i = 0; i < unitData.length; i++) {
              let countObj = {
                id: unitData[i].id,
                name: unitData[i].name,
              };
              unitDataArray.push(countObj);
            }
            setSelectedUnit(unitDataArray);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/yota-api/masters/competency", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((resp) => {
        if (resp.status == 200) {
          if (resp.data && resp.data.length) {
            let competencyData = resp.data;
            let competencyDataArray = [];
            for (let i = 0; i < competencyData.length; i++) {
              let countObj = {
                id: competencyData[i].id,
                name: competencyData[i].name,
              };
              competencyDataArray.push(countObj);
            }
            setSelectedCompetency(competencyDataArray);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/yota-api/masters/training-type", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((resp) => {
        if (resp.status == 200) {
          if (resp.data && resp.data.length) {
            let trainingtypeData = resp.data;
            let trainingtypeDataArray = [];
            for (let i = 0; i < trainingtypeData.length; i++) {
              let countObj = {
                id: trainingtypeData[i].id,
                name: trainingtypeData[i].name,
              };
              trainingtypeDataArray.push(countObj);
            }
            setSelectedTrainingtype(trainingtypeDataArray);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const getTrainingData = (e) => {
    setTrainings({ ...trainings, [e.target.name]: e.target.value });
    console.log(trainings);
  };

  const calculateTrainingName = () => {
    const mergedName = `${unitData}--${trainingtypeData}-${competencyData}-(${selectedTechnologyNames.join(
      ", "
    )})-${selectedMonth}-${selectedYear}`;
    return mergedName;
  };

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i
  );

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnitData(event.target.value);
  };

  const handleCompetencyChange = (event) => {
    setCompetencyData(event.target.value);
  };

  const handleTrainingtypeChange = (event) => {
    setTrainingtypeData(event.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Training Request Payload:::>>" + trainings);
    trainings["trainingName"] = calculateTrainingName();
    trainings["userName"] = "Pankaj Sharma";
    dispatch(createTraining(trainings));
    toast("Training created sucessfully!!");
    window.location.href = "/trainer/traininglist";
  };
  return (
    <Fragment>
      <ToastContainer />
      <div className="row d-flex justify-content-center">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes.boxtitle}>Request Training </h5>
          </div>
          <div className="col-6 col-lg-4">
            <form className="form-inline" onSubmit={handleOnSubmit}>
              <div className={classes.btn}>
                <Button
                  className={classes.button}
                  type="submit"
                  onClick={handleOnSubmit}
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <form className="row gy-1 form-control-md ">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={` col-6 ${classes.inputName}`}>
              <td>
                <div>
                  <label
                    className={classes.label}
                    style={{ marginTop: "40px", marginLeft: "63px" }}
                  >
                    Unit:&nbsp;
                  </label>
                </div>
              </td>
              <td>
                <div
                  className={`col-12`}
                  style={{ marginTop: "10px", marginLeft: "149px" }}
                >
                  <InputField>
                    <select
                      value={unitData}
                      onChange={handleUnitChange}
                      style={{ width: "302px" }}
                    >
                      <option value="">Select Unit</option>
                      {selectedUnit.map((unit, index) => (
                        <option key={index} value={unit.name}>
                          {unit.name}
                        </option>
                      ))}
                    </select>
                  </InputField>
                </div>
              </td>
            </div>
          </div>














          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={`col-6 ${classes.inputName}`}>
                <div>
                    <label className={classes.label} style={{ marginTop: "40px", marginLeft: "63px" }}>
                        Technology:
                    </label>
                </div>
                <div className={`col-12`} style={{ marginTop: "10px", marginLeft: "149px" }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select Technologies
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            {selectedTechnology.map((technology, index) => (
                                <div key={index} className="dropdown-item">
                                    <input
                                        type="checkbox"
                                        id={technology.id}
                                        value={technology.name}
                                        checked={selectedTechnologyNames.includes(technology.name)}
                                        onChange={handleCheckboxChange}
                                    />
<label for={technology.id}>{technology.name}</label>
                                </div>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>



            <div
              className={`col-6 ${classes.inputName}`}
              style={{ marginTop: "25px" }}
            >
              <td>
                <div>
                  <label
                    className={classes.label}
                    style={{ marginTop: "10px" }}
                  >
                    Competency:&nbsp;
                  </label>
                </div>
              </td>
              <td>
                <div className={`col-12`} style={{ marginTop: "10px" }}>
                  <InputField>
                    <select
                      value={competencyData}
                      onChange={handleCompetencyChange}
                      style={{ width: "319px" }}
                    >
                      <option value="">Select Competency</option>
                      {selectedCompetency.map((competency, index) => (
                        <option key={index} value={competency.name}>
                          {competency.name}
                        </option>
                      ))}
                    </select>
                  </InputField>
                </div>
              </td>
            </div>
          </div>

















          
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={`col-6 ${classes.inputName}`}>
              <td>
                <div>
                  <label
                    className={classes.label}
                    style={{ marginTop: "10px", marginLeft: "58px" }}
                  >
                    Training Type:&nbsp;
                  </label>
                </div>
              </td>
              <td>
                <div
                  className={`col-12`}
                  style={{ marginTop: "19px", marginLeft: "91px" }}
                >
                  <InputField>
                    <select
                      value={trainingtypeData}
                      onChange={handleTrainingtypeChange}
                      style={{ width: "302px" }}
                    >
                      <option value="">Select Training Type</option>
                      {selectedTrainingtype.map((trainingtype, index) => (
                        <option key={index} value={trainingtype.name}>
                          {trainingtype.name}
                        </option>
                      ))}
                    </select>
                  </InputField>
                </div>
              </td>
            </div>
            <div
              className={`col-6 ${classes.inputName}`}
              style={{ marginTop: "10px" }}
            >
              <td>
                <div>
                  <label
                    className={classes.label}
                    style={{ marginTop: "10px" }}
                  >
                    Month & Year:
                  </label>
                </div>
              </td>
              <td>
                <div className={`col-12`} style={{ marginTop: "10px" }}>
                  <tr>
                    <td>
                      <InputField>
                        <select
                          value={selectedMonth}
                          onChange={handleMonthChange}
                          style={{ width: "150px" }}
                        >
                          <option value="">Select Month</option>
                          {months.map((month, index) => (
                            <option key={index} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                      </InputField>
                    </td>
                    <td>&nbsp;</td>
                    <td>
                      <InputField>
                        <select
                          value={selectedYear}
                          onChange={handleYearChange}
                          style={{ width: "158px" }}
                        >
                          <option value="">Select Year</option>
                          {years.map((year, index) => (
                            <option key={index} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </InputField>
                    </td>
                  </tr>
                </div>
              </td>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "14px" }}
          >
            <div className={`col-6 ${classes.inputName}`}>
              <td>
                <div style={{ marginLeft: "40px" }}>
                  <label for="TrainingName" className={classes.label}>
                    Training Name:
                  </label>
                </div>
              </td>
              <td>
                <div
                  className={`col-12`}
                  style={{ marginTop: "10px", marginLeft: "103px" }}
                >
                  <InputField>
                    <input
                      type="text"
                      value={calculateTrainingName()}
                      name="trainingName"
                      className={classes.InputField}
                      id="TrainingName"
                      style={{ width: "337px", marginBottom: "0px" }}
                      disabled
                    />
                  </InputField>
                </div>
              </td>
            </div>
          </div>
          <div style={{ marginTop: "14px" }}>
            <div>
              <td>
                <div className={`col-12`} style={{ marginTop: "10px" }}>
                  <label
                    for="TrainingDescription"
                    className={classes.label}
                    style={{ marginLeft: "63px" }}
                  >
                    Description:
                  </label>
                </div>
              </td>
              <td>
                <div
                  className={`col-12`}
                  style={{ marginTop: "10px", marginLeft: "17px" }}
                >
                  <textarea
                    style={{
                      marginLeft: "99px",
                      width: "810px",
                      height: "65px",
                    }}
                    name="trainingDescription"
                    onChange={getTrainingData}
                    className={`form-control ${classes.textArea} ${classes.InputField}`}
                    id="TrainingDescription"
                    rows="3"
                  ></textarea>
                </div>
              </td>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={` col-6 ${classes.inputName}`}>
              <td>
                <div>
                  <label
                    for="StartDate"
                    className={classes.label}
                    style={{ marginTop: "24px", marginLeft: "63px" }}
                  >
                    Start Date:&nbsp;
                  </label>
                </div>
              </td>
              <td>
                <div
                  className={`col-6 ${classes.inputName}`}
                  style={{ marginTop: "10px", marginLeft: "115px" }}
                >
                  <InputField>
                    <input
                      type="date"
                      style={{ width: "300px" }}
                      name="startDate"
                      onChange={getTrainingData}
                      className={classes.InputField}
                      id="StartDate"
                      required
                    />
                  </InputField>
                </div>
              </td>
            </div>
            <div
              className={`col-6 ${classes.inputName}`}
              style={{ marginTop: "10px", marginLeft: "6px" }}
            >
              <td>
                <div>
                  <label
                    for="EndDate"
                    className={classes.label}
                    style={{ marginTop: "10px" }}
                  >
                    End Date:&nbsp;
                  </label>
                </div>
              </td>
              <td>
                <div
                  className={`col-6`}
                  style={{ marginTop: "10px", marginLeft: "24px" }}
                >
                  <InputField>
                    <input
                      type="date"
                      style={{ width: "319px" }}
                      name="endDate"
                      onChange={getTrainingData}
                      className={classes.InputField}
                      id="EndDate"
                      required
                    />
                  </InputField>
                </div>
              </td>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default TrainingForm;
