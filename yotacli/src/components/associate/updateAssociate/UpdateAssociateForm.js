import React, { useEffect, useState } from "react";
import Button from "../../../ui/button/Button";
import InputField2 from "../../../ui/inputField2/InputField2";
import classes from "./UpdateAssociateForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { UpdateAssociate } from "../../../redux/features/associate/UpdateAssociateSlice";
import { headerContents } from "../../utils/Authentication";

const UpdateAssociateForm = () => {
  const nevigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const initialState = {
    id: "",
    emailId: "",
    password: "",
  };

  const [updateAssociateData, setUpdateAssociateData] = useState(initialState);
  useEffect(() => {
    if (id) {
      axios
        .get(`/yota-api/associates/${id}`, {
          headers: headerContents(),
        })
        .then((res) => {
          console.log(res.data);
          setUpdateAssociateData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  console.log(updateAssociateData);

  const newAssociateData = (e) => {
    setUpdateAssociateData({
      ...updateAssociateData,
      [e.target.name]: e.target.value,
    });
    console.log(updateAssociateData);
  };

  const handleOnUpdate = async (e) => {
    e.preventDefault();
    console.log("updated data ", updateAssociateData);
    setUpdateAssociateData(updateAssociateData);
    dispatch(
      UpdateAssociate({
        id: updateAssociateData.id,

        emailId: updateAssociateData.emailId,
        password: updateAssociateData.password,
      })
    )
      .unwrap()
      .then((response) => {
        window.alert("Associate Successfully Updated");
        setUpdateAssociateData(initialState);
        nevigate("/trainer/associatelist");
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };
  console.log("LASTT---" + updateAssociateData);
  return (
    <>
      <div className="row">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes.boxtitle}>Update Associate</h5>
          </div>

          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <form className="form-inline" onSubmit={handleOnUpdate}>
              <div className={classes.btn}>
                <Button type="submit">Update</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.form}>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
            <h6>
              <b>Email ID</b>
            </h6>
            <InputField2>
              <input
                id="emailId"
                name="emailId"
                value={updateAssociateData.emailId}
                onChange={newAssociateData}
                className={classes.inputField}
                type="email"
                aria-label="emailId"
              />
            </InputField2>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
            <h6>
              <b>Password</b>
            </h6>
            <InputField2>
              <input
                id="password"
                name="password"
                value={updateAssociateData.password}
                onChange={newAssociateData}
                className={classes.inputField}
                type="password"
                aria-label="password"
              />
            </InputField2>
          </div>
        </div>
      </div>
      <div className={classes.form}>
        <div className="row"></div>
      </div>
      <div className={classes.form}>
        <div className="row"></div>
      </div>
    </>
  );
};

export default UpdateAssociateForm;
