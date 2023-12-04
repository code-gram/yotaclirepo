import React from "react";
import classes from "../../dashboard/TitleDashboard.module.css";
import ListBatch from "./ListBatch";

function TitleBatchList() {
  return (
    <>
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Batch Management</h5>
          </div>
        </div>
        <ListBatch />
      </div>
    </>
  );
}
export default TitleBatchList;
