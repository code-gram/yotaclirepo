import React, { useState } from "react";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "./OtherIcon.css";
const OtherIcons = (props) => {
    return (
        <>
            <Col xs={1} className={props.isNotActive ? "" : "hidden"}>
                <a href="javascript:void(0);" className="nav-link">
                    <i className="nav-link-icon fa fa-database"></i>
                    <span>Projects</span>
                </a>
            </Col>
            <Col xs={1} className={props.isNotActive ? "" : "hidden"}>
                <a href="javascript:void(0);" className="nav-link">
                    <i className="nav-link-icon fa fa-edit"></i>
                    <span>Statistics</span>
                </a>
            </Col>
            <Col xs={1} className={props.isNotActive ? "" : "hidden"}>
                <a href="javascript:void(0);" className="nav-link">
                    <i className="nav-link-icon fa fa-cog"></i>
                    <span>Settings</span>
                </a>
            </Col>
        </>
    );
};

export default OtherIcons;