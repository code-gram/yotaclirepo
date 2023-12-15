import React from "react";
import userCSS from "./UserProfilePhoto.css";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const UserProfilePhoto = () => {
  const navigate = useNavigate();
  const logout = () => {
    console.log("ayay");
    sessionStorage.removeItem("token");
    navigate("/login");
  };
  const profile = () => {
    navigate("/trainer");
  };

  return (
    <div className="user-dropdown">
      <a
        onClick={(e) => {
          profile();
        }}
        style={{ cursor: "pointer" }}
      >
        Profile
      </a>
      <br />
      <a
        onClick={(e) => {
          logout();
        }}
        style={{ cursor: "pointer" }}
      >
        Signout
      </a>
    </div>
  );
};

export default UserProfilePhoto;
