import React, { useState, useMemo } from "react";
import classes from "./ListTest.module.css";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
    testName: "Java",
    assignTest: 1,
    testTekan: 1,
    shortlisted: 0,
    createdOn: "20-11-2023",
    endDate: "21-11-2023",
    testType: "public",
    status: "active",
  },
  {
    id: 2,
    testName: "Aws",
    assignTest: 10,
    testTekan: 3,
    shortlisted: 2,
    createdOn: "13-01-2023",
    endDate: "14-01-2023",
    testType: "private",
    status: "inactive",
  },
  {
    id: 3,
    testName: "Angular",
    assignTest: 10,
    testTekan: 8,
    shortlisted: 5,
    createdOn: "02-04-2023",
    endDate: "03-04-2023",
    testType: "public",
    status: "active",
  },
  {
    id: 4,
    testName: "React",
    assignTest: 8,
    testTekan: 4,
    shortlisted: 2,
    createdOn: "14-12-2023",
    endDate: "15-12-2023",
    testType: "public",
    status: "inactive",
  },
  {
    id: 5,
    testName: "Spring",
    assignTest: 10,
    testTekan: 9,
    shortlisted: 6,
    createdOn: "13-05-2023",
    endDate: "16-05-2023",
    testType: "private",
    status: "active",
  },
  {
    id: 6,
    testName: "String",
    assignTest: 9,
    testTekan: 5,
    shortlisted: 8,
    createdOn: "03-08-2023",
    endDate: "04-08-2023",
    testType: "private",
    status: "active",
  },
  {
    id: 7,
    testName: "Collection",
    assignTest: 10,
    testTekan: 8,
    shortlisted: 5,
    createdOn: "13-07-2023",
    endDate: "15-07-2023",
    testType: "private",
    status: "active",
  },
];

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const TestList = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(Data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const columns = [
    {
      label: "#",
      field: "id",
    },
    {
      label: "Test Name",
      field: "testName",
    },
    {
      label: "AssignTest",
      field: "assignTest",
    },
    {
      label: "Test Taken",
      field: "testTekan",
    },
    {
      label: "Shortlisted",
      field: "shortlisted",
    },
    {
      label: "Created On",
      field: "createdOn",
    },
    {
      label: "End Date",
      field: "endDate",
    },
    {
      label: "Status",
      field: "status",
    },
    {
      label: "Test Type",
      field: "testType",
    },
    {
      label: "Action",
      field: "",
    },
  ];

  console.log(Data);
  return (
    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {columns.map((column, key) => {
              return (
                <th key={key}>
                  {column.label !== "Action" ? (
                    <button
                      type="button"
                      onClick={() => requestSort(column.field)}
                      className={getClassNamesFor(column.field)}
                      style={{ border: 0, backgroundColor: "white" }}
                    >
                      {column.label}

                      <i
                        className="fa-solid fa-sort"
                        style={{ marginLeft: "4px" }}
                      ></i>
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
          {items.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.testName}</td>
                <td>{item.assignTest}</td>
                <td>{item.testTekan}</td>
                <td>{item.shortlisted}</td>
                <td>{item.createdOn}</td>
                <td>{item.endDate}</td>
                <td>{item.status}</td>
                <td>{item.testType}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <ul
                      style={{ backgroundColor: "lightgrey", color: "black" }}
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        {" "}
                        &nbsp; &nbsp;{" "}
                        <Link to={`/trainer/assignTest`}>
                          <i className="fa-solid fa-plus"></i>
                        </Link>
                        Add
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i class="fa-solid fa-eye"></i>View
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i class="fa-solid fa-copy"></i>Copy
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i class="fa-solid fa-share-nodes"></i>Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i class="fa-solid fa-pen-to-square"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i class="fa-solid fa-gear"></i>Setting
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i class="fa-solid fa-trash"></i>Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TestList;
