import React from "react";
import { useRef, useState } from "react";

export const Header = () => {
  const [toggle,setToggle] = useState(false);
  const bodyId = useRef(null);
  // const toggleId = useRef(null);
  // const navId = useRef(null);
  // const headerId = useRef(null);
  return (
    <div className="header">
<header
          ref={bodyId}
          className={toggle ? "header body-pd" : "header"}
          // className="header"
          id="header"
          style={{ backgroundColor: "#58a096" }}
        >
          <div className="header_toggle" onClick={() => setToggle(!toggle)}>
          
            <i
              className={toggle ? "bx bx-menu bx-x" : "bx bx-menu"}
              id="header-toggle"
            ></i>
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
                {" "}
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
    </div>
  );
};
export default Header;
