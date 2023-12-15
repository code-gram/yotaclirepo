import React, { useState } from "react";
import PropTypes from "prop-types";
import YotaIcon from "../common/navigation-icon/YotaIcon";
import OtherIcons from "./other-icon/OtherIcons";
import HamburgerIcon from "../common/hamburger-icon/HamburgerIcon";
import SearchCancelIcon from "../common/search-cancel/SearchCancelIcon";
import SearchIcon from "../common/search-icon/SearchIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const [isNotActive, setNotActive] = useState("false");
  const onHamburgerClick = () => {
    props.onHamburgerClick();
  };
  const onSearchClick = () => {
    setNotActive(!isNotActive);
  };
  const onSearchCancel = () => {
    setNotActive("false");
  };
  var barsIcon = <i className="fas fa-bars"></i>;
  var crossIcon = <i className="fa-solid fa-xmark"></i>;

  return (
    <div className={`${classes.headerContainer}`}>
      <Row className={`${classes.appHeader} ${classes.headerShadow} ${classes.bgColor}`}>
          <YotaIcon isNotActive={props.isNotActive} />
          <HamburgerIcon isNotActive={props.isNotActive} onHamburgerClick={onHamburgerClick} />          
          <SearchIcon isNotActive={isNotActive} onSearchClick={onSearchClick}/>
          <SearchCancelIcon isNotActive={isNotActive} onSearchCancel={onSearchCancel}/>
          <OtherIcons isNotActive={isNotActive} onSearchCancel={onSearchCancel}/>
          {/* <OtherIcons isNotActive={isNotActive}/> */}
      </Row>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
