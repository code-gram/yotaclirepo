import React from "react";
import classes from "../../dashboard/TitleDashboard.module.css";
import RecordTechnology from "./RecordTechnology";

const TitleRecordTechnology = () => {
  return (
    <>
      {/* <!--dashbord--> */}
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Technology Management</h5>
          </div>
        </div>
        <RecordTechnology />
      </div>
    </>
  );
};

export default TitleRecordTechnology;
