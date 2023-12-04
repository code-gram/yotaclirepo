import React, { useEffect, useState } from "react";
import classes from "./ListTechnologyItem.module.css";
import axios from "axios";

import TestList from "./TestList";
import { useSelector } from "react-redux";

const ListTestItem = ({currentPage, dataPerPage}) => {
 

  return (
    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>TestName</th>
            <th>AssignTest</th>
            <th>TestTakan</th>
            <th>Shortlisted</th>
            <th>CreatedOn</th>
            <th>EndDate</th>
            <th>Status</th>
            <th>TestType</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <TestList 
            currentPage={currentPage}
            dataPerPage={dataPerPage}
            />
        </tbody>
      </table>
    </div>
  );
};

export default ListTestItem;
