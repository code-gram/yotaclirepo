import React from 'react';
import Card from '../../../ui/card/Card';
import AddQuestionForm from './AddQuestionForm';


const AddQuestion = () => {
  return (
    <div style={{marginBottom:'5%'}}>
      <Card>
        <AddQuestionForm />
      </Card>
    </div>
  )
}

export default AddQuestion;