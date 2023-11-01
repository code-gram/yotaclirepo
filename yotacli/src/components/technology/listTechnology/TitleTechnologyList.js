import React from "react";
import classes from "../../dashboard/TitleDashboard.module.css";
import ListTechnology from "../listTechnology/ListTechnology";

function TitleTechnologyList() {
  return (
    <>
      {/* <!--dashbord--> */}
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Technology Management</h5>
          </div>
        </div>
        <ListTechnology />
      </div>
    </>
  );
}
export default TitleTechnologyList;
