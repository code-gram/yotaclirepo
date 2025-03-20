import styles from "../test/Test.module.css";
import Button from "react-bootstrap/esm/Button";
import Card from "../../components/Card/Card";
import { useRef , useEffect} from "react";
import { addTest } from "../../features/tests/testAction";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CancelTest from "./CancelTest";

export const TestSetting = ({ nextScreen, formData, updateFormData }) => {

    const endDate = useRef("");
    const startDate = useRef("");
    const durationTime = useRef("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (formData) {
          endDate.current.value = formData.endDate || "";
          startDate.current.value = formData.startTime || "";
          durationTime.current.value = formData.durationTime || "";
        }
      }, [formData]);

    const validateForm = (settingFormData) => {

        if (Object.values(settingFormData).every(value => value.trim() === '')) {
            toast.error("All fields are required and cannot be empty",{ className: 'toast-info' });
            return false;
        }

        if (settingFormData.endDate.trim() === '') {
            toast.error("End date cannot be empty",{ className: 'toast-info' });
            return false;
        }

        if (settingFormData.startTime.trim() === '') {
            toast.error("Start time cannot be empty",{ className: 'toast-info' });
            return false;
        }

        if (settingFormData.durationTime.trim() === '') {
            toast.error("Duration time cannot be empty",{ className: 'toast-info' });
            return false;
        }

        if (settingFormData.durationTime.trim() >= 120) {
            toast.error("Duration time shouldn't be above 120 min",{ className: 'toast-info' });
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const basicInfoFormData = localStorage.getItem("basicInfo");

        const eDate = endDate.current.value;
        const sTime = startDate.current.value;
        const dTime = durationTime.current.value;

        const settingFormData = {
            durationTime: dTime,
            startTime: sTime,
            endDate: eDate,
            testStatus: 'PENDING'
        }

        updateFormData("testSetting", settingFormData);

        if (validateForm(settingFormData)) {
            const allData = { ...JSON.parse(basicInfoFormData), ...settingFormData }
            dispatch(addTest(allData))
                .then(() => {
                    toast.success("Test details added successfully..!!\nPlease add question in test",{ className: 'toast-info' });
                    nextScreen("screen3")
                })
                .catch((error) => {
                    toast.error(error,{ className: 'toast-info' });
                });
        }
    }

    const handleBack = ()=>{
        console.log("back button clicked...")
        nextScreen("screen1")
    }

    const FormTestSetting = () => {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h6 className={styles["form-title"]}>Test Setting</h6>

                    <div className="form-group mt-3">
                        <label className={styles["form-test-label"]}>Duration (Min)</label>
                        <input
                            type="Number"
                            name="durationTime"
                            className="form-control mt-1"
                            ref={durationTime}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className={styles["form-test-label"]}>End Date</label>
                        <input
                            type="date"
                            name="endDate"
                            className="form-control mt-1"
                            placeholder="Add title"
                            ref={endDate}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className={styles["form-test-label"]}>End Time</label>
                        <input
                            type="time"
                            name="endTime"
                            className="form-control mt-1"
                            placeholder="Add title"
                            ref={startDate}
                        />
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
                <ToastContainer/>
            </div>
        )
    }

    return (
        <div>
            <Card className={styles["container"]}>
                <Button
                    variant="secondary"
                    size="sm"
                    className="position-absolute"
                    style={{top: '10px', left: '15px', fontSize: '16px', cursor: 'pointer'  }}
                    onClick={handleBack}
                >
                    Back
                </Button>
                <CancelTest/>
                <FormTestSetting />
            </Card>
        </div >
    )
}