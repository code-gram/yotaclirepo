import React from "react";
import classes from "../dashboard/TitleDashboard.module.css";
import ListTest from "./ListTest";

function TitleBatchList() {
  return (
    <>
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h6 className={classes.title}>Assign Test To Candidate</h6>
          </div>
        </div>
        <ListTest />
      </div>
    </>
  );
}
export default TitleBatchList;
