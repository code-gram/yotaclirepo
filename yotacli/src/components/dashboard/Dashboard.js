import React from "react";
import classes from "./Dashboard.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TitleDashboard from "./TitleDashboard";
import Footer from "./Footer";
import Routing from "../../routing";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "100vh" }}>
        <Sidebar />
        <div className="col-xl-10 col-lg-10" style={{ padding: "0px 0px" }}>
          <Navbar />
          <div style={{ marginBottom: 70 }}>
            {" "}
            <Routing />
          </div>

          <div
            className="container-fluid"
            style={{
              paddingLeft: "0px",
              paddingRight: "12px",
              position: "fixed",
              bottom: 0,
            }}
          >
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
