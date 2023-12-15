import React, { useState } from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import classes from "../dashboard/Sidebar.module.css";
import "../dashboard/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar(props) {

  const [isOpen, setIsOpen] = useState(true);

  const collapseSideBar = () => {
    setIsOpen(!isOpen);
    props.sideBarOpen(!isOpen)
    
  }

  return (
    <div
      className={`${isOpen ? 'col-xl-2' : 'col-1'}`}
      style={{ padding: "0px 0px", backgroundColor: "#144358" }}
    >
      <div
        className={`container ${classes.headerleft}`}
        style={{ height: "60px" }}
      >
        <div className={`row ${classes.rowhead}`}>
          <i
            style={{ width: "50px", color: "white", paddingLeft: "25px" }}
            className={`fa-solid fa-bars ${classes.iconhead}`}
            onClick={collapseSideBar}
          ></i>
          {isOpen && <p style={{ padding: "0px", width: "109.27px" }}>YOTA</p>}
        </div>
      </div>

      {isOpen &&

        <ul className={classes.menucontainer}>
          <li>
            <Link to="/trainer">
              <i
                className="fa-solid fa-gauge-high "
                style={{ color: "white" }}
              ></i>
              Dashboard
            </Link>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-list" style={{ color: "white" }}></i>

              <DropdownButton
                className="dropdown-toggle"
                as={ButtonGroup}
                id={`dropdown-button-drop-end`}
                drop={"end"}
                variant=""
                title={`Training Management`}
              >
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="1"
                >
                  <Link to="createtraining">Create Training</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="2"
                >
                  <Link to="traininglist">Training List</Link>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </li>
          <li>
            <div>
              <i
                className="fa-solid fa-file-circle-question"
                style={{ color: "white" }}
              ></i>
              <DropdownButton
                className="dropdown-toggle"
                as={ButtonGroup}
                id={`dropdown-button-drop-end`}
                drop={"end"}
                variant=""
                title={`Question Management`}
              >
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="1"
                >
                  <Link to="addquestion">Create Question</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="2"
                >
                  <Link to="listquestion">Question List</Link>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </li>
          <li>
            <div>
              <i
                className="fa-solid fa-file-circle-question"
                style={{ color: "white" }}
              ></i>

              <DropdownButton
                className="dropdown-toggle"
                as={ButtonGroup}
                id={`dropdown-button-drop-end`}
                drop={"end"}
                variant=""

                title={`Technology Management`}

              >
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="1"
                >

                  <Link to="addtechnology"> Add Technology</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="2"
                >
                  <Link to="technologylist">List Technology</Link>
                </Dropdown.Item>
                </DropdownButton>
            </div>
          </li>          
          <li>
            <div>
              <i className="fa-solid fa-users" style={{ color: "white" }}></i>

              <DropdownButton
                className="dropdown-toggle"
                as={ButtonGroup}
                id={`dropdown-button-drop-end`}
                drop={"end"}
                variant=""
                title={`Associate Management`}
              >
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}

                  eventKey="1"
                >
                  <Link to="registerAssociate">  Register Associate</Link>

                </Dropdown.Item>
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="2"
                >
                  <Link to="associatelist"> Associate List</Link>
                </Dropdown.Item>
                <Dropdown.Item
                style={{ backgroundColor: "#88b4ba", color: "white" }}
                eventKey="2"
              >
                <Link to="testList"> Assign Test</Link>
              </Dropdown.Item>
              </DropdownButton>
            </div>
          </li>
          
          <li>
            <div>
              <i className="fa-solid fa-list" style={{ color: "white" }}></i>

              <DropdownButton
                className="dropdown-toggle"
                as={ButtonGroup}
                id={`dropdown-button-drop-end`}
                drop={"end"}
                variant=""
                title={`Client Management`}
              >
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="1"
                >
                  <Link to="addclient">Create Client</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="2"
                >
                 
                  <Link to="clientlist">Client List</Link>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </li>
          <li>
            <a href="index.html">
              <i
                className="fa-solid fa-magnifying-glass "
                style={{ color: "white" }}
              ></i>
              Report
            </a>
          </li>
        
        </ul>
      }
      {!isOpen &&

        <ul className={classes.menucontainer} style={{ textAlign: "center" }}>
          <li>
            <Link to="/">
              <i
                className="fa-solid fa-gauge-high "
                style={{ color: "white" }}
              ></i>
            </Link>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-list" style={{ color: "white" }}></i>

              <DropdownButton
                className="dropdown-toggle"
                as={ButtonGroup}
                id={`dropdown-button-drop-end`}
                drop={"end"}
                variant=""
              >
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="1"
                >
                  <Link to="createtraining">Create Training</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="2"
                >
                  <Link to="traininglist">Training List</Link>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </li>
          <li>
            <div>
              <i
                className="fa-solid fa-file-circle-question"
                style={{ color: "white" }}
              ></i>
              <DropdownButton
                className="dropdown-toggle"
                as={ButtonGroup}
                id={`dropdown-button-drop-end`}
                drop={"end"}
                variant=""
              >
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="1"
                >
                  <Link to="addquestion">Create Question</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="2"
                >
                  <Link to="listquestion">Question List</Link>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </li>
          <li style={{ paddingLeft: "15px" }}>
            <div>
              <i className="fa-solid fa-laptop" style={{ color: "white" }}></i>

              <DropdownButton
                className="dropdown-toggle"
                as={ButtonGroup}
                id={`dropdown-button-drop-end`}
                drop={"end"}
                variant=""
              >
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="1"
                >

                  <Link to="addtechnology"> Add Technology</Link>

                </Dropdown.Item>

                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="2"
                >
                  <Link to="technologylist">List Technology</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="2"
                >
                  <Link to="updatetechnology">update Technology</Link>
                </Dropdown.Item>

              </DropdownButton>
            </div>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-users" style={{ color: "white" }}></i>

              <DropdownButton
                className="dropdown-toggle"
                as={ButtonGroup}
                id={`dropdown-button-drop-end`}
                drop={"end"}
                variant=""
              >
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}

                  eventKey="1"
                >
                  <Link to="registerAssociate">  Register Associate</Link>

                </Dropdown.Item>
                <Dropdown.Item
                  style={{ backgroundColor: "#88b4ba", color: "white" }}
                  eventKey="2"
                >
                  <Link to="associatelist"> Associate List</Link>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </li>
          <li>
            <a href="index.html">
              <i
                className="fa-solid fa-magnifying-glass "
                style={{ color: "white" }}
              ></i>
            </a>
          </li>
        </ul>
      }
    </div>
  );
}
export default Sidebar;