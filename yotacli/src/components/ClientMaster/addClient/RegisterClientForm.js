import React, { useEffect, useState } from "react";
import InputField from "../../../ui/inputField/InputField";
import classes from "./RegisterClientForm.module.css";
import { useDispatch } from "react-redux";
import classes1 from "./HeaderItem.module.css";
import Button from "../../../ui/button/Button";
import { createClient } from "../../../redux/features/client/CreateClientSlice";

import axios from "axios";
import { headerContents } from "../../utils/Authentication";

const RegisterClientForm = (props) => {
  const [technologies, setTechnologies] = useState({});
  const [unitData, setUnitData] = useState("");
  const [selectedUnit, setSelectedUnit] = useState([]);
  const dispatch = useDispatch();

  const getTechnologyData = (e) => {
    setTechnologies({ ...technologies, [e.target.name]: e.target.value });
    console.log(technologies);
  };
  const handleUnitChange = (event) => {
    const eventData = event.target.value;

    setUnitData(eventData);

    getTechnologyData(event);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(technologies);
    dispatch(createClient(technologies));
    window.location.reload();
    alert("Client created successfully");
  };

  useEffect(() => {
    axios
      .get("/yota-api/technologies/", {
        headers:headerContents()
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
  return (
    <>
      <div className="row">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes1.boxtitle}>Add Client</h5>
          </div>

          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <form className="form-inline" onSubmit={handleOnSubmit}>
              <div className={classes1.btn}>
                <Button onClick={handleOnSubmit}>Add</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <hr />

      <div className="col-10 mt-4"></div>

      <div className="row align-items-end">
        <div className={`col-3 ${classes.inputName}`}>
          <div>
            <label for="inputTechnologyName" className="col-form-label">
              Name:
            </label>
          </div>
        </div>

        <div className={`col `}>
          <InputField>
            <input
              type="text"
              id="inputName"
              name="clientName"
              className={`form-control ${classes.inputField}`}
              onChange={getTechnologyData}
              aria-describedby="nameHelpInline"
              placeholder="Enter Client Name"
              style={{ width: "400px" }}
            />
          </InputField>
        </div>
      </div>

      <div className="row align-items-end">
        <div className={`col-3 mb-5 ${classes.inputName}`}>
          <label style={{ marginLeft: "32px" }} for="description">
            Description:
          </label>
        </div>

        <div className={`col mt-3 `}>
          <InputField>
            <textarea
              id="description"
              name="shortDescription"
              className={`form-control ${classes.inputField}`}
              onChange={getTechnologyData}
              aria-describedby="descriptionHelpInline"
              placeholder="Enter Client Description here... "
              style={{ width: "400px", height: "100px" }}
            ></textarea>
          </InputField>
        </div>
      </div>
      <div className="row align-items-end">
        <div className={`col-3 mt-4 mb-1 ${classes.inputName}`}>
          <label style={{ marginLeft: "30px" }} for="description">
            Technology:
          </label>
        </div>

        <div className={`col -3`}>
          <InputField>
            <select
              value={unitData}
              onChange={handleUnitChange}
              name="technology"
              style={{ width: "400px" }}
            >
              <option value="">Select Technology</option>
              {selectedUnit.map((unit, index) => (
                <option key={index} value={unit.name}>
                  {unit.name}
                </option>
              ))}
            </select>
          </InputField>
        </div>
      </div>
    </>
  );
};

export default RegisterClientForm;
