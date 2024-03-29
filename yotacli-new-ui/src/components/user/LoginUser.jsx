import React, { useEffect, useState } from "react";
import { loginUser } from "../../features/security/securtiyAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../common/header/header";
import "./LoginUser.css";
export const LoginUser = () => {
  const { loading, user, error } = useSelector((state) => state.security);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    const loginRequest = {
      username,
      password,
    };
    dispatch(loginUser(loginRequest));
  };
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);
  
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="login">
        <div className="page-content">
          <div className="container-fluid ">
            <h6 className=" display-6 text-center mb-3">Login</h6>
            <form className="form" onSubmit={onSubmit}>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-1 col-form-label">
                  Email:
                </label>

                <div class="col-sm-4">
                  <input
                    type="username"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Enter Email"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-1 col-form-label">
                  Password:&nbsp;
                </label>
                <div class="col-sm-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </div>
              <div className="btn">
                <button className="signbutton btn btn-primary" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
