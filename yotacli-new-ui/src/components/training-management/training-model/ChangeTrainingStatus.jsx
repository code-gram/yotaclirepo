import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Button from "../../common/button/Button";
import CancelButton from "../../common/button/CancelButton";
import { useDispatch, useSelector } from "react-redux";
import { costomToast } from "../../common/toast/costomToast";
import { getTrainingStatus } from "../../../features/redux/training/training-status/approveTrainingAction";

export const ChangeTrainingStatus = () => {
  const cancelref = useNavigate();
  const dispatch = useDispatch();
  const showModalRef = useRef(true);
  const trainingStatus = useRef([]);
  const { id } = useParams();

  const trainingStatusList = [
    { id: 1, name: "COMPLETED" },
    { id: 2, name: "ON-HOLD" },
  ];
  const handleSelectTrainer = (event) => {
    trainingStatus.current = event.target.value;
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      trainingStatus: trainingStatus.current,
      id: id,
    };
    dispatch(getTrainingStatus(JSON.stringify(formData)));
    console.log("Form Data:", formData);
    console.log(trainingStatusList);
    console.log("Id Is" + id);
    costomToast({
      message: "Change Training Status Succesfully",
      autoClose: 2000,
      onClose: () => window.location.reload("/trainingList"),
    });
    hideModal();
  };
  const handleCancel = () => {
    hideModal();
  };

  console.log(trainingStatusList);
  const hideModal = () => {
    const modals = document.getElementsByClassName("modell");
    if (modals.length > 0) {
      const modal = modals[0];
      modal.style.display = "none";
      cancelref("/trainingList");
    }
  };

  return (
    <div>
      <Modal className="modell" show={showModalRef.current} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>
            <h5>Change Training Status</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group row">
              <label for="inputTechnology" className="col-sm-4 col-form-label">
                Select Status:
              </label>
              <div className="col-sm-8">
                <select
                  ref={trainingStatus}
                  onChange={handleSelectTrainer}
                  aria-controls="example"
                  className="form-control-sm form-control"
                  aria-label=".form-select-sm example"
                >
                  <option value="" disabled selected>
                    Select Training Status
                  </option>
                  {trainingStatusList &&
                    trainingStatusList.map((trainingStatus, index) => (
                      <option key={index} value={trainingStatus.name}>
                        {trainingStatus.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="d-flex p-2 justify-content-between">
              <div className="create-button">
                <Button>Submit</Button>
              </div>
              <div className="clientCancle">
                <CancelButton type="reset" onClick={handleCancel}>
                  Cancel
                </CancelButton>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
