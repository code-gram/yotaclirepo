import React, { useEffect, useState } from "react";
import { Button, Offcanvas, Toast } from "react-bootstrap";
import { useSelector } from "react-redux";
import Moment from "react-moment";  
import { Bell } from "react-bootstrap-icons";
import store from "../app/store";
import { fetchAllNotification, fetchNotification, updateNotification } from "../Redux/studentDashboard/NotificationListSlice";

const Notification=()=>{
    const [value,setValue]=useState(false);
    const [view,setView] = useState(true);
    const data = useSelector(state=>state.notification.notifications) || [];
    const number = useSelector(state=>state.notification.count);
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            store.dispatch(fetchAllNotification())
            // console.log("count")
        },1000);

        return ()=>{clearTimeout(timeout)}
        
    },[data])
    const clickHandler=()=>{
        setValue(true)
        if(number>0){
          store.dispatch(updateNotification('sai.bhukya@gmail.com'))
        }
     }

    //  const handleClose=()=>{
    //     console.log("close handler clicked>>>")
    //     setView(false)
    //  }
   return (
    <React.Fragment>
        {/* <div style={{marginLeft:"45rem",marginBottom:"1rem"}} > */}
        <Button className="me-3 rounded-circle" variant="outline-none" style={{marginLeft:"auto",width:"1rem", position:"relative"}} onClick={clickHandler}>
        {/* <img className="" src="Images/email.png" width={20} height={20} alt="" /> */}
        <i
                
                style={{ fontSize: "1.7em", marginTop: "1.5px" , color:"white"}}
                className="bx bx-bell nav_icon useTool b1"
                aria-hidden="true"
              />
        {number>0 && <div className="rounded-circle bg-danger d-flex justify-content-center  align-items-center"
            style={{
                // color:"#144358",
                color:"white",
                width:"1rem",
                height:"1rem",
                position:"absolute",
                top:0,
                right:0,
                fontSize:"0.8rem",
                transform:"translate(110%,5%)"
            }}
            >
           {number}
            </div>}
        </Button>
        {/* </div> */}
        <Offcanvas placement="end" style={{position:"absolute",left:"68.7%"}} show={value} onHide={()=>setValue(false)} scroll={true}>
<Offcanvas.Header closeButton style={{background:"light",color:"back",height:"3rem"}}>
        <Offcanvas.Title >Notifications</Offcanvas.Title>

      </Offcanvas.Header >
      <Offcanvas.Body>
      {data.slice(0).reverse().map((notification)=><Toast key={notification.id} show={view} style={{marginBottom:"0.1rem"}}>
      <Toast.Header closeButton={false}>
        <strong className="me-auto mb-2">{notification.message}</strong>
        <small><Moment fromNow>{notification.date}</Moment></small>
      </Toast.Header>
    </Toast>)}
      </Offcanvas.Body>
        </Offcanvas>
    </React.Fragment>
   )
}

export default Notification;