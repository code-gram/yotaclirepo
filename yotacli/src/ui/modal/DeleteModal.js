import React, { useState } from 'react'
import Button from '../button/Button';
import { useDispatch } from "react-redux";
import { deleteAssociate } from '../../features/associate/DeleteAssociateSlice';

const DeleteModal = () => {
    const [associate, setAssociate] = useState([]);

    const dispatch = useDispatch();

    const handleOnDelete = (id) => {
        const newlist = associate.filter((associate) => associate.id !== id)
        setAssociate = newlist;
        window.alert("Deleted");
    }

    return (
        <div className="modal">
            <div className="modal_box">
                <p>Are you sure you wanna delete?</p>
                <button className="modal_buttonCancel">Cancel</button>
                <Button onClick={handleOnDelete}>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default DeleteModal;