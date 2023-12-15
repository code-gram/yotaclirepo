import React, { useState } from "react";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import classes from "../Navigation.module.css";
import Col from "react-bootstrap/Col";
const YotaIcon = (props) => {
    return (
      <Col xs={2} className={props.isNotActive ? "hidden" : ""}>
          <Navbar.Brand href="#" className={`${classes.title}`}>
          YOTA
        </Navbar.Brand>
      </Col>);
};

export default YotaIcon;