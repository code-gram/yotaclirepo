import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TrainerSidebar.css";

const TrainerSidebar = (props) => {
  const [isBatchActive, setBatchActive] = useState(true);
  const [isTestActive, setTestActive] = useState(true);
  const [isTechnologyActive, setTechnologyActive] = useState(true);
  const [isAssociateActive, setAssociateActive] = useState(true);
  const [isClientActive, setClientActive] = useState(true);

  return (
    <div className="wrappermain" style={{ marginTop: "50px" }}>
      <nav id="sidebar" className={props.isNotActive ? "active" : ""}>
        <div className="sidebar-header"></div>
        <ul className="list-unstyled components">
          <li className="list-item">
            <i className="fa-solid fa-list-ul icon-color"></i>
            <Link to="/dashboard">DashBoard</Link>
          </li>
          <li className="list-item">
            <i class="fa-solid fa-id-badge icon-color"></i>
            <Link
              href="#training"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={() => setBatchActive(!isBatchActive)}
            >
              Training Managment
            </Link>
            <ul
              className={
                isBatchActive ? "list-unstyled  collapse" : "list-unstyled"
              }
              id="batch"
            >
              <li className="dropdown-item">
              <Link to="/createtraining">Request Training</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/batchList">Training List</Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <i className="fas fa-pencil-square icon-color"></i>
            <Link
              href="#test"
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
              id="test"
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
            <i className="fa-solid fa-laptop-code icon-color"></i>
            <Link
              href="#technology"
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
              id="technology"
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
            <i className="fa-solid fa-people-roof icon-color"></i>

            <Link
              href="#associate"
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
              id="associate"
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
              href="#client"
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
              id="client"
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

TrainerSidebar.propTypes = {};

export default TrainerSidebar;
