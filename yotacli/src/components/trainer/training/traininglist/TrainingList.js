import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import classes from "./ListTrainingItem.module.css";
import { fetchTraining } from "../../../redux/features/Training/trainingListSlice";
import { trainingDelete } from "../../../redux/features/Training/deleteTrainingSlice";
import { useLocation } from "react-router";

const TrainingList = ({ currentPage, dataPerPage }) => {
  const dispatch = useDispatch();
  const training = useSelector((state) => state.training);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchTraining());
  }, [location.key]);

  if (training.loading) {
    console.log("Loading...");
    return (
      <tr>
        <td></td>
        <td>
          <h5>Loading Training Details....</h5>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  if (training.searchTraining && training.searchTraining.length !== 0) {
    const searchTrainingSlice = training.searchTraining[0];

    if (searchTrainingSlice && searchTrainingSlice.length === 0) {
      return (
        <tr>
          <td></td>
          <td>
            <h3>Search Not found</h3>
          </td>
          <td></td>
          <td></td>
        </tr>
      );
    }

    if (searchTrainingSlice && searchTrainingSlice.length > 0) {
      const lastDataIndex = currentPage * dataPerPage;
      const firstDataIndex = lastDataIndex - dataPerPage;

      const searchPaginatedData = searchTrainingSlice.slice(
        firstDataIndex,
        lastDataIndex
      );

      return searchPaginatedData.map((result, key) => (
        <tr key={key}>
          <td>{result.trainingIdentifier}</td>
          <td>{result.trainingName}</td>
          <td>{result.trainingDescription}</td>
          <td>{result.startDate}</td>
          <td>{result.endDate}</td>
          <td>{result.createdAt}</td>
          <td>{result.updatedAt}</td>
          <td>
            <Link
              to={`/trainer/updatetraining/${result.id}`}
              className={classes.link}
            >
              {" "}
              <i className="fa fa-edit"></i>&nbsp;{" "}
            </Link>

            <Link
              to={`/trainer/deletetraining/${result.id}`}
              onClick={() => dispatch(trainingDelete(result.id))}
            >
              <i className="fa fa-trash-can"></i>
            </Link>
          </td>
        </tr>
      ));
    }
  }

  return null;
};

export default TrainingList;
