import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CancelTest = () =>{
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const handleYes = () => {
        localStorage.removeItem("basicInfo")
        navigate("/yotacli/home")
    };

    return (
        <>
            <div className="close-btn position-absolute" style={{ top: '1px', right: '15px', fontSize: '40px', cursor: 'pointer' }} onClick={handleShow}>
                &times;
            </div>
            {/* <div className="close-btn" style={{fontSize: '40px', cursor: 'pointer' }} onClick={handleShow}>
                &times;
            </div> */}

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel test</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to cancel the test?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleYes}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <style jsx>{`
                .close-btn:hover {
                    color: red;
                    transform: rotate(90deg);
                    transition: transform 0.3s ease;
                }
            `}</style>
        </>
    );
};
export default CancelTest;