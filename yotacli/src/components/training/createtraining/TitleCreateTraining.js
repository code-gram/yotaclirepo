import React from 'react'
import CreateTraining from './CreateTraining'
import classes from "../../dashboard/TitleDashboard.module.css"

const TitleCreateTraining = () => {
  return (
    <>
    <div className="container-fluid">
      <div className={`row ${classes.back}`}>
        <div className="col" style={{textAlign:"left"}}>
          <h5 className={classes.title}>Training Management</h5> 
        </div>
      </div>
      <CreateTraining />
    </div>
  </>
  )
}

export default TitleCreateTraining
