import React from "react";
import classes from "../../../components/dashboard/TitleDashboard.module.css";
import ListAssociate from "./ListAssociate";

function TitleAssociateList() {
  return (
    <>
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Associate Management</h5>
          </div>
        </div>
        <ListAssociate />
      </div>
    </>
  );
}
export default TitleAssociateList;
