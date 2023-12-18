import React, { useEffect, useState } from "react";
import InputField from "../../../ui/inputField/InputField";
import classes from "./UpdateTechnologyForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateTech,
  createTech,
} from "../../../redux/features/technology/CreateTechSlice";
import classes1 from "../addTechnology/HeaderItem.module.css";
import axios from "axios";
import Button from "../../../ui/button/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { headerContents } from "../../utils/Authentication";

const UpdateTechnologyForm = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    id: "",
    name: "",
    shortDescription: "",
  };
  const [updateTechData, setUpdateTechData] = useState(initialState);
  useEffect(() => {
    if (id) {
      console.log("iidd==" + id);
      axios
        .get(`/yota-api/technologies/${id}`, {
          headers: headerContents()
        })
        .then((res) => {
          console.log("test data--" + res.data);
          setUpdateTechData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  console.log(updateTechData);

  const getNewTechData = (event) => {
    setUpdateTechData({
      ...updateTechData,
      [event.target.name]: event.target.value,
    });
    console.log(updateTechData);
  };

  const onHandleUpdate = async (event) => {
    event.preventDefault();
    console.log("Updated data", updateTechData);
    setUpdateTechData(updateTechData);
    dispatch(
      UpdateTech({
        id: updateTechData.id,
        name: updateTechData.name,
        shortDescription: updateTechData.shortDescription,
      })
    )
      .unwrap()
      .then((response) => {
        window.alert("Technology Successfully Updated");
     
        setUpdateTechData(initialState);
        navigate("/trainer/technologylist");
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };
  console.log("LASTT---" + updateTechData);
  return (
    <>
      <div className="row">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes1.boxtitle}>Update Technology</h5>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <form className="form-inline" onSubmit={onHandleUpdate}>
              <div className={classes1.btn}>
                <Button onSubmit={onHandleUpdate}>Update</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
     

     
      <div className="row align-items-end mt-5 mb-5">
        <div className={`col-3 ${classes.inputName}`}>
          <div>
            <label for="name" className="col-form-label">
              Name:
            </label>
          </div>
        </div>
        <div className={`col `}>
          <InputField>
            <input
              name="name"
              type="text"
              value={updateTechData.name}
              onChange={getNewTechData}
              id="name"
              className={`form-control ${classes.inputField}`}
              aria-describedby="name"
              style={{ width: "400px" }}
            />
          </InputField>
        </div>
        <div className="col" style={{ paddingBottom: "10px" }}>
          <span
            id="name"
            className="form-text"
            style={{ paddingBottom: "10px" }}
          ></span>
        </div>
      </div>
      <div className="row align-items-end ">
        <div className={`col-3 mb-3 ${classes.inputName}`}>
          <label for="shortDescription">Description:</label>
        </div>
        <div className={`col mt-3 `}>
          <InputField>
            <input
              type="textarea"
              onChange={getNewTechData}
              value={updateTechData.shortDescription}
              name="shortDescription"
              id="shortDescription"
              className={`form-control ${classes.inputField}`}
              aria-describedby="shortDescription"
              style={{ width: "400px", height: "100px" }}
            ></input>
          </InputField>
        </div>
        <div className="col" style={{ paddingBottom: "10px" }}>
          <span
            id="shortDescription"
            className="form-text"
            style={{ paddingBottom: "10px" }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default UpdateTechnologyForm;
