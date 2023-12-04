import React from 'react'
import ListQuestions from './ListQuestions';
import classes from "../../dashboard/TitleDashboard.module.css";

const TitleQuestionList = () => {
  return (
    <div>
      <>
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Question Management</h5>
          </div>
        </div>
        <ListQuestions />
      </div>
    </>
    </div>
  )
}

export default TitleQuestionList
