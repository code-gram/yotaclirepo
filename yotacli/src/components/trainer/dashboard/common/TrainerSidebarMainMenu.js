import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TrainerSidebar.css";

const TrainerSidebarMainMenu = (props) => {    
    const [active, setActive] = useState(false);

    return (
        <li className="list-item">
            {props.link == "Training Request" && <i class="fa-solid fa-id-badge icon-color"></i>}
            {props.link == "Test Managment" && <i class="fas fa-pencil-square icon-color"></i>}
            {props.link == "Technology Managment" && <i class="fa-solid fa-laptop-code icon-color"></i>}
            {props.link == "Associate Managment" && <i class="fa-solid fa-people-roof icon-color"></i>}
            {props.link == "Client Managment" && <i class="fas fa-sitemap icon-color"></i>}
            {props.link == "Report and views" && <i class="fas fa-file-text icon-color"></i>}
            <Link
                href="#MainMenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
                onClick={() => setActive(!active)}
            >
                {props.link}
                
            </Link>
            <ul
                className={
                    active ? "list-unstyled  collapse" : "list-unstyled"
                }
                id="Training"
            >
            { props.children }
            </ul>
        </li>
    );
};

export default TrainerSidebarMainMenu;