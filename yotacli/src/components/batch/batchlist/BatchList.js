import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import classes from "../batchlist/ListBatchItem.module.css";
import {
  fetchBatch,
  handleSearchBatch,
} from "../../../redux/features/batch/batchListSlice";
import { batchDelete } from "../../../redux/features/batch/deleteBatchSlice";
import { useLocation } from "react-router";

const BatchList = ({ currentPage, dataPerPage }) => {
  const dispatch = useDispatch();
  const batch = useSelector((state) => state.batch);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchBatch());
  }, [location.key]);

  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;

  if (batch.loading) {
    console.log("Loading...");
    return (
      <tr>
        <td></td>
        <td>
          <h5>Loading Batch Details....</h5>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  if (batch.searchBatch.length !== 0) {
    if (batch.searchBatch[0].length === 0) {
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
    if (batch.searchBatch[0].length > 0) {
      console.log("batch.searchBatch[0].length > 0");

      const searchPaginatedSlice = batch.searchBatch[0];
      console.log("searchPaginatedSlice:", searchPaginatedSlice);

      console.log("firstDataIndex:", firstDataIndex);
      console.log("lastDataIndex:", lastDataIndex);

      const searchPaginatedData = searchPaginatedSlice.slice(
        firstDataIndex,
        lastDataIndex
      );
      console.log("searchPaginatedData to show:", searchPaginatedData);

      return searchPaginatedData.map((result, key) => (
        <tr key={key}>
          <td>{result.batchIdentifier}</td>
          <td>{result.batchName}</td>
          <td>{result.batchDescription}</td>
          <td>{result.startDate}</td>
          <td>{result.endDate}</td>
          <td>{result.createdAt}</td>
          <td>{result.updatedAt}</td>
          <td>
            <Link
              to={`/trainer/updatebatch/${result.id}`}
              className={classes.link}
            >
              {" "}
              <i className="fa fa-edit"></i>&nbsp;{" "}
            </Link>

            <Link
              to={`/trainer/deletebatch/${result.id}`}
              onClick={() => dispatch(batchDelete(result.id))}
            >
              <i className="fa fa-trash-can"></i>
            </Link>
          </td>
        </tr>
      ));
    }
  }
};

export default BatchList;
