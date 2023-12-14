import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../TrainerSidebar.css";
import TrainerSidebarSubMenu from "../TrainerSidebarSubMenu";
import TrainerSidebarMainMenu from "../TrainerSidebarMainMenu";


const TechnicalManagerSidebar = () => {
    return (
        <>
            <TrainerSidebarMainMenu link="Training Request">
                <TrainerSidebarSubMenu menuLink="/createTest">Create Batch</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/batchList">Batch List</TrainerSidebarSubMenu>
            </TrainerSidebarMainMenu>
            <TrainerSidebarMainMenu link="Test Managment">
                <TrainerSidebarSubMenu menuLink="/createTest">Create Test</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/testList">Test List</TrainerSidebarSubMenu>
            </TrainerSidebarMainMenu>
            <TrainerSidebarMainMenu link="Technology Managment">
                <TrainerSidebarSubMenu menuLink="/createTechnology">Create Technology</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/technologyList">Technology List</TrainerSidebarSubMenu>
            </TrainerSidebarMainMenu>
            <TrainerSidebarMainMenu link="Associate Managment">
                <TrainerSidebarSubMenu menuLink="/addAssociate">Add Associate</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/associateList">Associate List</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/addAssociate">Assign Test</TrainerSidebarSubMenu>
            </TrainerSidebarMainMenu>
            <TrainerSidebarMainMenu link="Client Managment">
                <TrainerSidebarSubMenu menuLink="/createClient">Create Client</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/clientList">Client List</TrainerSidebarSubMenu>
            </TrainerSidebarMainMenu>
            <TrainerSidebarMainMenu link="Report and views"/>
        </>
    );
};

export default TechnicalManagerSidebar;