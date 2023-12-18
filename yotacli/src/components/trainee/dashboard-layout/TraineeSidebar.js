import React,{useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import sidebarClass from  './TraineeSidebar.module.css'
import TraineeSidebarStyle from './TraineeSidebarStyle.css'

const TraineeSidebar = (props) => {
    const [isDropdownActive, setDropdownActive] = useState("false");
    return (
        <div className="wrapper" style={{ marginTop: "50px" }}>
            <nav id="sidebar" className={props.isNotActive ? "active" : ""}>
             <div className="sidebar-header">
              
            </div>
              <ul className="list-unstyled components">
                <li className="list-item">
                  <i className="fas fa-book icon-color"></i>
                    <Link to="/members">Test Managment</Link>
                </li>
                <li className="list-item">
                    <i className="fas fa-pencil-square icon-color"></i>
                    <Link to="/organizations">Sample Test</Link>
                </li>
                <li className="list-item">
                <i className="fas fa-file-text icon-color"></i>
                <Link to="/request-history">Report and views</Link>
                </li>
                <li className="list-item">
                <i className="fas fa-sitemap icon-color"></i>
                <Link to="/organization-profile">Client questions and interviews</Link>
                </li>
            </ul>
            </nav>
        </div>
    );
};

TraineeSidebar.propTypes = {
    
};

export default TraineeSidebar;