import React from "react";
import classes from "./ListAssociateItem.module.css";
import AssociatesList from "./AssociatesList";

const ListAssociateItem = ({ currentPage, dataPerPage }) => {
  return (
    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Associate Name</th>
            <th>Email Id</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <AssociatesList currentPage={currentPage} dataPerPage={dataPerPage} />
        </tbody>
      </table>
    </div>
  );
};

export default ListAssociateItem;
