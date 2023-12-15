import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TrainerSidebar.css";

const TrainerSidebarMainMenu = (props) => {    
    const [active, setActive] = useState(false);
    const{
        link = "",
        children = "",
        linkIcon = ""
    } = props;
    return (
        <li className="list-item">
            <i class={linkIcon}/>
            
            <Link
                href="#MainMenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
                onClick={() => setActive(!active)}
            >
                {link}
                
            </Link>
            <ul
                className={
                    active ? "list-unstyled  collapse" : "list-unstyled"
                }
                id="Training"
            >
            { children }
            </ul>
        </li>
    );
};

export default TrainerSidebarMainMenu;