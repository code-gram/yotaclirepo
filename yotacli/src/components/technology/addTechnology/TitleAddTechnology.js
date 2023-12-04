import React from "react";
import AddTechnology from "./AddTechnology";
import classes from "../../../components/dashboard/TitleDashboard.module.css";

function TitleAddTechnology() {
  return (
    <>

      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Technology Management</h5>
          </div>
        </div>
        <AddTechnology />
      </div>
    </>
  );
}

export default TitleAddTechnology;
