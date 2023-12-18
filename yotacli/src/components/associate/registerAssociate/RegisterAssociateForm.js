import React, { useState } from "react";
import InputField2 from "../../../ui/inputField2/InputField2";
import classes from "./RegisterAssociateForm.module.css";
import { registerAssociate } from "../../../redux/features/associate/RegisterAssociateSlice";
import { useDispatch } from "react-redux";
import Button from "../../../ui/button/Button";
import classes1 from "./HeaderItem.module.css";
import { useNavigate } from "react-router-dom";

const RegisterAssociateForm = (props) => {
  const nevigate = useNavigate();
  const [associates, setAssociates] = useState({
    emailId: "",
    password: "",
  });
  const dispatch = useDispatch();
  const getAssociateData = (e) => {
    setAssociates({
      ...associates,
      [e.target.name]: e.target.value,
    });
    console.log(associates);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(associates);
    dispatch(registerAssociate(associates));
    window.location.reload(false);
    alert("Associate registered successfully...");
    nevigate("/trainer/registerAssociate");
    setAssociates({
      emailId: "",
      password: "",
    });
  };

  return (
    <>
      <div className="row">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes1.boxtitle}>Add Associate</h5>
          </div>

          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <form className="form-inline" onSubmit={handleOnSubmit}>
              <div className={classes1.btn}>
                <Button onClick={handleOnSubmit}>Register</Button>
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
                onChange={getAssociateData}
                name="emailId"
                className={classes.inputField}
                type="email"
                placeholder="Enter Email Id"
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
                onChange={getAssociateData}
                name="password"
                className={classes.inputField}
                type="password"
                placeholder="Enter Password"
                aria-label="password"
              />
            </InputField2>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterAssociateForm;
