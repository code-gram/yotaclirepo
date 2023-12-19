import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TrainerSidebar.css";
import InitiatorSidebar from "./role-based-sidebar/InitiatorSidebar";
import TechnicalManagerSidebar from "./role-based-sidebar/TechnicalManagerSidebar";
import { useSelector } from "react-redux";
import { getUserRole } from "../../../utils/Authentication";
const Sidebar = (props) => {
  let userRole = getUserRole();
  console.log("USER ROLE:::::"+userRole);
  return (
    <div className="wrappermain" style={{ marginTop: "50px" }}>
      <nav id="sidebar" className={props.isNotActive ? "active" : ""}>
        <div className="sidebar-header"></div>
        <ul className="list-unstyled components">
          <li className="list-item">
            <i className="fa-solid fa-list-ul icon-color"></i>
            <Link to="/dashboard">DashBoard</Link>
          </li>
          {userRole === "Initiator" && <InitiatorSidebar/>}
          {userRole === "Technical_Manager" && <TechnicalManagerSidebar/>}
        </ul>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
