import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../TrainerSidebar.css";
import TrainerSidebarSubMenu from "../TrainerSidebarSubMenu";

const InitiatorSidebar = () => {
    return (
        <TrainerSidebarSubMenu link="Training Request">
            <TrainerSidebarSubMenu menuLink="/createTest">Create Batch</TrainerSidebarSubMenu>
            <TrainerSidebarSubMenu menuLink="/batchList">Batch List</TrainerSidebarSubMenu>
        </TrainerSidebarSubMenu>
    );
};

export default InitiatorSidebar;