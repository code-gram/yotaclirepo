import React from 'react'
import Card from '../../../ui/card/Card';
import classes from './RegisterAssociate.module.css'
import RegisterAssociateForm from './RegisterAssociateForm';

const RegisterAssociate = () => {
    return (
        <div className={classes.card}>
            <Card>
                <RegisterAssociateForm/>
            </Card>
        </div>
    )
}

export default RegisterAssociate;