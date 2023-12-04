import React from 'react'
import classes from "../../dashboard/TitleDashboard.module.css"
import Updatebatch from './UpdateBatch'


const TitleUpdateBatch = () => {
  return (
    <div>
      <>
    <div className="container-fluid">
      <div className={`row ${classes.back}`}>
        <div className="col">
          <h5 className={classes.title}>Batch Management</h5>
        </div>
      </div>
      <Updatebatch/>
    </div> 
  </>
    </div>
  )
}

export default TitleUpdateBatch
