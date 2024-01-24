import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "../client-management/ListClient.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";


const data = [
  {
    id: 1,
    name: "Jay",
    technology: "HTML",
    descrip: "Frontend",
    action: "Active",
  },
  {
    id: 2,
    name: "Mitchel",
    technology: "JAVA",
    descrip: "Backend",
    action: "Active",
  },
  {
    id: 3,
    name: "Pat",
    technology: "HTML",
    descrip: "Frontend",
    action: "Active",
  },
  {
    id: 4,
    name: "Rohit",
    technology: "SQL",
    descrip: "Database",
    action: "Active",
  },
  {
    id: 5,
    name: "Virat",
    technology: "HTML",
    descrip: "Frontend",
    action: "Active",
  },
  {
    id: 6,
    name: "Sai",
    technology: "CSS",
    descrip: "Frontend",
    action: "Active",
  },
  {
    id: 7,
    name: "Ashwin",
    technology: "HTML",
    descrip: "Frontend",
    action: "Active",
  },
  {
    id: 8,
    name: "Head",
    technology: "CSS",
    descrip: "Frontend",
    action: "Active",
  },
  {
    id: 9,
    name: "Kishan",
    technology: "HTML",
    descrip: "Frontend",
    action: "Active",
  },
  {
    id: 10,
    name: "Ravi",
    technology: "HTML",
    descrip: "Frontend",
    action: "Active",
  },
  {
    id: 11,
    name: "Andrew",
    technology: "SPRING",
    descrip: "Backend",
    action: "Active",
  },

  
];
const columns = [
  { id: "id", label: "#" },
  { id: "name", label: "Name Of Client" },
  { id: "technology", label: "Technology" },
  { id: "descrip", label: "Description" },
  { id: "action", label: "Action" },
];

const ListClient = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedField, setSortedField] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const selectedRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(selectedRowsPerPage);
    setPage(0);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };
  const handleSort = (field) => {
    if (sortedField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortedField(field);
      setSortOrder("asc");
    }
  };
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const sortedData = sortedField
    ? [...filteredData].sort((a, b) =>
        sortOrder === "asc"
          ? a[sortedField] > b[sortedField]
            ? 1
            : -1
          : b[sortedField] > a[sortedField]
          ? 1
          : -1
      )
    : filteredData;
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div className="table-container">
      <div className="btn-cli-wrapper">
        <div className="header-list-wrapper">
          <div className="list-client-search">
            <div className="show-entries">
              <div class="dataTables_length" id="example_length">
                <label>
                  Show Entries
                  <br></br>
                  <select
                    name="example_length"
                    onChange={handleChangeRowsPerPage}
                    value={rowsPerPage}
                    aria-controls="example"
                    class="list-client-drpt"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>{" "}
                </label>
              </div>
            </div>

           

            <div className="list-cli-search">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="list-client-search-btn"
              />
            </div>
            <div className="search-icon">
              <CiSearch />
            </div>
          </div>
        </div>
      </div>
      <hr className="line-cl"></hr>

      <table className="mb-0 table table-bordered table-striped">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} onClick={() => handleSort(column.id)}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
        <td key={column.id}>
        {column.id === "action" ? (
          <div className="action-icons">
            <FontAwesomeIcon icon={faEdit} className="action-icon" />
            <span className="action-divider">_</span>
            <FontAwesomeIcon icon={faTrash} className="action-icon" />
            <span className="action-divider">_</span>
            <FontAwesomeIcon icon={faEye} className="action-icon" />
          </div>
        ) : (
          
          row[column.id]
        )}
      </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          className="list-client-prev-btn"
          onClick={() => handleChangePage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`list-client-page-btn ${
              pageNumber === page + 1 ? "active" : ""
            }`}
            onClick={() => handleChangePage(pageNumber - 1)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="list-client-next-btn"
          onClick={() => handleChangePage(page + 1)}
          disabled={page === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListClient;
