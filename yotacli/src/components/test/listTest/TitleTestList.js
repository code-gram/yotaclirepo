import React from "react";
import classes from "../../dashboard/TitleDashboard.module.css";
import ListTest from "./ListTest";




function TitleTestList() {

  return (
    <>
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Test Management</h5>
          </div>
        </div>
        <ListTest />
      </div>
    </>
  );
}
export default TitleTestList;
