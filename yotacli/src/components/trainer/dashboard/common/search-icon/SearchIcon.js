import React, { useState } from "react";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import classes from "../Navigation.module.css";
import "./SearchIcon.css";
import Col from "react-bootstrap/Col";
const SearchIcon = (props) => {

  const onSearchClick = () => {
    props.onSearchClick();
  };

  var searchIcon = <i class="fa-solid fa-magnifying-glass"></i>;
  var crossIcon = <i class="fa-solid fa-xmark fa-xl"  style={{color: "#1a63e0"}}></i>;
  return (
    <>
      <Col xs={props.isNotActive ? 1:3}>
        <div className={props.isNotActive ? "search-wrapper" : "search-wrapper active"} >
          <div className="input-holder">
            <input type="text" className="search-input" placeholder="Type to search"/>
            <button className="search-icon" onClick={onSearchClick}>
              <span>
              </span>
            </button>
          </div>
        </div>
      </Col>
    </>
    );
};

export default SearchIcon;