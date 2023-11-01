import React from "react";
import classes from "./HeaderItem.module.css";
import Button from "../../../ui/button/Button";
const HeaderItem = () => {
  return (
    <div className="row">
      <div className="row mt-3">
        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
          <h5 className={classes.boxtitle}>Parent Technology</h5>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
          <form className="form-inline">
            <div className={classes.btn}>
              <Button>Add</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default HeaderItem;
