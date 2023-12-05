import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteAssociate } from "../../../redux/features/associate/DeleteAssociateSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssociate } from "../../../redux/features/associate/ListAssociateSlice";

const AssociatesList = ({ currentPage, dataPerPage }) => {
  const dispatch = useDispatch();
  const associate = useSelector((state) => state.associate);

  console.log(
    "searchAssociate array to search Associate:",
    associate.searchAssociate
  );
  console.log("Original Array List:", associate.associates);

  useEffect(() => {
    dispatch(fetchAssociate());
  }, []);

  console.log("currentPage:", currentPage);
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;

  const paginatedData = associate.searchAssociate.slice(
    firstDataIndex,
    lastDataIndex
  );
  console.log("Data per page to show:", paginatedData);

  if (associate.loading) {
    console.log("Loading...");
    return (
      <tr>
        <td></td>
        <td>
          <h5>Loading Associate Details....</h5>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  if (associate.searchAssociate.length !== 0) {
    console.log("associate.searchAssociate.length !== 0");

    if (associate.searchAssociate[0].length === 0) {
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

    if (associate.searchAssociate[0].length > 0) {
      console.log("associate.searchAssociate[0].length > 0");

      const searchPaginatedSlice = associate.searchAssociate[0];
      console.log("searchPaginatedSlice:", searchPaginatedSlice);

      console.log("firstDataIndex:", firstDataIndex);
      console.log("lastDataIndex:", lastDataIndex);

      const searchPaginatedData = searchPaginatedSlice.slice(
        firstDataIndex,
        lastDataIndex
      );
      console.log("searchPaginatedData to show:", searchPaginatedData);

      return searchPaginatedData.map((associate, key) => (
        <tr key={key}>
          <td>
            <b>{key + firstDataIndex + 1}</b>
          </td>
          <td>{associate.name}</td>
          <td>{associate.emailId}</td>
          <td>******</td>
          <td>
            <Link to={`/trainer/updateAssociate/${associate.id}`}>
              {" "}
              <i className="fa fa-edit"></i>&nbsp;{" "}
            </Link>

            <Link
              to={`/trainer/deleteAssociate/${associate.id}`}
              onClick={() => dispatch(deleteAssociate(associate.id))}
            >
              <i className="fa fa-trash-can"></i>{" "}
            </Link>
          </td>
        </tr>
      ));
    }

    return (
      <>
        {paginatedData.map((associate, key) => (
          <tr key={key}>
            <td>
              <b>{key + firstDataIndex + 1}</b>
            </td>

            <td>{associate.name}</td>
            <td>{associate.emailId}</td>
            <td>******</td>
            <td>
              <Link to={`/trainer/updateAssociate/${associate.id}`}>
                {" "}
                <i className="fa fa-edit"></i>&nbsp;{" "}
              </Link>

              <Link
                to={`/trainer/deleteAssociate/${associate.id}`}
                onClick={() => dispatch(deleteAssociate(associate.id))}
              >
                <i className="fa fa-trash-can"></i>{" "}
              </Link>
            </td>
          </tr>
        ))}
      </>
    );
  }
};

export default AssociatesList;
