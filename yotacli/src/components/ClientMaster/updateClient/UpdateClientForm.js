import React, { useEffect, useState } from "react";
import InputField from "../../../ui/inputField/InputField";
import classes from "./RegisterClientForm.module.css";
import { useDispatch } from "react-redux";
import classes1 from "./HeaderItem.module.css";
import Button from "../../../ui/button/Button";
import { updateClient } from "../../../redux/features/client/CreateClientSlice";
import Select from "react-select";
import axios from "axios";
import { useParams } from "react-router";
import { headerContents } from "../../utils/Authentication";

const UpdateClientForm = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const initialState = {
    clientId: "",
    clientName: "",
    shortDescription: "",
    technology: "",
  };

  const [updateClientData, setUpdateClientData] = useState(initialState);

  useEffect(() => {
    if (id) {
      axios
        .get(`/yota-api/clients/${id}`, {
          headers: headerContents(),
        })
        .then((res) => {
          console.log(" Get data By Id  -" + res.data);
          setUpdateClientData(res.data);
        });
    }
    axios
      .get("/yota-api/technologies/", {
        headers: headerContents(),
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

  const onHandleUpdate = async (event) => {
    event.preventDefault();

    setUpdateClientData(updateClientData);

    window.location.reload(false);
    dispatch(
      updateClient({
        clientId: updateClientData.clientId,
        clientName: updateClientData.clientName,
        shortDescription: updateClientData.shortDescription,
        technology: technologies,
      })
    )
      .unwrap()
      .then((response) => {
        window.alert("Client Successfully Updated");
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  const [technologies, setTechnologies] = useState({});

  const getTechnologyData = (e) => {
    setUpdateClientData({
      ...updateClientData,
      [e.target.name]: e.target.value,
    });
  };

  const [unitData, setUnitData] = useState("");
  const [selectedUnit, setSelectedUnit] = useState([]);

  const handleUnitChange = (event) => {
    const eventData = event.target.value;

    setTechnologies(eventData);

    getTechnologyData(event);
  };

  useEffect(() => {
    axios
      .get("/yota-api/technologies/", {
        headers: headerContents(),
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
            <h5 className={classes1.boxtitle}>Update Client</h5>
          </div>

          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <form className="form-inline" onSubmit={onHandleUpdate}>
              <div className={classes1.btn}>
                <Button onClick={onHandleUpdate}>Update</Button>
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
            <label for="clientName" className="col-form-label">
              Name:
            </label>
          </div>
        </div>

        <div className={`col `}>
          <InputField>
            <input
              type="text"
              name="clientName"
              value={updateClientData.clientName}
              onChange={getTechnologyData}
              className={`form-control ${classes.inputField}`}
              id="clientName"
              required
            />
          </InputField>
        </div>
      </div>

      <div className="row align-items-end">
        <div className={`col-3 mb-5 ${classes.inputName}`}>
          <label style={{ marginLeft: "32px" }} for="shortDescription">
            Description:
          </label>
        </div>

        <div className={`col mt-3 `}>
          <InputField>
            <textarea
              value={updateClientData.shortDescription}
              id="shortDescription"
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
        <div className={`col-3 mb-4 mb-1 ${classes.inputName}`}>
          <label style={{ marginLeft: "30px" }} for="technology">
            Technology:
          </label>
        </div>

        <div className={`col -3`}>
          <InputField>
            <select
              id="technology"
              onChange={handleUnitChange}
              style={{ width: "400px" }}
            >
              <option>Select Technology</option>
              {selectedUnit.map((unit, index) => (
                <option
                  key={index}
                  value={unit.name}
                  selected={
                    unit.name == updateClientData.technology ? "selected" : ""
                  }
                >
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

export default UpdateClientForm;
