import React from "react";
import classes from "./Dashboard.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TitleDashboard from "./TitleDashboard";
import Routing from "../../routing";
import Footer from "./Footer";
function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-xl-10 col-lg-10" style={{ padding: "0px 0px" }}>
          <Navbar />
          <Routing />
          <div
            className="container-fluid"
            style={{ paddingRight: "12px", paddingLeft: "0px" }}
          >
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
