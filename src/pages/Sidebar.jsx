import React from "react";

import {
  FaYoast,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import TrainingSummary from "./TrainingSummary";
import { Signout } from "./Signout";
import Training from "./Training";
import TestLinks from "./TestLinks";
import Analytics from "./Analytics";
import { Dashboard } from "./Dashboard";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <Dashboard />,
    path: "/",
  },
   {
    path: "/analytics",
    element: <Analytics />,
  }, 
  {
    path: "/testlinks",
    element: <TestLinks />,
  },
  {
    path: "/training",
    element: <Training />,
  },
  {
    path: "/trainingsummary",
    element: <TrainingSummary />,
  },
  {
    path: "/signout",
    element: <Signout />,
  }
    ]

  },
]);
export const Sidebar = () => {
  const [toggle] = useState(false);
  const toggleId = useRef(null);
  const navId = useRef(null);
  const bodyId = useRef(null);
  const headerId = useRef(null);
  function showNavbar() {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);
    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  }
  useEffect(() => {
    console.log("hi");
    showNavbar();
  }, []);

  function dashboard(params) {
    console.log("dashboard");
  }
  function analytics(params) {
    console.log("analytics");
  }

  return (  
 
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button
          className="TfiMenu"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <FaYoast />
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <span>
                <h3>YOTA</h3>
              </span>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div
           // className="l-navbar"
          ref={navId}
          className={toggle ? "l-navbar show" : "l-navbar"}
          id="nav-bar"
          style={{ backgroundColor: "#58a096" }}
        >
          <nav className="nav">
            <div>
              <a href="/" 
              className="nav_logo"
              >
                <i className="fab fa-yoast" />
                <span className="nav_logo-name" style={{ fontSize: "x-large" }}>
                  YOTA
                </span>
              </a>

              {/* <Link to="/" 
              className="nav_logo"
              >
                <i className="fab fa-yoast" />
                <span className="nav_logo-name" style={{ fontSize: "x-large" }}>
                  YOTA
                </span>
              </Link> */}
              
              <div className="nav_list">
                
                <Link
                  to ="/"
                  className="nav_link "
                  onClick={dashboard}
                >
                  <i className="fab fa-slack" />
                  <span className="nav_name">Dashboard</span>
                </Link>

                <Link
                 to="/Analytics" 
                className="nav_link"
                  onClick={analytics}
                 >
                  <i className="fas fa-sliders-h" />
                  <span className="nav_name">Analytics</span>
                </Link>
                
                
                <Link 
                to="/TestLinks" 
                className="nav_link"
                  onClick={TestLinks}
                  >
                  <i className="fas fa-link" />
                  <span className="nav_name">TestLinks</span>
                </Link>

                <Link
                to ="/Training" 
                className="nav_link"
                onClick={Training}
                > 
                  <i className="fas fa-code" />
                  <span className="nav_name">Training</span>
                </Link>

                <Link 
                to ="/TrainingSummary" 
                className="nav_link"
                onClick={TrainingSummary}>
                <i className="fas fa-newspaper" />
                  <span className="nav_name">Training Summary</span>
                </Link>
              </div>
            </div>
            <Link
             to="/Signout" 
            className="nav_link"
             onClick={Signout}
            >
              <i className="fas fa-sign-out-alt" />
              <span className="nav_name">SignOut</span>
            </Link>
          </nav>
        </div> 
          </div>
          <RouterProvider router={router} />



        </div>     
    </nav>
  );
};
