import React from "react";
import classes from './CancelButton.module.css';

const CancelButton = (props) => {

  return (
    <>
    <button type="submit" className={`btn btn-secondary ${classes.btn}`}>{props.children}</button>
    </>
  );

};

export default CancelButton;
