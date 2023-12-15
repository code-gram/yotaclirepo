import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TrainerSidebar.css";

const TrainerSidebarSubMenu = ({menuLink, children}) => {
    return (
        <li className="dropdown-item">
            <Link to={menuLink}>{children}</Link>
        </li>
    );
}

export default TrainerSidebarSubMenu;