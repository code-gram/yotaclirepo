import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TrainerSidebar.css";

const TrainerSidebarSubMenu = (props) => {
    return (
        <li className="dropdown-item">
            <Link to={props.menuLink}>{props.children}</Link>
        </li>
    );
}

export default TrainerSidebarSubMenu;