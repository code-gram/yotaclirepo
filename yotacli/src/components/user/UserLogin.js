import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import LoginHeader from './UserHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { userLoginData } from "../../redux/features/userLogin/UserLoginSlice";


const UserLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userCredentail, setUserCredentail] = useState('');
    const userLogin = useSelector((state) => state.userLogin);
    const dispatch = useDispatch();
    const loginUser = (e) => {

        e.preventDefault()
        let userCredentail = {
            username: username,
            password: password
        }
        dispatch(userLoginData(userCredentail));
        console.log("userLogin", userLogin);

        if(userLogin.status === 'succeeded'){
            // sessionStorage.setItem('token', userLogin.authToken);
            // sessionStorage.setItem('userRole', userLogin.userRole);
            toast("Login Success!");
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        }
        if(userLogin.status === 'failed'){
            toast("Invalid Credentail!!");
            setUserCredentail()
            navigate('/');
        }
        // axios.post('/yota-api/users/authenticate', userCredentail)
        //     .then((resp) => {
        //     const loginData = resp.data;
        //     dispatch(handleLoginToken(loginData));
        //     sessionStorage.setItem('token', loginData.authToken);
        //     sessionStorage.setItem('userRole', loginData.userRole);
        //     if (resp.data) {
        //         toast("Login Success!");
        //         setTimeout(() => {
        //             navigate('/dashboard');
        //         }, 1000);
        //     }
        // }).catch((error) => {
        //     console.log(error);
        //     toast("Invalid Credentail!!");
        //     setUserCredentail()
        //     navigate('/');
        // });

    }

    return (
        <>
            <LoginHeader />
            <ToastContainer />
            <div className='center-form'>
                <div className="container">
                    <div className="row">
                        <div className="col"> </div>
                        <div className="card login-card-body">
                            <div className="card-header">
                                <h3 className='text-center'>Login</h3>
                            </div>
                            <div className="card-body">
                                <div className="col mt-4">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>User Name:</Form.Label>
                                            <Form.Control type="email" onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Password:</Form.Label>
                                            <Form.Control type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                                        </Form.Group>
                                        <div className='text-center'>
                                        <button type='button' className='btn btn-success login-btn' onClick={loginUser}>Login</button>
                                        <span className='d-flex justify-content-center'>
                                            <Link to='/forgotPassword'>Forgot Password</Link>&nbsp;&nbsp;|
                                            New User?&nbsp;<Link to='/register'>Register</Link>
                                        </span>
                                    </div>
                                    </Form>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col"> </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserLogin;