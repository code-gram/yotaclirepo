import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TrainerSidebar.css";
import InitiatorSidebar from "./role-based-sidebar/InitiatorSidebar";
import TechnicalManagerSidebar from "./role-based-sidebar/TechnicalManagerSidebar";

const TrainerSidebar = (props) => {
  const [role, setRole] = useState("Initiator");
  return (
    <div className="wrappermain" style={{ marginTop: "50px" }}>
      <nav id="sidebar" className={props.isNotActive ? "active" : ""}>
        <div className="sidebar-header"></div>
        <ul className="list-unstyled components">
          <li className="list-item">
            <i className="fa-solid fa-list-ul icon-color"></i>
            <Link to="/dashboard">DashBoard</Link>
          </li>
          {role==="Initiator" && <InitiatorSidebar/>}
          {role==="Technical_Manager" && <TechnicalManagerSidebar/>}
        </ul>
      </nav>
    </div>
  );
};

TrainerSidebar.propTypes = {};

export default TrainerSidebar;
