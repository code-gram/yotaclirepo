import React, { useState } from "react";
import Col from "react-bootstrap/Col";
const SearchCancelIcon = (props) => {
  const onSearchCancel = () => {
    props.onSearchCancel();
  };
  var crossIcon = <i class="fa-solid fa-xmark fa-xl"  style={{color: "#1a63e0"}}></i>;
  return (
    <Col xs={1}>
      <span onClick={onSearchCancel} className={props.isNotActive ? "hidden" : ""}>
        <i class="fa-solid fa-xmark fa-xl"  style={{color: "#1a63e0"}}></i>
      </span>
    </Col>);
};

export default SearchCancelIcon;