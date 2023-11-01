import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTechnology,
  fetchTechnology,
  handleSearchTech,
} from "../../../redux/features/technology/CreateTechSlice";

const TechnologyList = ({ currentPage, dataPerPage }) => {
  const dispatch = useDispatch();
  const technology = useSelector((state) => state.technology);
  // console.log("State Error:",technology.searchError);
  console.log("searchTech array to search Technology:", technology.searchTech);
  console.log("Original Array List:", technology.technologies);

  useEffect(() => {
    dispatch(fetchTechnology());
  }, []);

  //Pagination
  console.log("currentPage:", currentPage);
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;

  const paginatedData = technology.searchTech.slice(
    firstDataIndex,
    lastDataIndex
  );
  console.log("Data per page to show:", paginatedData);
  //Loading Data
  if (technology.loading) {
    console.log("Loading...");
    return (
      <tr>
        <td></td>
        <td>
          <h6>Loading Tech Details....</h6>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }
  //Search Data not found
  if (technology.searchTech.length !== 0) {
    console.log("technology.searchTech.length !== 0");

    if (technology.searchTech[0].length === 0) {
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

    //Search Data Found
    if (technology.searchTech[0].length > 0) {
      console.log("technology.searchTech[0].length > 0");

      const searchPaginatedSlice = technology.searchTech[0];
      console.log("searchPaginatedSlice:", searchPaginatedSlice);

      console.log("firstDataIndex:", firstDataIndex);
      console.log("lastDataIndex:", lastDataIndex);

      const searchPaginatedData = searchPaginatedSlice.slice(
        firstDataIndex,
        lastDataIndex
      );
      console.log("searchPaginatedData to show:", searchPaginatedData);

      return searchPaginatedData.map((tech, key) => (
        <tr key={key}>
          <td>
            <b>{key + firstDataIndex + 1}</b>
          </td>
          <td>{tech.name}</td>
          <td>{tech.shortDescription}</td>
          <td>
            <Link to={`/updatetechnology/${tech.name}`}>
              {" "}
              <i className="fa fa-edit"></i>&nbsp;{" "}
            </Link>
            {/* onClick={(event) => handleEditClick(event, list)} */}
            <Link
              to={`/deletetechnology/${tech.id}`}
              onClick={() => dispatch(deleteTechnology(tech.id))}
            >
              <i className="fa fa-trash-can"></i>{" "}
            </Link>
            {/* onClick={() => handleDeleteClick(tech.id)} */}
          </td>
        </tr>
      ));
    }

    //Display Original Array List
    return (
      <>
        {paginatedData.map((tech, key) => (
          <tr key={key}>
            <td>
              <b>{key + firstDataIndex + 1}</b>
            </td>
            <td>{tech.name}</td>
            <td>{tech.shortDescription}</td>
            <td>
              <Link to={`/updatetechnology/${tech.id}`}>
                {" "}
                <i className="fa fa-edit"></i>&nbsp;{" "}
              </Link>
              {/* onClick={(event) => handleEditClick(event, list)} */}
              <Link
                to={`/deletetechnology/${tech.id}`}
                onClick={() => dispatch(deleteTechnology(tech.id))}
              >
                <i className="fa fa-trash-can"></i>{" "}
              </Link>
              {/* onClick={() => handleDeleteClick(tech.id)} */}
            </td>
          </tr>
        ))}
      </>
    );
  }
};

export default TechnologyList;
