import React, { useEffect } from "react";
import classes from "../../../components/technology/recordTechnology/RecordTechDetails.module.css";
import { useParams } from "react-router-dom";
import { fetchTechnologyTestDetails } from "../../../redux/features/technology/CreateTechSlice";
import { useDispatch, useSelector } from "react-redux";

const RecordTechDetails = () => {
  const { name } = useParams();
  console.log("UseParam name in RecordTechDetails.js", name);
  const dispatch = useDispatch();

  const technologyTestDetails = useSelector(
    (state) => state.technology.testDetailsArray
  );
  console.log(
    "original array in List Record technologyTestDetails",
    technologyTestDetails
  );

  useEffect(() => {
    dispatch(fetchTechnologyTestDetails(name));
  }, []);

  return (
    <div>
      <div className={classes.boxtitle}>Technology Name: {name}</div>
      <br />
      <div className={`table-responsive ${classes.table}`}>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Test Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {technologyTestDetails.length &&
            technologyTestDetails[0].length > 0 ? (
              technologyTestDetails[0].map((tech, key) => (
                <tr key={key}>
                  <td>
                    <b>{key}</b>
                  </td>
                  <td>{tech.testName}</td>
                  <td>{tech.testDescription}</td>
                  <td>
                    <i className="fa fa-edit"></i>&nbsp;{" "}
                    <i className="fa fa-trash-can"></i>{" "}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td></td>
                <td>
                  <h3>No Test Found</h3>
                </td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordTechDetails;
