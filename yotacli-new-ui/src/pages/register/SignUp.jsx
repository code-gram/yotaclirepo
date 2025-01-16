import styles from '../login/Login.module.css';
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isTokenExpired} from "../../security/jwt/JwtService";
import {register} from "../../features/login/loginAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {

    const empIdInputRef = useRef('');
    const emailInputRef = useRef('');
    const fullNameInputRef = useRef('');
    const passwordInputRef = useRef('');
    const confirmPasswordInputRef = useRef('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const message = useSelector((state) => state.auth.message);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (message) {
            if(message === "Account creation request submitted successfully to Technical Manager"){
                //alert(message);
                toast.success(message,{ className: 'toast-info' });
                window.location.assign("/yotacli");
            }else{
                toast.error(message,{ className: 'toast-info' });
            }
            
        }
    }, [message, navigate]);

    useEffect(() => {
        const token = userData.token;
        if (token && !isTokenExpired(token))
            navigate("/home");
        else if (token && isTokenExpired(token))
            navigate("/");
    }, [navigate, userData]);

    function formSubmitHandler(event) {
        event.preventDefault();

        const formData = {
            empId: empIdInputRef.current.value,
            fullName: fullNameInputRef.current.value,
            emailAdd: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            confirmPassword: confirmPasswordInputRef.current.value,
        }
        
        console.log(formData);
        dispatch(register(JSON.stringify(formData)));
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={formSubmitHandler}>
                <div className={styles["form-content"]}>
                    <h3 className={styles["form-title"]}>Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <Link to={"/"}
                              style={{textDecoration: "none"}}>Sign In</Link>
                    </div>
                    <div className="form-group mt-3">
                        <label className={styles["form-label"]}>Employee Id</label>
                        <input
                            ref={empIdInputRef}
                            type="tel"
                            className="form-control mt-1"
                            placeholder="e.g 1015432"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className={styles["form-label"]}>Full Name</label>
                        <input
                            ref={fullNameInputRef}
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className={styles["form-label"]}>Email address</label>
                        <input
                            ref={emailInputRef}
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className={styles["form-label"]}>Password</label>
                        <input
                            ref={passwordInputRef}
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className={styles["form-label"]}>Confirm Password</label>
                        <input
                            ref={confirmPasswordInputRef}
                            type="password"
                            className="form-control mt-1"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-dark">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
};
