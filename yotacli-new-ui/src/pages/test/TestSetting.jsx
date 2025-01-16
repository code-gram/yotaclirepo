import styles from "../test/Test.module.css";
import Button from "react-bootstrap/esm/Button";
import Card from "../../components/Card/Card";
import { useRef } from "react";
import { addTest } from "../../features/tests/testAction";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TestSetting = ({ nextScreen }) => {

    const endDate = useRef("");
    const startDate = useRef("");
    const durationTime = useRef("");

    const dispatch = useDispatch();

    const validateForm = (settingFormData) => {

        if (Object.values(settingFormData).every(value => value.trim() === '')) {
         //   alert("All fields are required and cannot be empty");
            toast.error("All fields are required and cannot be empty",{ className: 'toast-info' });
            return false;
        }

        if (settingFormData.endDate.trim() === '') {
         //   alert("End date cannot be empty");
            toast.error("End date cannot be empty",{ className: 'toast-info' });
            return false;
        }

        if (settingFormData.startTime.trim() === '') {
        //    alert("Start time cannot be empty");
            toast.error("Start time cannot be empty",{ className: 'toast-info' });
            return false;
        }

        if (settingFormData.durationTime.trim() === '') {
           // alert("Duration time cannot be empty");
            toast.error("Duration time cannot be empty",{ className: 'toast-info' });
            return false;
        }

        if (settingFormData.durationTime.trim() >= 120) {
           // alert("Duration time shouldn't be above 120 min");
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
            endDate: eDate
        }

        if (validateForm(settingFormData)) {
            const allData = { ...JSON.parse(basicInfoFormData), ...settingFormData }
            dispatch(addTest(allData))
                .then(() => {
                 //   alert("Test details added successfully..!!\nPlease add question in test");
                    toast.success("Test details added successfully..!!\nPlease add question in test",{ className: 'toast-info' });
                    nextScreen("screen3")
                })
                .catch((error) => {
                  //  alert(error);
                    toast.error(error,{ className: 'toast-info' });
                });
        }
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
                <FormTestSetting />
            </Card>
        </div >
    )
}