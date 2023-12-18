import React from "react";
import classes from "../../components/dashboard/BodyDashboard.module.css";
import { Link } from "react-router-dom";


function BodyDashboard() {
  return (
    <>
     
      <div className="row justify-content-around back">
        <div className={`col-lg-3 ${classes.gap}`}>
          <div className={`card ${classes.cardshadow} w-100`}>
            <div className="card-body">
              <h5 className={`card-title ${classes.boxtitle}`}>
                Batch Management
              </h5>
              <hr />
              <ul className={classes.ulcard}>
                <a href="createbatch.html">
                  <li style={{ color: "black" }}>Create Batch</li>
                </a>
                <hr />
                <a href="batch-list.html">
                  <li style={{ color: "black" }}>Display Batch</li>
                </a>
                <hr />
              </ul>
            </div>
          </div>
        </div>
        <div className={`col-lg-3 ${classes.gap}`}>
          <div className={`card ${classes.cardshadow} w-100`}>
            <div className="card-body">
              <h5 className={`card-title ${classes.boxtitle}`}>
                Associate Management
              </h5>
              <hr />
              <ul className={classes.ulcard}>
               
                <Link to= "/registerAssociate/"><li style={{ color: "black" }}>Add Associate</li></Link>
                <hr />
                <a href="ListAssociates.html">
                  <li style={{ color: "black" }}>Display Associate</li>
                </a>
                <hr />
              </ul>
            </div>
          </div>
        </div>
        <div className={`col-lg-3 ${classes.gap}`}>
          <div className={`card ${classes.cardshadow} w-100`}>
            <div className="card-body">
              <h5 className={`card-title ${classes.boxtitle}`}>
                Technolgy Management
              </h5>
              <hr />
              <ul className={classes.ulcard}>
                <a href="AddTechnology.html">
                  <li style={{ color: "black" }}>Add Technology</li>
                </a>
                <hr />
                <a href="ListTechnology.html">
                  <li style={{ color: "black" }}>Display Technology</li>
                </a>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
     
      <div className={`row justify-content-around ${classes.cardrow} back`}>
        <div className={`col-lg-3 ${classes.gap}`}>
          <div className={`card ${classes.cardshadow} w-100`}>
            <div className="card-body">
              <h5 className={`card-title ${classes.boxtitle}`}>
                Question Management
              </h5>
              <hr />
              <ul className={classes.ulcard}>
                <a href="addquestions.html">
                  <li style={{ color: "black" }}>Add Questions</li>
                </a>
                <hr />
                <a href="#">
                  <li style={{ color: "black" }}>Create Here</li>
                </a>
                <hr />
              </ul>
            </div>
          </div>
        </div>
        <div className={`col-lg-3 ${classes.gap}`}>
          <div className={`card ${classes.cardshadow} w-100`}>
            <div className="card-body">
              <h5 className={`card-title ${classes.boxtitle}`}>Type Here</h5>
              <hr />
              <ul className={classes.ulcard}>
                <li>create here</li>
                <hr />
                <li>create here</li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
        <div className={`col-lg-3 ${classes.gap}`}>
          <div className={`card ${classes.cardshadow} w-100`}>
            <div className="card-body">
              <h5 className={`card-title ${classes.boxtitle}`}>Type Here</h5>
              <hr />
              <ul className={classes.ulcard}>
                <li>create here</li>
                <hr />
                <li>create here</li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
   
      <div className={`row justify-content-around back ${classes.cardrow1}`}>
        <div className="col-lg-11">
          <div className={`card ${classes.cardshadow} w-100`}>
            <div className="card-body ">
              <h5 className={`card-title ${classes.boxtitle}`}>Type Here</h5>
              <hr />
              <ul className={classes.ulcard}>
                <li>create here</li>
                <hr />
                <li>create here</li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BodyDashboard;
