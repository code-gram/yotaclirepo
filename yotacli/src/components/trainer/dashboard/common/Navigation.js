import React, { useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const onHamburgerClick = () => {
    props.onHamburgerClick();
  };

  var barsIcon = <i className="fas fa-bars"></i>;
  var crossIcon = <i class="fa-solid fa-xmark"></i>;

  return (
    <div className={`${classes.headerContainer}`}>
      <Navbar expand="lg" className={`navbar navbar-dark ${classes.bgColor}`}>
        <Container fluid>
          <i
            onClick={onHamburgerClick}
            className={`bi bi-list ${classes.sidebarCollapse}`}
          >
            <span className={props.isNotActive ? "" : "hidden"}>
              {barsIcon}
            </span>
            <span className={props.isNotActive ? "hidden" : ""}>
              {crossIcon}
            </span>
          </i>

          <Navbar.Brand href="#" className={`${classes.title}`}>
            &nbsp; YOTA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
