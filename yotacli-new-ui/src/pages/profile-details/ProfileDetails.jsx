import Row from "react-bootstrap/esm/Row";
import Card from "../../components/Card/Card"
import styles from "../../pages/profile-details/ProfileDetails.module.css";
import Col from "react-bootstrap/esm/Col";
import ListGroup from 'react-bootstrap/ListGroup';
import avatarImage from '../image/img_avatar2.png';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { changePasswordDetails, profileDetail } from "../../features/associates/associateAction";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProfileDetails = () => {

    const { userData } = useSelector((state) => state.auth);
    const profileDetails = useSelector((state) => state.associates);
    const [changeOption, setChangeOption] = useState('profile-details');
    const dispatch = useDispatch();

    const currentPassword = useRef();
    const newPassword = useRef();
    const confirmPassword = useRef();

    useEffect(() => {
        if (userData.token) {
            dispatch(profileDetail(userData.email))
        }
    }, [dispatch])

    const renderScreen = () => {
        switch (changeOption) {
            case 'profile-details':
                return <ProfileDetails />
            case 'edit-profile':
                return <EditProfile />
            case 'change-password':
                return <ChangePassword />
            default:
                return <ProfileDetails />
        }
    }

    const ProfileDetails = () => {
        return (
            <div>
                <h6 className={styles["header"]}>Personal Details..</h6>
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row">User Id</th>
                            <td>{profileDetails.associates.empId}</td>
                        </tr>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{profileDetails.associates.fullName}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>{profileDetails.associates.emailAdd}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    const EditProfile = () => {
        return (
            <div>
                <h6 className={styles["header"]}>Edit Profile Details..</h6>
            </div>
        )
    }

    const LeftSideContain = () => {
        return (
            <div>
                <Card className={styles["profile-left"]}>
                    <div>
                        <img className={styles["img"]} src={avatarImage} alt="Avatar" />
                        <h6 className="mt-2">{profileDetails.associates.fullName}</h6>
                        <ListGroup style={{ cursor: "pointer" }}>
                            <ListGroup.Item onClick={() => setChangeOption('profile-details')}>Profile Details</ListGroup.Item>
                            <ListGroup.Item onClick={() => setChangeOption('edit-profile')}>Edit profile</ListGroup.Item>
                            <ListGroup.Item onClick={() => setChangeOption('change-password')}>Change Password</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card>
            </div>
        )
    }


    const formSubmit = (e) => {
        e.preventDefault();

        const email = userData.email;
        const current = currentPassword.current.value;
        const news = newPassword.current.value;
        const confirm = confirmPassword.current.value;

        if (news !== confirm) {
            toast.error("Current password and confirm password do not match..",{ className: 'toast-info' });
            return false;
        }

        const formData = {
            emailAdd: email,
            currentPassword: current,
            newPassword: news,
            confirmPassword: confirm
        }

        if (Object.values(formData).every(value => value.trim() === '')) {
            toast.error("All fields are required and cannot be empty",{ className: 'toast-info' });
            return false;
        } else {
            dispatch(changePasswordDetails(formData))
                .then(() => {
                    toast.success("Password change successfully..",{ className: 'toast-info' });
                    
                })
                .catch((error) => {
                    toast.error(error,{ className: 'toast-info' });
                });
        }
    }

    const ChangePassword = () => {
        return (
            <div>
                <h6 className={styles.header}>Change Password Details..</h6>
                <br></br>
                <Card className="p-3 mt-1">
                    <form onSubmit={formSubmit}>
                        <div>

                            <div className="form-group mt-1">
                                <label style={{ float: "left" }}>Current Password</label><br />
                                <input
                                    type="password"
                                    className="form-control form-control-sm mt-1"
                                    placeholder="••••••••"
                                    ref={currentPassword}
                                />
                            </div>

                            <div className="form-group mt-1">
                                <label style={{ float: "left" }}>New Password</label><br />
                                <input
                                    type="password"
                                    className="form-control form-control-sm mt-1"
                                    placeholder="••••••••"
                                    ref={newPassword}
                                />
                            </div>

                            <div className="form-group mt-1">
                                <label style={{ float: "left" }}>Confirm Password</label><br />
                                <input
                                    type="password"
                                    className="form-control form-control-sm mt-1"
                                    placeholder="••••••••"
                                    ref={confirmPassword}
                                />
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className={`btn btn-dark ${styles.buttonContainer}`}>
                                    Reset Password
                                </button>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        )
    }

    return (
        <div>
            <Card className={styles["profile"]}>
                <Row>
                    <Col xs={4}>
                        <LeftSideContain />
                    </Col>
                    <Col xs={8}>
                        {
                            renderScreen()
                        }
                    </Col>
                </Row>
            </Card>
            <ToastContainer/>
        </div>
    )
}