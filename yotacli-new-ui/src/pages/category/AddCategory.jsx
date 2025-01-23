import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './AddCategory.css';
import { useDispatch, useSelector } from 'react-redux';

// Import the actions
import { fetchAllTechnology } from '../../features/technology/technologyAction';
import { createCategory } from '../../features/category/categoryAction';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCategory(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const { technologies, error: technologyError } = useSelector((state) => state.technologies);
  
  const techId=props.technologyId;
  useEffect(() => {
    dispatch(fetchAllTechnology());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedCategoryName = categoryName.trim();
    if (trimmedCategoryName.length > 0) {
      if (techId) {
        const formData = {
          name: trimmedCategoryName
        };
        dispatch(createCategory({ formData: formData, techId: techId }));
        setCategoryName('');
        setOpen(false);
      } else {
        toast.error('Please select a technology.',{ className: 'toast-info' });
      }
    } else {
      toast.error('Name is empty. Please provide a category name.',{ className: 'toast-info' });
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setCategoryName(event.target.value);
  };

  return (
    <>
      <Button className='mb-2' variant="primary" size="sm" style={{ marginLeft: "83%" }} onClick={openModal}>
        Add Category
      </Button>
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group row mb-1 ">
              <label
                htmlFor="inputDescription"
                className="createclientdescription col-sm-4 col-form-label mt-0"
              >
                Category Name
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  value={categoryName}
                  placeholder='Enter Category'
                  className="mb-2 form-control-sm form-control mt-1"
                  onChange={handleChange} 
                />
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

export default AddCategory;