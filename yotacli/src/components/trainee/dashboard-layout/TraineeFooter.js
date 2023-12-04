import React from "react";
import classes from './TraineeFooter.module.css' 
import PropTypes from "prop-types";

const TraineeFooter = (props) => {
  return (
    <div>
      <footer className="text-center text-white"  >
        <div className= {` ${classes.mainContainer}` }> 
          <section className="mb-1">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1 "
              href="https:\www.yash.com"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className={`fa-regular fa-address-card  ${classes.iconSize}`}></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https:\www.yash.com/contact-us"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className={`fas fa-phone ${classes.iconSize}`}></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className={`far fa-envelope ${classes.iconSize}`}></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className={`fas fa-home ${classes.iconSize}`} aria-hidden="true"></i>
            </a>
          </section>
        </div>
        <div
          className={`text-center text-dark `}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Copyright © 2023.
          <a className="text-dark" href="https:\www.yash.com">
            YASH Technologies.
          </a>{" "}
          All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

TraineeFooter.propTypes = {};

export default TraineeFooter;
