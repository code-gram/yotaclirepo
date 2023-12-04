
import classes from "./Pagination.module.css"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Pagination = ({dataPerPage, setCurrentPage, currentPage, toggleRecord}) => {
  const technology = useSelector((state) => state.technology);
  const technologyTestNumber = useSelector((state) => state.technology.testNumberArray);

  const totalData = technology.searchTech.length;
  console.log("total Data:",totalData);

  const totalTestData = technologyTestNumber.length;
  console.log("totalTestData",totalTestData);

  let totalSearchData;
  if(totalData !== 0){
    totalSearchData = technology.searchTech[0].length;
    console.log("total Search Data:",totalSearchData);
  }
  
  let totalTestPageData;
  if(totalTestData!==0){
    totalTestPageData = technologyTestNumber[0].length;
    console.log("totalTestPageData:",totalTestPageData);
  }

  console.log("dataPerPage:",dataPerPage);
  
  let pages = [];

  if(totalSearchData !== undefined){
    pages = []
    console.log("IN total Search Data", pages);
    console.log("totalSearchData/dataPerPage:",totalSearchData/dataPerPage);
    for (let i = 1; i <= Math.ceil(totalSearchData/dataPerPage); i++){
      pages.push(i);
    }
  }else{
    pages = []
    console.log("IN Normal Data", pages);
    console.log("totalData/dataPerPage:",totalData/dataPerPage);
    for (let i = 1; i <= Math.ceil(totalData/dataPerPage); i++){
      pages.push(i);
    }
  }
  console.log("pages:",pages.length);

if (toggleRecord){
  if(totalTestPageData > 0){
    pages = []
    console.log("IN total test Data per page", pages);
    console.log("totalTestPageData/dataPerPage:",totalTestPageData/dataPerPage);
    for (let i = 1; i <= Math.ceil(totalTestPageData/dataPerPage); i++){
      pages.push(i);
    }
  }
}

  const previousPage = () => {
    if (currentPage !== 1){
      setCurrentPage(currentPage - 1);
    }
  }

  const nextPage = () => {
    if (currentPage !== pages.length){
      setCurrentPage(currentPage + 1);
    }
  }


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

             
              {pages.map((page, index)=>{
                  return <button className="page-link" onClick={() => setCurrentPage(page)} key={index} style={{background: page==currentPage ? "grey": "white", 
                  color: page==currentPage ? "white": "blue"}}>{page}</button>
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
  )
}

export default Pagination

