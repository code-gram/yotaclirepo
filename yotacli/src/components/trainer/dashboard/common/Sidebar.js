import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TrainerSidebar.css";

const TraineeSidebar = (props) => {
  const [isBatchActive, setBatchActive] = useState("false");
  const [isTestActive, setTestActive] = useState("false");
  const [isTechnologyActive, setTechnologyActive] = useState("false");
  const [isAssociateActive, setAssociateActive] = useState("false");
  const [isClientActive, setClientActive] = useState("false");

  return (
    <div className="wrapper" style={{ marginTop: "50px" }}>
      <nav id="sidebar" className={props.isNotActive ? "active" : ""}>
        <div className="sidebar-header"></div>
        <ul className="list-unstyled components">
          <li className="list-item">
            <i className="fas fa-book icon-color"></i>
            <Link to="/dashboard">DashBoard</Link>
          </li>
          <li className="list-item">
            <i className="fas fa-user-alt icon-color"></i>
            <Link
              href="#homeSub"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={() => setBatchActive(!isBatchActive)}
            >
              Batch Managment
            </Link>
            <ul
              className={
                isBatchActive ? "list-unstyled  collapse" : "list-unstyled"
              }
              id="homeSub"
            >
              <li className="dropdown-item">
                <Link to="/createTest">Create Batch</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/batchList">Batch List</Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <i className="fas fa-pencil-square icon-color"></i>
            <Link
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={() => setTestActive(!isTestActive)}
            >
              Test Managment
            </Link>
            <ul
              className={
                isTestActive ? "list-unstyled  collapse" : "list-unstyled"
              }
              id="homeSubmenu"
            >
              <li className="dropdown-item">
                <Link to="/createTest">Create Test</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/testList">Test List</Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <i className="fas fa-user-alt icon-color"></i>
            <Link
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={() => setTechnologyActive(!isTechnologyActive)}
            >
              Technology Managment
            </Link>
            <ul
              className={
                isTechnologyActive ? "list-unstyled  collapse" : "list-unstyled"
              }
              id="homeSubmenu"
            >
              <li className="dropdown-item">
                <Link to="/createTechnology">Create Technology</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/technologyList">Technology List</Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <i className="fas fa-user-alt icon-color"></i>
            <Link
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={() => setAssociateActive(!isAssociateActive)}
            >
              Associate Managment
            </Link>
            <ul
              className={
                isAssociateActive ? "list-unstyled  collapse" : "list-unstyled"
              }
              id="homeSubmenu"
            >
              <li className="dropdown-item">
                <Link to="/addAssociate">Add Associate</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/associateList">Associate List</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/assignTest">Assign Test</Link>
              </li>
            </ul>
          </li>

          <li className="list-item">
            <i className="fas fa-sitemap icon-color"></i>
            <Link
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={() => setClientActive(!isClientActive)}
            >
              Client Managment
            </Link>

            <ul
              className={
                isClientActive ? "list-unstyled  collapse" : "list-unstyled"
              }
              id="homeSubmenu"
            >
              <li className="dropdown-item">
                <Link to="/createClient">Create Client</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Client List">Client List</Link>
              </li>
            </ul>
          </li>

          <li className="list-item">
            <i className="fas fa-file-text icon-color"></i>
            <Link to="/request-history">Report and views</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

TraineeSidebar.propTypes = {};

export default TraineeSidebar;
