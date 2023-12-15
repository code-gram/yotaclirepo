import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../TrainerSidebar.css";
import TrainerSidebarSubMenu from "../TrainerSidebarSubMenu";
import TrainerSidebarMainMenu from "../TrainerSidebarMainMenu";

const TechnicalManagerSidebar = () => {
    return (
        <>
            <TrainerSidebarMainMenu link="Training Request" linkIcon="fa-solid fa-id-badge icon-color">
                <TrainerSidebarSubMenu menuLink="/createTest">Create Batch</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/batchList">Batch List</TrainerSidebarSubMenu>
            </TrainerSidebarMainMenu>
            <TrainerSidebarMainMenu link="Test Managment" linkIcon="fas fa-pencil-square icon-color">
                <TrainerSidebarSubMenu menuLink="/createTest">Create Test</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/testList">Test List</TrainerSidebarSubMenu>
            </TrainerSidebarMainMenu>
            <TrainerSidebarMainMenu link="Technology Managment" linkIcon="fa-solid fa-laptop-code icon-color">
                <TrainerSidebarSubMenu menuLink="/createTechnology">Create Technology</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/technologyList">Technology List</TrainerSidebarSubMenu>
            </TrainerSidebarMainMenu>
            <TrainerSidebarMainMenu link="Associate Managment" linkIcon="fa-solid fa-people-roof icon-color">
                <TrainerSidebarSubMenu menuLink="/addAssociate">Add Associate</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/associateList">Associate List</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/addAssociate">Assign Test</TrainerSidebarSubMenu>
            </TrainerSidebarMainMenu>
            <TrainerSidebarMainMenu link="Client Managment" linkIcon="fas fa-sitemap icon-color">
                <TrainerSidebarSubMenu menuLink="/createClient">Create Client</TrainerSidebarSubMenu>
                <TrainerSidebarSubMenu menuLink="/clientList">Client List</TrainerSidebarSubMenu>
            </TrainerSidebarMainMenu>
            <TrainerSidebarMainMenu link="Report and views" linkIcon="fas fa-file-text icon-color"/>
        </>
    );
};

export default TechnicalManagerSidebar;