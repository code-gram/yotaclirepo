import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../TrainerSidebar.css";
import TrainerSidebarSubMenu from "../TrainerSidebarSubMenu";
import TrainerSidebarMainMenu from "../TrainerSidebarMainMenu";

const InitiatorSidebar = () => {
    return (
        <TrainerSidebarMainMenu link="Training Request" linkIcon="fa-solid fa-id-badge icon-color">
            <TrainerSidebarSubMenu menuLink="/createTest">Create Batch</TrainerSidebarSubMenu>
            <TrainerSidebarSubMenu menuLink="/batchList">Batch List</TrainerSidebarSubMenu>
        </TrainerSidebarMainMenu>
    );
};

export default InitiatorSidebar;