import React from 'react';
import classes from "../../../components/dashboard/TitleDashboard.module.css";
import UpdateAssociate from "./UpdateAssociate"

function TitleUpdateAssociate() {
  return (
    <>
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Associate Management</h5>
          </div>
        </div>
        <UpdateAssociate/>
      </div>
    </>
  )
}

export default TitleUpdateAssociate;