import React, { useState ,useEffect } from "react";
import {useSelector,useDispatch } from "react-redux";
import "./ListUnit.css";
import {CreateUnitForm } from "../../unit-management/add-unit/CreateUnitForm"
import { fetchUnits ,deleteUnit,updateUnit} from "../../../features/redux/unit/unitAction";
import {sortUnits } from "../../../features/redux/unit/unitSlice";
const ASC = "ASC";
const DSC = "DSC";
 
const ListUnit = () => {
  const data = useSelector((state) => state.unit.units);
  const [order, setorder] = useState("ASC");
  const dispatch = useDispatch();
  const units = useSelector((state) => state.unit.units);
  const [ setdata] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control the visibility of the form component
  // const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  // const [updatedUnitData, setUpdatedUnitData] = useState({});
  
  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);
 
//delete
const handleDelete = (unitId) => {
  // Show a confirmation dialog before deleting
  if (window.confirm("Are you sure you want to delete this unit?")) {
    dispatch(deleteUnit(unitId));
  }
}; 

const sorting = (col) => {

  dispatch(sortUnits({ column: col, type: "number" }));
  dispatch(sortUnits({ column: col, type: "string" }));};

  const handleUpdate = () => {
    setIsFormOpen(true); // Open the form component
  };
 
  return (
    <div>
      <h5>Training List</h5>
      <hr></hr>
      {/* Render the form component if isFormOpen is true */}
      <div className="show-sort">
        <label>Show Entries</label>
        <br></br>
        <select className="sort-option" >
          <option selected>0</option>
          <option value="1">5</option>
          <option value="2">10</option>
          <option value="3">15</option>
        </select>
 
        <label className="Search-label">Search</label>
        <div className="input-group">
          <input
            type="search"
            class="form-control rounded"
            id="myInput"
            placeholder="Search by ID or Name"
            aria-label="Search"
            aria-describedby="search-addon"
            
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      <hr className="divider" />
 
      <table
        id="myTable"
        className="table table-striped table-bordered table-sm"
        cellspacing="0"
        width="100%"
      >
        <thead>
  <tr>
    <th className="table-columns" onClick={() => ("id")}>
      # ⇅
    </th>
    <th className="table-columns" onClick={() => sorting("name")}>
      Unit Name ⇅
    </th>
    <th className="table-columns" onClick={() => sorting("shortDescription")}>
      Unit Description ⇅
    </th>
    <th> Action</th>
  </tr>
</thead>
 
        <tbody>
  {data.length > 0 ? (
    data.map((d) => (
      <tr className="table-rows" key={d.id}>
        <td>{d.id}</td>
        <td>{d.name}</td>
        <td>{d.shortDescription}</td>
        <td>
          <i className="fa-solid fa-trash" id="icons" onClick={() => handleDelete(d.id)}>
            _
          </i>
          <i className="fa-solid fa-pen-to-square" id="icons" onClick={() => handleUpdate(d)}>
            _
          </i>
         
          <i className="fa-solid fa-eye" id="icons"></i>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No data available</td>
    </tr>
  )}
</tbody>
      </table>
 
      <nav aria-label="Page navigation example">
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      </nav>
    </div>
  );
};
 
export default ListUnit;