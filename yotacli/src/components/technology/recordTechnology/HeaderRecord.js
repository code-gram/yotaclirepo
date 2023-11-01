import React from "react";
import classes from "../../../components/technology/recordTechnology/HeaderRecord.module.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../../../ui/button/Button";

const HeaderRecord = () => {
  const { name } = useParams();
  console.log("UseParam name in Header Record.js", name);
  const technology = useSelector((state) => state.technology.technologies);
  console.log("original array in Record", technology);
  // console.log("First name in Record",technology[0].name);

  return (
    <div className="row">
      <div className="row mt-3">
        <div className="col-xl-12 col-lg-12 col-md-8 col-sm-8 d-flex">
          <h6 className={classes.boxtitle}>
            {name ? "Test Detail Report" : "Technology Records"}
          </h6>
          <div className="col-xl-5 col-lg-4 col-md-4 col-sm-6 ms-3"></div>
          <div className="col-xl-1 col-lg-1 col-md-2 col-sm-4 ms-3 justify-content-end">
            <div className={classes.btnfilter}>
              {name && (
                <Link to={"/recordTechnology"}>
                  <Button>Back</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRecord;
