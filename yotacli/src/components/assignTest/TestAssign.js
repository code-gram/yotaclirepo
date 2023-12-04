import React, { useState } from "react";
import InputField from "../../ui/inputField/InputField";
import classes from "./TestAssignModal.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import modal from "./modal.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignTestToCandidate } from "../../redux/features/assignTestToCandidate/assignTestSlice";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { store } from "../../app/store";
import { postNotification } from "../../redux/features/notification/NotificationListSlice";

const TestAssign = () => {
  const navigate = useNavigate();

  const [testEmail, setTestEmail] = useState([]);
  const [value, setValue] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const handleKeyDown = (e) => {
    if (["Enter", "Tab", ","].includes(e.key)) {
      e.preventDefault();
      const trimmedValue = value.trim();
      if (trimmedValue && isValid(trimmedValue)) {
        setTestEmail([...testEmail, trimmedValue]);
        setValue("");
      }
    }
  };

  const handleDelete = (item) => {
    setTestEmail(testEmail.filter((i) => i !== item));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    const emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);
    if (emails) {
      const toBeAdded = emails.filter((email) => !isInList(email));
      setTestEmail([...testEmail, ...toBeAdded]);
    }
  };

  const isValid = (email) => {
    let error = null;
    if (isInList(email)) {
      error = `${email} has already been added.`;
    }
    if (!isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }
    if (error) {
      setError(error);
      return false;
    }
    return true;
  };

  const isInList = (email) => {
    return testEmail.includes(email);
  };

  const isEmail = (email) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  const getEmail = (e) => {
    setValue(e.target.value);
    setError(null);
  };

  const getSubject = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const getBody = (e) => {
    setBody({ ...description, [e.target.name]: e.target.value });
  };

  const handleBody = (e) => {
    console.log(e);
    setBody(e);
  };

  const handleOnSubmit = (e) => {
    console.log(testEmail);
    console.log(subject);
    console.log(description);
    console.log(body);

    let json = {
      to: testEmail,
      subject: subject.subject,
      name: "",
      body: body,
    };
    testEmail.map((mail) => {
      return store.dispatch(
        postNotification({
          email: mail,
          message: subject,
        })
      );
    });

    dispatch(assignTestToCandidate(json));

    navigate(-1);
  };

  const closeButton = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container" onSubmit={handleOnSubmit}>
        <Modal size="lg" show={true}>
          <Modal.Header className="modal-header">
            <Modal.Title className="modal-title">
              Assign Test To Candidate
              <i
                class="fa-solid fa-xmark fa-beat fa-xs"
                style={{
                  color: "black",
                  marginLeft: "480px",
                  fontSize: "20px",
                }}
                onClick={() => closeButton()}
              ></i>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-container">
              <div
                className="row"
                style={{ paddingTop: "1em", paddingBottom: "1em" }}
              >
                <div
                  className="col"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h6>
                      <b>To :</b>
                    </h6>
                  </div>
                  <div className="row" style={{ width: "83%" }}>
                    {testEmail.map((item) => (
                      <div
                        className="col chip"
                        key={item}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <span>{item}</span>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="button"
                            onClick={() => handleDelete(item)}
                          >
                            <i class="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                    <div>
                      <input
                        className={classes.inputField}
                        onChange={getEmail}
                        style={{ width: "100%" }}
                        value={value}
                        type="text"
                        placeholder="Enter Email"
                        aria-label="emailId"
                        onKeyDown={handleKeyDown}
                        onPaste={handlePaste}
                      />
                    </div>
                    {error && <p className="error">{error}</p>}
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <div
                    className="column"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h6>
                        <b>Subject :</b>
                      </h6>
                    </div>
                    <div style={{ width: "80%" }}>
                      <input
                        style={{ width: "100%" }}
                        name="subject"
                        className={classes.inputField}
                        type="text"
                        placeholder="Subject"
                        aria-label="subject"
                        onChange={getSubject}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <ReactQuill
                    placeholder="spread your message..."
                    onChange={handleBody}
                    value={body}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleOnSubmit}>
              Send
            </Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default TestAssign;
