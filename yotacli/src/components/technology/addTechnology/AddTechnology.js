import React from "react";
import Card from "../../../ui/card/Card";
import classes from "./AddTechnology.module.css";
import RegisterTechnologyForm from "./RegisterTechnologyForm";

const AddTechnology = () => {
  return (
    <div className={classes.card}>
      <Card>
        <RegisterTechnologyForm />
      </Card>
    </div>
  );
};
export default AddTechnology;
