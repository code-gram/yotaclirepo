import React from 'react'
import TrainingForm from './TrainingForm'
import Card from '../../../ui/card/Card'
import classes from "./Createtraining.module.css";

const CreateTraining = () => {
  return (
    <div className={`justify-content-centre ${classes.card}`}>
      <Card>
        <TrainingForm />
      </Card>
     
    </div>
  )
}

export default CreateTraining
