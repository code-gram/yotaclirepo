
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './UpdateTechnology.css';
import { useDispatch, useSelector } from 'react-redux';

// Import the TechnologyList component
import { updateTechnology } from '../../features/technology/technologyAction'; // Assuming the file path is correct
import { EditIcon } from '../../components/icons/Icons';
import { AddQuestionsIcon } from '../../components/icons/Icons';
import {useNavigate} from "react-router-dom";

function UpdateTechnology(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { technologies } = useSelector((state) => state.technologies);
  const [technologyName, setTechnologyName] = useState('');
  const [errorData, setErrorData] = useState(null);
  const { error } = useSelector((state) => state.technologies);
  const { token } = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const technologyData = technologies.filter((techData) => {
    return techData.id === props.id ? techData : null;
  });

  useEffect(() => {
    if (token) {
      technologyData.map((data) => {
        setTechnologyName(data.technology);
      });
    }
  }, []);
  
  useEffect(() => {  
    if (error) {  
      setErrorData(error);  
    }
  }, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTechnologyName = technologyName.trim();
    if ((trimmedTechnologyName.length > 0)) {
      let data = {
        technology: trimmedTechnologyName
      };
      dispatch(updateTechnology({ id: props.id, data }));
      const isAlpha = /^[A-Za-z]+$/.test(trimmedTechnologyName);    
        if (isAlpha) {  
            setTechnologyName(technologyName);
            setOpen(false);  
            setErrorData(null);
        } else {  
            setTechnologyName(technologyName);  
            setOpen(true);  
        } 
    } else {
      let data = {
        technology: trimmedTechnologyName
      };
      dispatch(updateTechnology({ id: props.id, data }));
      setTechnologyName(technologyName);
      setOpen(true);
    }
  };

  const openModal = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setTechnologyName(event.target.value);
  };

  const handleClick = () => {
        navigate("/add-question")
  };

  const errorHandler =()=>{
    setErrorData(null);
  }


  return (
    <>
      <EditIcon
        title={"Edit Technology"}
        onEdit={openModal} />
      <AddQuestionsIcon
        title={"Add Questions"}
        onAdd={handleClick} 
      />   
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton onClick={errorHandler}>
          <Modal.Title id="example-custom-modal-styling-title">
            Update Technology
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
    </>
  );

}

export default UpdateTechnology;