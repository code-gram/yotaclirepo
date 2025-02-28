import React, { useEffect } from "react";
import styles from "../../pages/associates/AllAssociates.module.css";
import Card from "../../components/Card/Card";
import { TableHeader } from "../../components/table-component/TableHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssociatesTestByEmailId } from "../../features/associates/associateAction";

import { Link } from "react-router-dom";

const MyTest = () => {
  const { associates } = useSelector((state) => state.associates);
  const { testClick } = useSelector((state) => state.testresult);
  const { token, email } = useSelector((state) => state.auth.userData);
  const theadData = ["S.No", "Test Name", "Start Date", "End Date", "Action"];
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchAllAssociatesTestByEmailId(email));
    }
  }, [dispatch, token, email]);

  
  const currentDateTime = new Date();
  return (
    <>
      <div className="card-header">
        <h4>My Test List</h4>
      </div>
      <Card className={styles["users-list"]}>
        <div class="mb-1">
          <input
            type="text"
            placeholder="Search..."
            style={{ marginRight: "600px" }}
          />
          <button className="btn btn-warning" style={{ marginLeft: "600px" }}>
            <Link className="nav-link" to="/MyTest">
              Refresh
            </Link>
          </button>
        </div>
        {associates.length > 0 ? (
          <div>
            <table className="table table-bordered table-striped table-hover mt-2">
              <TableHeader theadData={theadData} />
              <tbody>
                {associates.map((data, index) => {
                  return (
                    <tr key={data.id}>
                      <th scope="row">{++index}</th>
                      <td>{data.testTitle}</td>
                      <td>{data.created_at}</td>
                      <td>{data.endDate}</td>
                      <td>
                        {data.action === "completed" ? (
                          <button type="button" className="btn btn-info">
                            Result
                          </button>
                        ) :  data.testStatus!=="COMPLETED" ? (
                          <button type="button" className="btn btn-success">
                            <Link
                              className="nav-link"
                              to={`/starttest/` + data.id}
                            >
                              Start test
                            </Link>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-success"
                             disabled={true}
                          >
                            <Link
                              className="nav-link"
                              to={`/starttest/` + data.id}
                            >
                              Start test
                            </Link>
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles["custom-text-left"]}>
            <b>No Test found ..</b>
          </div>
        )}
      </Card>
    </>
  );
};
export default MyTest;
