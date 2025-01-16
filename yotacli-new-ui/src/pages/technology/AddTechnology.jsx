
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './AddTechnology.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import the TechnologyList component
import { createTechnology } from '../../features/technology/technologyAction'; // Assuming the file path is correct

function AddTechnology() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [technologyName, setTechnologyName] = useState('');
  const { error } = useSelector((state) => state.technologies);
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {  
    if (error) {  
      setErrorData(error);  
    }
  }, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTechnologyName = technologyName.trim();
    if ((trimmedTechnologyName.length > 0)) {
      dispatch(createTechnology({ technology: trimmedTechnologyName }));
      const isAlpha = /^[A-Za-z]+$/.test(trimmedTechnologyName);    
        if (isAlpha) {  
            setTechnologyName('');  
            setOpen(false);  
            setErrorData(null);
        } else {  
            setTechnologyName('');  
            setOpen(true);  
        } 
    } else {
      dispatch(createTechnology({ technology: trimmedTechnologyName }));
      setTechnologyName('');
      setOpen(true);
    }
  };

  const openModal = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setTechnologyName(event.target.value);
  };

  const errorHandler =()=>{
    setErrorData(null);
  }

  return (
    <>
      <Button className='mb-2' variant="primary" size="sm" style={{ marginLeft: "83%" }} onClick={openModal}>
        Add Technolgy
      </Button>
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton onClick={errorHandler}>
          <Modal.Title id="example-custom-modal-styling-title">
            Add Technology
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group row mb-1 ">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-4 col-form-label mt-0"
              >
                Technology Name
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  value={technologyName}
                  placeholder='Enter Technology'
                  className="mb-2 form-control-sm form-control mt-1"
                  onChange={handleChange}
                ></input>
                {errorData && <label className='error-label'>{errorData.name}{errorData.technology}</label>}
              </div>
            </div>
          </div>

          <button
            className="submitt-button btn btn-primary"
            type="submit"
            onClick={handleSubmit}
            style={{ borderRadius: "revert-layer", marginLeft: "390px" }}
          >
            Submit
          </button>
        </Modal.Body>
      </Modal>
      <ToastContainer/>
    </>
  );

}

export default AddTechnology;
