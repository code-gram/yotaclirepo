import React, { useState } from "react";
import classes from "../Navigation.module.css";
import Col from "react-bootstrap/Col";
const HamburgerIcon = (props) => {
  const onHamburgerClick = () => {
    props.onHamburgerClick();
  };
  var barsIcon = <i className="fas fa-bars fa-2xl" style={{color: "#1a63e0"}}></i>;
  var crossIcon = <i class="fa-solid fa-xmark fa-xl"  style={{color: "#1a63e0"}}></i>;
  return (
  <Col xs={1}>
    <div onClick={onHamburgerClick} className={`bi bi-list ${classes.sidebarCollapse}`}>
      <span className={props.isNotActive ? "hidden" : ""}>
        {barsIcon}
      </span>
      <span className={props.isNotActive ? "" : "hidden"}>
        {crossIcon}
      </span>
    </div>
  </Col>);
};

export default HamburgerIcon;