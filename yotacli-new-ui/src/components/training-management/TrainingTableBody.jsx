import React from "react";
import { Link } from "react-router-dom";
import "./Training.module.css";
import Button from "../common/button/Button";
import CancelButton from "../common/button/CancelButton";

const TrainingTableBody = ({ rows, columns, role }) => {
  return (
    <>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.id}>
                {column.id === "action" ? (
                  <div className="action-icon">
                    {role === "Technical Manager" ? (
                      <>
                        <div>
                          {row.status === "APPROVED" ? (
                            <div></div>
                          ) : (
                            <div>
                              <Link to={`/approveTraining/` + row.id}>
                                <i
                                  className="fa-solid fa-pen-to-square"
                                  id="eidt"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  type="button"
                                  title="Approve Training"
                                >
                                  _
                                </i>
                              </Link>
                              <Link to={`/rejectTraining/` + row.id}>
                                <i
                                  className="fa-solid fa-square-xmark"
                                  id="delete"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  type="button"
                                  title="Reject Training"
                                ></i>
                              </Link>
                            </div>
                          )}
                        </div>
                      </>
                    ) : role === "Requester" ? (
                      <div>
                        <Link to={`/editTraining/` + row.id}>
                          <i className="fa-solid fa-pen-to-square" id="eidt">
                            _
                          </i>
                        </Link>

                        <Link to={`/deleteTraining`}>
                          <i className="fa-solid fa-trash" id="delete">
                            {" "}
                          </i>
                        </Link>
                      </div>
                    ) : (
                      <div>No Action Available</div>
                    )}
                  </div>
                ) : column.id === "trainingName" ? (
                  row.trainingName
                ) : (
                  row[column.id]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TrainingTableBody;
