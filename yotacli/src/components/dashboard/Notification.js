import React, { useEffect, useState } from "react";
import { Button, Offcanvas, Toast, ToastContainer } from "react-bootstrap";
import { useSelector } from "react-redux";
import { store } from "../../app/store";
import { deleteNotification, fetchNotification, updateNotification } from "../../redux/features/notification/NotificationListSlice";
import Moment from "react-moment";  
import { Bell } from "react-bootstrap-icons";

const Notification=()=>{
    const [value,setValue]=useState(false);
    const [view,setView] = useState(true);
    const data = useSelector(state=>state.notification.notifications) || [];
    const number = useSelector(state=>state.notification.count);
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            store.dispatch(fetchNotification(''))
        },1000);

        return ()=>{clearTimeout(timeout)}
        
    },[data])
    const clickHandler=()=>{
        setValue(true)
        if(number>0){
          store.dispatch(updateNotification('ram@gmail.com'))
        }
     }

   
   return (
    <React.Fragment>
      
        <Button className="me-3 rounded-circle" variant="outline-light" style={{marginLeft:"auto",width:"2rem", position:"relative"}} onClick={clickHandler}>
    
        <Bell style={{color:"black",fontSize:"1.25rem"}}/>
        {number>0 && <div className="rounded-circle bg-danger d-flex justify-content-center  align-items-center"
            style={{
                color:"white",
                width:"1rem",
                height:"1rem",
                position:"absolute",
                top:0,
                right:0,
                fontSize:"0.8rem",
                transform:"translate(65%,5%)"
            }}
            >
           {number}
            </div>}
        </Button>
     
        <Offcanvas placement="end" show={value} onHide={()=>setValue(false)} scroll={true}>
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