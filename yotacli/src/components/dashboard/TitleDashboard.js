import React from "react";
import BodyDashboard from "./BodyDashboard";
import classes from "../../components/dashboard/TitleDashboard.module.css";


function TitleDashboard() {
  return (
    <>

      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Dashboard</h5>
          </div>
        </div>
        <BodyDashboard />
      </div>
    </>
  );
}
export default TitleDashboard;
