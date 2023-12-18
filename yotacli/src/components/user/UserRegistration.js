import React from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import RegistrationCSS from "./UserRegistration.css";
import LoginHeader from "./UserHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

const UserRegistration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    console.log("email: ", email);
    let userData = {
      username: email,
      password: password,
    };
    console.log(userData);
    console.log("userData Data: " + userData.email);
    axios
      .post("/yota-api/users/register", userData)
      .then((resp) => {
        console.log(resp);
        if (resp.data) {
          toast("Registration Success!");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((error) => {
        console.log("ERORR:::::>>>>" + error);
        toast("Somethig went wrong!!");
        setEmail("");
        setPassword("");
        navigate("/register");
      });
  };
  return (
    <>
      <LoginHeader />
      <ToastContainer />
      <div className="login-bg-body center-form">
        <div className="container">
          <div className="row">
            <div className="col"> </div>
            <div className="card login-card-body">
              <div className="card-header">
                <Link to="/login">Back</Link>
                <h3 className="text-center">Registration</h3>
              </div>
              <div className="card-body">
                <div className="col mt-4">
                  <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>User Name:</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="Enter email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Create Password:</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Creat Password"
                      />
                    </Form.Group>
                  </Form>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-success login-btn"
                      onClick={registerUser}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col"> </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserRegistration;
