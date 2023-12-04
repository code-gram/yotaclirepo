import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchClient,
  deleteClient,
} from "../../../redux/features/client/CreateClientSlice";
import { Link, useNavigate } from "react-router-dom";
import AddClientQuestion from "../addClientQuestion/AddClientQuestion";
import ClientQuestionForm from "../addClientQuestion/ClientQuestionForm";

const ClientsList = () => {
  const client = useSelector((state) => state.clients.clients);
  console.log("client" + client);
  const dispatch = useDispatch();
  const native = useNavigate();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchClient());
  }, []);
  if (client.loading) {
    console.log("Loading...");
    return (
      <tr>
        <td></td>
        <td>
          <h5>Loading Client Details....</h5>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <>
      {client
        ? client.map((client, key) => (
            <tr key={key}>
              <td>{client.clientId}&nbsp;&nbsp;</td>

              <Link to={`/trainer/addClientQuestion/${client.clientId}`}>
                <td>{client.clientName}</td>
              </Link>

              <td>{client.technology}</td>
              <td>{client.shortDescription}</td>
              <td>
                <Link to={`/trainer/updateclient/${client.clientId}`}>
                  {" "}
                  <i className="fa fa-edit" title="Update"></i>&nbsp;{" "}
                </Link>
                <Link
                  to={`/trainer/deleteclient/${client.clientId}`}
                  onClick={() => dispatch(deleteClient(client.clientId))}
                >
                  <i className="fa fa-trash-can" title="Delete"></i>&nbsp;&nbsp;
                </Link>

                <Link to={`/trainer/viewQuestion/${client.clientId}`}>
                  {" "}
                  <i className="fa fa-eye" title="View"></i>
                </Link>
              </td>
            </tr>
          ))
        : null}
    </>
  );
};

export default ClientsList;
