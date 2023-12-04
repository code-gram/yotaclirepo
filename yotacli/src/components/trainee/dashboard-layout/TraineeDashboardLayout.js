import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col } from "react-bootstrap";
import TraineeSidebar from './TraineeSidebar';
import TraineeFooter from './TraineeFooter';
import TraineeNavbar from './TraineeNavbar';
import TraineeDashboardContent from './TraineeDashboardContent';


const TraineeDashboardLayout = props => {
    const [isNotActive, setNotActive] = useState("true");
    const onHamburgerClick =() =>{
        setNotActive(!isNotActive);   
    }

    return (
        <div>
             <Container fluid>
                <Row> 
                    <Col xs={12} id="sidebar-wrapper">      
                      <TraineeSidebar isNotActive={isNotActive} />
                    </Col>              
                    <Col  xs={0} id="page-content-wrapper" style={{padding:"0px"}}>
                       <TraineeNavbar isNotActive={isNotActive}  onHamburgerClick={onHamburgerClick}/>                     
                    </Col>                                      
                </Row>
                    <TraineeDashboardContent isNotActive={isNotActive} />             
            
            </Container>             
        </div>
    );
};

TraineeDashboardLayout.propTypes = {
    
};

export default TraineeDashboardLayout;

