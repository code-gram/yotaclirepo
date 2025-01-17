import styles from "../test/Test.module.css";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Card from "../../components/Card/Card";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BasicInfo = ({ nextScreen }) => {

    const testTitle = useRef("");
    const testType = useRef("");
    const testDescription = useRef("");
    const testInstruction = useRef("");

    const validateFormData = (formData) => {
        const errors = [];
        if (Object.values(formData).every(value => value.trim() === '')) {
          //  alert("All fields are required and cannot be empty");
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
          //  alert(errors.join('& ') + 'cannot be empty');
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

        const formData = {
            testTitle: title,
            type: type,
            description: description,
            instruction: instruction
        }

        if (validateFormData(formData)) {
            localStorage.setItem("basicInfo", JSON.stringify(formData));
            nextScreen("screen2");
        }
    }

    return (
        <div>
            <Card className={styles["container"]}>
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
                            <textarea
                                type="description"
                                name="description"
                                className="form-control mt-1"
                                placeholder="Description"
                                ref={testDescription}
                            />
                        </div>
                        <div className="col-md-6">
                            <label
                                htmlFor="inputdescription4"
                                className={styles["form-test-label"]}
                            >
                                Instruction
                            </label>
                            <textarea
                                type="instruction"
                                name="instruction"
                                className="form-control mt-1"
                                placeholder="Instruction"
                                ref={testInstruction}
                            />
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
