import React, { useEffect, useState } from "react";
import InputField2 from '../../../ui/inputField2/InputField2';
import classes from './RegisterAssociateForm.module.css';
import { registerAssociate } from '../../../redux/features/associate/RegisterAssociateSlice';
import { useDispatch } from 'react-redux';
import Button from '../../../ui/button/Button';
import classes1 from './HeaderItem.module.css'
import { useNavigate } from 'react-router-dom';
import Select from "react-select"; //change
import { headerContents } from "../../utils/Authentication";//new chnge
import axios from "axios";//new chnge

const RegisterAssociateForm = (props) => {
    const nevigate = useNavigate();
  //new
    const batch_id = useState('');

//    const[isOpen , setIsOpen]=useState(false); //new ch
    const [associates, setAssociates] = useState({
        emailId: "",
        password: "",
        
        //new change
        batch_id: ""
    });
    const dispatch = useDispatch();
    const getAssociateData = (e) => {
        setAssociates({
            ...associates, [e.target.name]: e.target.value
        });
        console.log(associates);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(associates);
        dispatch(registerAssociate(associates));
        window.location.reload(false);
        alert("Associate registered successfully...");
        nevigate("/trainer/registerAssociate");
        setAssociates({
            emailId: "",
            password: "" , 
           batch_id:""     //new change
        })
        
    };
//new chnge 46-50
    // const handleSelectData = (selectOption) => {
    //     console.log("handleSelectData", selectOption);
    //     console.log("selectOption.value", selectOption.value);
    //   };

//(new change 53-78)
      // useEffect(() => {
      //   axios
      //     .get("/getAllAssociateData/{id}",
      //       {
      //         headers: headerContents()
      //       }
      //     )
      //     .then((resp) => {
      //       if (resp.status == 200) {
      //         if (resp.data && resp.data.length) {
      //           let unitData = resp.data;
      //           let unitDataArray = [];
      //           for (let i = 0; i < unitData.length; i++) {
      //             let countObj = {
      //               value: unitData[i].name,
      //               label: unitData[i].name,
      //             };
      //             unitDataArray.push(countObj);
      //           }
      //           console.log('----mk log----', unitDataArray)
      //           //setTechList(unitDataArray);
      //         }
      //       }
      //     })
      //     .catch((err) => console.log(err));
      // }, []);

    return (
        <>
            <div className='row'>
                <div className='row mt-3'>
                    <div className='col-xl-8 col-lg-7 col-md-6 col-sm-4'>
                        <h5 className={classes1.boxtitle}>Add Associate</h5>
                    </div>

                    <div className='col-xl-4 col-lg-5 col-md-6 col-sm-8'>
                        <form className="form-inline" onSubmit={handleOnSubmit}>
                            <div className={classes1.btn}>
                                <Button onClick={handleOnSubmit}>Register</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className={classes.form}>
                {/* 1st row */}
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
                        {/* <div className="col-6"> */}
                            <h6><b>Email ID</b></h6>
                            <InputField2><input
                                onChange={getAssociateData}
                                //style={{ width: "100%" }}
                                name='emailId'
                                className={classes.inputField}
                                type="email"
                                placeholder="Enter Email Id"
                                aria-label='emailId'
                            /></InputField2>
                        {/* </div> */}
                    </div>
                {/* </div> */}
                {/*2nd Row*/}
                {/* <div className={classes.field}> */}
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
                        {/* <div className="col-6"> */}
                            <h6><b>Password</b></h6>
                            <InputField2><input
                                onChange={getAssociateData}
                                //style={{ width: "100%" }}
                                name='password'
                                className={classes.inputField}
                                type="password"
                                placeholder="Enter Password"
                                aria-label='password'
                            /></InputField2>
                        {/* </div> */}
                    </div>

{/* new chnage 107-138}

<div className={`col-1 mb-3 ${classes.inputName}`}
        style={{ width: "100%" }}
>
    <div style={{ width: "14%" }}>
          <label
            htmlFor="description"
            style={{
              fontSize: "15px",
              marginLeft: "40px",
            }}
          >
            Batch_id :
          </label>
        </div>
        <div
          className="col-xl-4  col-md-4 col-sm-8 ms-3"
          style={{ width: "86%" }}

        >
          <div style={{ width: "40%", marginLeft: "5px" }}>

            { 
            <Select value={batch_id} onChange={handleSelectData}>
              <div>batch id</div>
              {
                batch_id.length > 0 &&
                batch_id.map((item) => (
                <div key={item.batch_id_fk} value={item.id}>
                {item.id}
                  </div>
                ))}
            </Select> }
            </div>
            </div>
                </div>*/}
                        {/* new chnge
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)}>batch_id</button>
                        {isOpen && (
                            <div>
                                <p>batch1</p>
                            </div>
                        )}
                    </div>

                        */}
                </div>
            </div>
        </>
    )
}

export default RegisterAssociateForm;