import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import "../../../../App.css";

const TrainerDashboardLayout = (props) => {
  const [isNotActive, setNotActive] = useState("true");
  const onHamburgerClick = () => {
    setNotActive(!isNotActive);
  };

  return (
    <div className="Main">
      <Container fluid>
        <Row>
          <Col xs={12} id="sidebar-wrapper">
            <Sidebar isNotActive={isNotActive} style={{}} />
          </Col>
          <Col xs={0} id="page-content-wrapper" style={{ padding: "0px" }}>
            <Navigation
              isNotActive={isNotActive}
              onHamburgerClick={onHamburgerClick}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

TrainerDashboardLayout.propTypes = {};

export default TrainerDashboardLayout;
