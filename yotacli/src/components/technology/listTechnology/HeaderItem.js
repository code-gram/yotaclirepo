import React, { useState, useEffect } from "react";

import classes from "../../../components/technology/listTechnology/HeaderItem.module.css";
import InputField from "../../../ui/inputField/InputField";
import Button from "../../../ui/button/Button";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
// import { searchTechnology } from "../../../redux/features/technology/CreateTechSlice";
import { handleSearchTech, fetchTechnology } from "../../../redux/features/technology/CreateTechSlice";

const HeaderItem = ({currentPage, setCurrentPage, setDataPerPage}) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const technology = useSelector((state) => state.technology.technologies);

  const pageDataOptions = [
    {value: 5, label: "5"},
    {value: 10, label: "10"},
    {value: 15, label: "15"},
    {value: 25, label: "25"},
    {value: 100, label: "100"},
];

  const handleSelectData = (selectOption) => {
    console.log("handleSelectData", selectOption);
    console.log("selectOption.value", selectOption.value);
    setDataPerPage(selectOption.value);

    // Pagination
    if(currentPage !== 1){
      setCurrentPage(1);
    }
  }

  const changeSearch = (e) =>{
      setSearch(e.target.value);
    }
  
    
  const handleSearchButton = (e)=>{
      e.preventDefault();
      console.log("Search Term:",search);
      if(search !== ''){
        const matchSearchTech = technology.filter(tech => 
          tech.name.toLowerCase().includes(search.toLowerCase()));
          console.log("matchSearchTech:",matchSearchTech);
          dispatch(handleSearchTech(matchSearchTech));

          // Pagination
          if(currentPage !== 1){
            setCurrentPage(1);
          }
          
      }
      
      setSearch('');
  // dispatch(searchTechnology(search));
}

  return (
    <div className="row">
      <div className="row mt-3">
        <div className="col-xl-5 col-lg-5 col-md-4 col-sm-4 d-flex">
          <h6 className={classes.boxtitle}>
            List Of Technology
            {/* <button className={classes.btnfilter}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-filter"
                viewBox="0 0 16 16"
              >
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button> */}
          </h6>

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 ms-3">
          <Select options={pageDataOptions} onChange={handleSelectData} />
          </div>

        </div>


          {/* {search} */}
        <div className="col-xl-5 col-lg-5 col-md-4 col-sm-8 ms-5">
          <form className="form-inline" onSubmit={handleSearchButton}>
            <div className="d-flex justify-content-end">
              <InputField>
                <input
                  className={classes.inputField}
                  type="search"
                  placeholder="Search keyword..."
                  value={search}
                  onChange={changeSearch}
                  aria-label="Search"
                />
              </InputField>
              <Button>
                <i className="fa fa-search" style={{ color: "white" }}></i>
              </Button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default HeaderItem;