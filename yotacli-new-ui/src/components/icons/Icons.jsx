import {BsPatchCheckFill} from "react-icons/bs";
import {AiOutlineEdit, AiOutlineStop,AiOutlineDelete} from "react-icons/ai";

import { IoPersonAdd } from "react-icons/io5";
import { TbFileReport } from "react-icons/tb";

import {IoMdAddCircle} from "react-icons/io";
import {PiUploadSimpleBold} from "react-icons/pi";
import React from "react";


export const ApproveIcon = ({
                                onApprove,
                                title = null,
                                color = null,
                                size = null
                            }) => {
    return <BsPatchCheckFill
        color={color ? color : "#21a321"}
        size={size > 10 ? size : "24"}
        title={title ? title : "Approve"}
        cursor={"pointer"}
        onClick={onApprove}/>
};

export const DeclineIcon = ({
                                onDecline,
                                title = null,
                                color = null,
                                size = null
                            }) => {
    return <AiOutlineStop
        color={color ? color : "#fd1212"}
        size={size > 10 ? size : "24"}
        cursor={"pointer"}
        title={title ? title : "Decline"}
        onClick={onDecline}/>
};

export const EditIcon = ({
                             onEdit,
                             title = null,
                             color = null,
                             size = null
                         }) => {
    return <AiOutlineEdit
        color={color ? color : "#fd1212"}
        size={size > 10 ? size : "24"}
        cursor={"pointer"}
        title={title ? title : "Edit"}
        onClick={onEdit}/>
};

export const DeleteIcon = ({
    onEdit,
    title = null,
    color = null,
    size = null
}) => {
return <AiOutlineDelete
color={color ? color : "#fd1212"}
size={size > 10 ? size : "24"}
cursor={"pointer"}
title={title ? title : "Edit"}
onClick={onEdit}/>
};

export const AddIcon = ({
                            onAdd,
                            title = null,
                            color = null,
                            size = null
                        }) => {
    return <IoMdAddCircle
        color={color ? color : "#0d74da"}
        size={size > 10 ? size : "24"}
        cursor={"pointer"}
        title={title ? title : "Add New"}
        onClick={onAdd}/>
};

export const AddQuestionsIcon = ({
    onAdd,
    title = null,
    color = null,
    size = null
}) => {
return <IoMdAddCircle
color={color ? color : "#0d74da"}
size={size > 10 ? size : "24"}
cursor={"pointer"}
title={title ? title : "Add Questions"}
onClick={onAdd}/>
};




export const AssignTrainingIcon = ({
    assignTraining,
    title = null,
    color = null,
    size = null
}) => {
return <IoPersonAdd
color={color ? color : "#21a321"}
size={size > 10 ? size : "18"}
cursor={"pointer"}
title={title ? title : "Associate"}
onClick={assignTraining}/>
};

export const ReportIcon = ({
    report,
    title = null,
    color = null,
    size = null
}) => {
return <TbFileReport
color={color ? color : "#fd1212"}
size={size > 10 ? size : "18"}
cursor={"pointer"}
title={title ? title : "TPR"}
onClick={report}/>
};

export const UploadIcon = ({
                               onUpload,
                               title = null,
                               color = null,
                               size = null
                           }) => {
    return <PiUploadSimpleBold
        color={color ? color : "#0d74da"}
        size={size > 10 ? size : "24"}
        cursor={"pointer"}
        title={title ? title : "Upload"}
        onClick={onUpload}/>
}

