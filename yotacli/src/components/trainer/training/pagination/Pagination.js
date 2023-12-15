import classes from "./Pagination.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 
const Pagination = ({ dataPerPage, setCurrentPage, currentPage, toggleRecord }) => {
const training = useSelector((state) => state.training);
  const totalData = training.searchTraining ? training.searchTraining.length : 0;
 
const trainingTestNumber = useSelector((state) => state.training.testNumberArray);
  const totalTestData = trainingTestNumber ? trainingTestNumber.length : 0;
 
  let pages = [];
 
  if (totalData > 0) {
    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
      pages.push(i);
    }
  }
 
  if (toggleRecord && totalTestData > 0) {
    pages = [];
    for (let i = 1; i <= Math.ceil(totalTestData / dataPerPage); i++) {
      pages.push(i);
    }
  }
 
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
 
  const nextPage = () => {
    if (currentPage !== pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
 
  return (
    <div className={classes.pagination}>
      <div className="row justify-content-center">
        <div className="col-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link" onClick={previousPage}>
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {pages.map((page, index) => {
                return (
                  <li key={index} className="page-item">
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(page)}
                      style={{
                        background: page === currentPage ? "grey" : "white",
                        color: page === currentPage ? "white" : "blue",
                      }}
                    >
                      {page}
                    </button>
                  </li>
                );
              })}
              <li className="page-item">
                <button className="page-link" onClick={nextPage}>
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
 
export default Pagination;