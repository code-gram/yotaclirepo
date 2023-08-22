import "./App.css";
// import { Sidebar } from "./pages/Sidebar";
//  import { Header } from "./pages/Header";
// import Footer from "./pages/Footer";
 import Training from "./pages/Training";
 import TrainingSummary from "./pages/TrainingSummary";
import Analytics from "./pages/Analytics"
import TestLinks from "./pages/TestLinks"
import { useEffect, useRef, useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import {Signout } from "./pages/Signout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Sidebar } from "./pages/Sidebar";
import { Footer } from "./pages/Footer";


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

export default function App() {
  const [toggle, setToggle] = useState(false);
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
    <>
      <div id="body-pd" className={toggle ? "mainbody body-pd" : "mainbody"}>
        <header
          ref={bodyId}
          className={toggle ? "header body-pd" : "header"}
          // className="header"
          id="header"
          style={{ backgroundColor: "rgb(20, 67, 88)" }}
        >
          <div className="header_toggle" onClick={() => setToggle(!toggle)}>
          
            <i
              className={toggle ? "bx bx-menu bx-x" : "bx bx-menu"}
              id="header-toggle"
            ></i>
                  <img src="./images/logo3.png" alt="logo" width="75px" height="55px" />
          </div>
         
          <div
            id="tool"
            style={{
              justifyContent: "flex-end",
              display: "flex",
              paddingTop: "0.4em",
            }}
          >
            <div style={{ justifyContent: "space-between", display: "flex" }}>
              <div className="header_img">
                <img src="./images/user.png" alt="user" />
              </div>
              <div style={{ padding: "0.4em" }}>
                <span style={{ color: "white" }}>Katta Muralidhar</span>
              </div>
            </div>
            <div className="header_toggle" style={{ marginLeft: "0em" }}>
              <i
                style={{ fontSize: "1.2em", marginTop: "0.2em" }}
                className="bx bx-help-circle nav_icon useTool"
                aria-hidden="true"
              />
            </div>
            <div className="header_toggle" style={{ marginLeft: "0em" }}>
              <i
                style={{ fontSize: "1.2em", marginTop: "0.2em" }}
                className="bx bx-cog nav_icon useTool"
                aria-hidden="true"
              />
            </div>
          </div>
          
        </header>

        <div
          //  className="l-navbar"
          ref={navId}
          className={toggle ? "l-navbar show" : "l-navbar"}
          id="nav-bar"
          style={{ backgroundColor: "rgb(20, 67, 88)" }}
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
                
                <a
                  href="/"
                  className="nav_link "
                  onClick={dashboard}
                >
                  <i className="fab fa-slack" />
                  <span className="nav_name">Dashboard</span>
                </a>

                <a
                 href="/Analytics" 
                className="nav_link"
                  onClick={analytics}
                 >
                  <i className="fas fa-sliders-h" />
                  <span className="nav_name">Analytics</span>
                </a>
                
                
                <a href="/TestLinks" 
                className="nav_link"
                  onClick={TestLinks}
                  >
                  <i className="fas fa-link" />
                  <span className="nav_name">TestLinks</span>
                </a>

                <a href="/Training" 
                className="nav_link"
                onClick={Training}
                > 
                  <i className="fas fa-code" />
                  <span className="nav_name">Training</span>
                </a>

                <a href="/TrainingSummary" 
                className="nav_link"
                onClick={TrainingSummary}>
                <i className="fas fa-newspaper" />
                  <span className="nav_name">Training Summary</span>
                </a>
              </div>
            </div>

            <a
             href="/Signout" 
            className="nav_link"
             onClick={Signout}
            >
              <i className="fas fa-sign-out-alt" />
              <span className="nav_name">SignOut</span>
            </a>
          </nav>
        </div>
        <RouterProvider router={router} />
      </div>
      {/* <Sidebar/> */}
      <Footer/>
    </>
  );
}