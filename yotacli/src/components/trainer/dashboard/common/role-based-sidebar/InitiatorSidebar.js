import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../TrainerSidebar.css";

const InitiatorSidebar = () => {
    const [isBatchActive, setBatchActive] = useState(false);
    return (
        <li className="list-item">
            <i class="fa-solid fa-id-badge icon-color"></i>
            <Link
                href="#batch"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
                onClick={() => setBatchActive(!isBatchActive)}
            >
                Batch Managment
            </Link>
            <ul
                className={
                    isBatchActive ? "list-unstyled  collapse" : "list-unstyled"
                }
                id="batch"
            >
                <li className="dropdown-item">
                    <Link to="/createTest">Create Batch</Link>
                </li>
                <li className="dropdown-item">
                    <Link to="/batchList">Batch List</Link>
                </li>
            </ul>
        </li>
    );
};

export default InitiatorSidebar;