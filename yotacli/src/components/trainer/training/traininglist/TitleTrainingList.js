import React from "react";
import classes from "../../dashboard/TitleDashboard.module.css";
import ListTraining from "./ListTraining";

function TitleTrainingList() {
  return (
    <>
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Training Management</h5>
          </div>
        </div>
        <ListTraining />
      </div>
    </>
  );
}
export default TitleTrainingList;
