import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import Button from "../../common/button/Button";
import CancelButton from "../../common/button/CancelButton";
import { useNavigate } from "react-router-dom";
import "./CreateUnitForm.css";
import { useDispatch } from "react-redux";
import { createUnit } from "../../../features/redux/unit/unitAction";

export const CreateUnitForm = () => {
  const showModalRef = useRef(true);
  const navigate = useNavigate();
  const nameRef = useRef("");
  const shortDescriptionRef = useRef("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      shortDescription: shortDescriptionRef.current.value,
    };
    dispatch(createUnit(formData));
    console.log("Form Data:", formData);
    alert("Unit created successfully");
    hideModal();
  };

  const handleClose = () => {
    hideModal();
  };
  const hideModal = () => {
    const modals = document.getElementsByClassName("modell");
    if (modals.length > 0) {
      const modal = modals[0];
      modal.style.display = "none";
      navigate("/Unit-unitList");
    }
  };
  return (
    <div>
      <Modal className="modell" show={showModalRef.current} onHide={() => {}}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Unit Form</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  placeholder="Name"
                  type="text"
                  className="mb-2 form-control-sm form-control"
                  ref={nameRef}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-2">
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  name=""
                  placeholder="Enter description "
                  id="exampleText"
                  className="mb-2 form-control-sm form-control"
                  ref={shortDescriptionRef}
                ></textarea>
              </div>
            </div>
            <div className="button-submit">
              <Button type="submit"> Add </Button>
              <CancelButton
                type="reset"
                className="cancel"
                onClick={handleClose}
              >
                Cancel
              </CancelButton>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default CreateUnitForm;
