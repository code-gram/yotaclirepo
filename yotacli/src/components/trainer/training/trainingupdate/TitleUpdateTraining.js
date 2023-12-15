import React from 'react'
import classes from "../../dashboard/TitleDashboard.module.css"
import Updatetraining from './UpdateTraining'


const TitleUpdateTraining = () => {
  return (
    <div>
      <>
    <div className="container-fluid">
      <div className={`row ${classes.back}`}>
        <div className="col">
          <h5 className={classes.title}>Training Management</h5>
        </div>
      </div>
      <Updatetraining/>
    </div> 
  </>
    </div>
  )
}

export default TitleUpdateTraining
