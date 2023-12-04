import React from 'react';
import AddQuestion from './AddQuestion';
import classes from "../../../components/dashboard/TitleDashboard.module.css";

const TitleAddQuestion = () => {
  return (
    <>
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h6 className={classes.title}>Question Management</h6>
          </div>
        </div>
        <AddQuestion />
      </div>
    </>
  )
}

export default TitleAddQuestion
