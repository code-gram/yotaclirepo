import React from "react";
import classes from "./ListAssociateItem.module.css";
import AssociatesList from "./AssociatesList";

const ListAssociateItem = () => {
  
  return (

    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Associate Name</th>
            <th>Technology Name</th>
            <th>Email Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <AssociatesList/>
        </tbody>
      </table>
    </div>
  );
};

export default ListAssociateItem;

