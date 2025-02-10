import styles from "../test/Test.module.css";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Card from "../../components/Card/Card";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CancelTest from "./CancelTest";


const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };
 
  const formats = [
    'header',
    'bold', 'italic', 'underline',
    'code-block',
    'list', 'bullet',
    'link', 'image',
  ];

export const BasicInfo = ({ nextScreen, formData, updateFormData }) => {

    const testTitle = useRef("");
    const testType = useRef("");
    const testDescription = useRef("");
    const testInstruction = useRef("");
    const [testDes, setTestDes] = useState("");
    const [testIns, setTestIns] = useState("");

    useEffect(() => {
        console.log(formData);
        if (formData) {
          testTitle.current.value = formData.testTitle || "";
          testType.current.value = formData.type || "";
        //   testDescription.current.value = formData.description || "k";
        //   testInstruction.current.value = formData.instruction || "l";
        setTestDes(formData.description);
        setTestIns(formData.instruction);
        }
        console.log("testDescription: " + testDes)
        console.log("testInstruction: " + testIns)
      }, [formData]);
    

    const validateFormData = (formData) => {
        const errors = [];
        if (Object.values(formData).every(value => value.trim() === '')) {
          toast.error("All fields are required and cannot be empty",{ className: 'toast-info' });
            return false;
        }
        if (formData.testTitle.trim() === '') {
            errors.push('Title ')
        }
        if (formData.type.trim() === '') {
            errors.push('Type ')
        }
        if (formData.description.trim() === '') {
            errors.push('Description ')
        }
        if (formData.instruction.trim() === '') {
            errors.push('Instruction ')
        }

        if (errors.length !== 0) {
          toast.error(errors.join('& ') + 'cannot be empty',{ className: 'toast-info' });
            return false;
        }
        return true;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const title = testTitle.current.value;
        const type = testType.current.value;
        const description = testDescription.current.value;
        const instruction = testInstruction.current.value;

        console.log("description", testDescription);
        

        const formData = {
            testTitle: title,
            type: type,
            description: description,
            instruction: instruction
        }

        if (validateFormData(formData)) {
            localStorage.setItem("basicInfo", JSON.stringify(formData));
            console.log(formData);
            updateFormData("basicInfo", formData);
            nextScreen("screen2");
        }
    }

    return (
        <div>
            
            
            <Card className={styles["container-basic"]}>
            <CancelTest/>
                <form onSubmit={handleSubmit}>
                    <h6>Basic Info</h6>
                    <div className="form-group mt-1">
                        <label className={styles["form-test-label1"]}>Test Title</label>
                        <Form.Control size="sm"
                            type="text"
                            placeholder="Add title"
                            name="testName"
                            ref={testTitle} />
                    </div>

                    <div className="form-group mt-1">
                        <label className={styles["form-test-label1"]}>Test Type</label>
                        <select class="form-select form-select-sm"
                            aria-label="Small select example"
                            name="testType"
                            ref={testType}>
                            <option selected>----</option>
                            <option>MCQ</option>
                            <option>Programming</option>
                        </select>
                    </div>

                    <div className="row g-3">
                        <div className="col-md-6">
                            <label
                                htmlFor="inputEmail4"
                                className={styles["form-test-label"]}
                            >
                                Description
                            </label>
                            <div style={{ marginTop: 25, marginBottom: 60 }}>
                                <ReactQuill
                                    type="description"
                                    name="description"
                                    placeholder="Description"
                                    value={testDes}
                                    ref={testDescription}
                                    theme="snow"
                                    modules={modules}
                                    formats={formats}
                                    style={{ height: '8rem'}}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                        <label
                            htmlFor="inputdescription4"
                            className={styles["form-test-label"]}
                        >
                            Instruction
                        </label>
                        <div style={{ marginTop: 25, marginBottom: 60 }}>
                            <ReactQuill
                                type="instruction"
                                name="instruction"
                                placeholder="Instruction"
                                value={testIns}
                                ref={testInstruction}
                                theme="snow"
                                modules={modules}
                                formats={formats}
                                style={{ height: '8rem' }}
                            />
                        </div>
                        </div>
                    </div>

                    <div className={styles["test-btn"]}>
                        <Button
                            type="submit"
                            variant="primary"
                            size="sm">
                            Next..
                        </Button>
                    </div>
                </form>
            </Card>
            <ToastContainer/>
        </div>
    )
}
