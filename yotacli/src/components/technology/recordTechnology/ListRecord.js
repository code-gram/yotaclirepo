import React, { useEffect } from "react";
import classes from "../../../components/technology/recordTechnology/ListRecord.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTechnology,
  fetchTechnologyTestNumber,
} from "../../../redux/features/technology/CreateTechSlice";
import { Link } from "react-router-dom";

const ListRecord = ({ currentPage, dataPerPage }) => {
  const dispatch = useDispatch();
  const technologyTestNumber = useSelector(
    (state) => state.technology.testNumberArray
  );
  console.log(
    "original array in List Record technologyTestNumber",
    technologyTestNumber
  );

  useEffect(() => {
    dispatch(fetchTechnologyTestNumber());
  }, []);

  //Pagination
  console.log("currentPage:", currentPage);
  console.log("dataPerPage:", dataPerPage);
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  console.log("lastDataIndex:", lastDataIndex);
  console.log("firstDataIndex:", firstDataIndex);

  let paginatedData;
  if (technologyTestNumber.length !== 0) {
    if (technologyTestNumber[0].length > 0) {
      paginatedData = technologyTestNumber[0].slice(
        firstDataIndex,
        lastDataIndex
      );
      console.log("Data per page to show:", paginatedData);

      return (
        <div className={`table-responsive ${classes.table}`}>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Name Of Technology</th>
                <th>Test Number</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((tech, key) => (
                <tr key={key}>
                  <td>
                    <b>{key + firstDataIndex + 1}</b>
                  </td>
                  <td>{tech.name}</td>
                  <td>
                    <Link to={`/recordTechDetails/${tech.name}`}>
                      {tech.testCount}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
};

export default ListRecord;
