/*
  Created on - 02-05-2024
  Created By - yash.raj
  Project - YOTA_NEW
  IDE used - IntelliJ IDEA
  Path of this file -
 */
  import { Link } from "react-router-dom";

  const TechnicalManagerNavigation = ({
      onLogout,
      role
  }) => {
      return (
          <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
              <div className="container-fluid">
                  <Link to={"/"} className="navbar-brand align-items-center">
                      <b>YOTA
                          <span style={{ fontSize: "12px" }}>
                              {" (" + role + ")"}
                          </span>
                      </b>
                  </Link>
                  <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                  >
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/home">
                                  Dashboard
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/add-training">
                                  Training
                              </Link>
                          </li>
                          {/* <li className="nav-item">
                              <Link className="nav-link" to="/add-test">
                                  Test
                              </Link>
                          </li> */}
                          <li className="nav-item dropdown">
                              <a
                                  className="nav-link dropdown-toggle"
                                  id="navbarDropdown"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                              >
                                  Test
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li>
                                      <Link className="dropdown-item" to="/add-test/screen1">
                                          Add Test
                                      </Link>
                                  </li>
                                  <li>
                                      <Link className="dropdown-item" to="/list-test">
                                          Test List
                                      </Link>
                                  </li>
                              </ul>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/add-question">
                                  Question Bank
                              </Link>
                          </li>
                          <li className="nav-item dropdown">
                              <a
                                  className="nav-link dropdown-toggle"
                                  id="navbarDropdown"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                              >
                                  Users
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li>
                                      <Link className="dropdown-item" to="/all-pending-users">
                                          Pending Users
                                      </Link>
                                  </li>
                                  <li>
                                      <Link className="dropdown-item" to="/all-rejected-users">
                                          Rejected Users
                                      </Link>
                                  </li>
                                  <li>
                                      <Link className="dropdown-item" to="/associates">
                                         Approved Users
                                      </Link>
                                  </li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a
                                  className="nav-link dropdown-toggle"
                                  id="navbarDropdown"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                              >
                                  Reports
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li>
                                      <a className="dropdown-item" href="#">
                                          Batch Wise
                                      </a>
                                  </li>
                                  <li>
                                      <a className="dropdown-item" href="#">
                                          Ranks
                                      </a>
                                  </li>
                                  <li>
                                      <hr className="dropdown-divider" />
                                  </li>
                                  <li>
                                      <a className="dropdown-item" href="#">
                                          Top Performer
                                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a
                                  className="nav-link dropdown-toggle"
                                  id="navbarDropdown"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                              >
                                  Master
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li>
                                      <Link className="dropdown-item" to="/technology-list">
                                          Technology
                                      </Link>
                                  </li>
                                  {/* <li>
                                      <Link className="dropdown-item" to="/category-list">
                                          Category
                                      </Link>
                                  </li> */}
                              </ul>
                          </li>
                      </ul>
                      <div className="d-flex">
                          <button className="btn btn-primary"
                              onClick={onLogout}>
                              Logout
                          </button>
                      </div>
                  </div>
              </div>
          </nav>
      );
  };
  
  export default TechnicalManagerNavigation;
  