import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../common/ui/Pagination";
import { ShowFilters } from "../common/ui/ShowFilters";
import { useState } from "react";
import { Search } from "../common/ui/Search";

const data = [
  {
    id: 1,
    name: "BG1BU2--ON_DEMAND-AWS-(Java, AWS)-JANUARY-2024",
    startDate: "20-11-2023",
    endDate: "21-11-2023",
  },
  {
    id: 2,
    name: "BG1BU2--ON_DEMAND-AWS-(Java, AWS)-JANUARY-2024",
    startDate: "20-11-2023",
    endDate: "21-11-2023",
  },
  {
    id: 2,
    name: "BG1BU2--ON_DEMAND-AWS-(Java, AWS)-JANUARY-2024",
    startDate: "20-11-2023",
    endDate: "21-11-2023",
  },
  {
    id: 2,
    name: "BG1BU2--ON_DEMAND-AWS-(Java, AWS)-JANUARY-2024",
    startDate: "20-11-2023",
    endDate: "21-11-2023",
  },
  {
    id: 2,
    name: "BG1BU2--ON_DEMAND-AWS-(Java, AWS)-JANUARY-2024",
    startDate: "20-11-2023",
    endDate: "21-11-2023",
  },
  {
    id: 2,
    name: "BG1BU2--ON_DEMAND-AWS-(Java, AWS)-JANUARY-2024",
    startDate: "20-11-2023",
    endDate: "21-11-2023",
  },
  {
    id: 2,
    name: "BG1BU2--ON_DEMAND-AWS-(Java, AWS)-JANUARY-2024",
    startDate: "20-11-2023",
    endDate: "21-11-2023",
  },
];

export const TrainingList = () => {
  const [data1, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(5);
  const [recordsPerPage] = useState(10);
  const columns = [
    {
      label: "#",
      field: "id",
    },

    {
      label: "Name",
      field: "name",
    },

    {
      label: "Start Date",
      field: "startDate",
    },
    {
      label: "End Date",
      field: "endDate",
    },

    {
      label: "Action",
      field: "",
    },
  ];
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data1.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data1.length / recordsPerPage);

  return (
    <>
      <div className="row">
        <h5>Training List</h5>

        <hr></hr>
        <div className="col-sm-12 col-md-2">
          <ShowFilters />
        </div>
        <div
          className="col-sm-12 col-md-4"
          style={{ marginTop: "-62px", marginLeft: "685px" }}
        >
          <h6> Search</h6>
          <input
            className="form-control form-control-sm ml-3 w-75  "
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>

      <hr></hr>
      <table className={`table table-bordered table-striped table-hover `}>
        <thead>
          <tr>
            {columns.map((column, key) => {
              return (
                <th key={key}>
                  {column.label !== "Action" ? (
                    <button
                      type="button"
                      style={{ border: 0, backgroundColor: "white" }}
                    >
                      {column.label}
                    </button>
                  ) : (
                    <button style={{ border: 0, backgroundColor: "white" }}>
                      {column.label}
                    </button>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>
                  {" "}
                  <Link to={`/updateList`}>
                    <i className="fa fa-edit" title="Update"></i>&nbsp;{" "}
                  </Link>
                  <Link to={`training-trainingList/deleteList/`}>
                    <i className="fa fa-trash-can" title="Delete"></i>&nbsp;
                  </Link>
                  <Link to={`training-trainingList/viewRequestForm/`}>
                    {" "}
                    <i className="fa fa-eye" title="View"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
