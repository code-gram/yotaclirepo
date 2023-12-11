import React, { useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import navcCass from "./TraineeNavbar.module.css";
import { useDispatch } from "react-redux";
import "./styles.css";

const TraineeNavbar = (props) => {
  const onHamburgerClick = () => {
    props.onHamburgerClick();
    console.log("Clicked.........")
  };

  var barsIcon = <i className="fas fa-bars"></i>;
  var crossIcon = <i className="fas fa-times-circle"></i>;

  return (
    //className={`navbar-brand ${classes.yashimage}`}
    <div className={`${navcCass.headerContainer}`}>
      <Navbar expand="lg" className={`navbar navbar-dark ${navcCass.bgColor}`}>
        <Container fluid>
          {/* <i class="fa-solid fa-bars" href="#"></i> */}
          <i
            onClick={onHamburgerClick}
            className={`bi bi-list ${navcCass.sidebarCollapse}`}
          >
            <span className={props.isNotActive ? "" : "hidden"}>
              {barsIcon}
            </span>
            <span className={props.isNotActive ? "hidden" : ""}>
              {crossIcon}
            </span>
          </i>

          <Navbar.Brand href="#" className={`${navcCass.title}`}>
            {" "}
            &nbsp; YOTA{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="form-group has-search ">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

TraineeNavbar.propTypes = {};

export default TraineeNavbar;
