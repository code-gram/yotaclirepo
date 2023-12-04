import React, { useState } from "react";
import Button from "../../../ui/button/Button";
import classes from "./HeaderItem.module.css";
import InputField from "../../../ui/inputField/InputField";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import {
  handleSearchAsso,
  fetchAssociate,
} from "../../../redux/features/associate/ListAssociateSlice";

const HeaderItem = ({ currentPage, setCurrentPage, setDataPerPage }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const associate = useSelector((state) => state.associate.associates);

  const pageDataOptions = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 25, label: "25" },
    { value: 100, label: "100" },
  ];

  const handleSelectData = (selectOption) => {
    console.log("handleSelectData", selectOption);
    console.log("selectOption.value", selectOption.value);

    setDataPerPage(selectOption.value);

    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  };

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchButton = (e) => {
    e.preventDefault();
    console.log("Search Term:", search);
    if (search !== "") {
      const matchSearchAsso = associate.filter((asso) =>
        asso.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log("matchSearchAsso:", matchSearchAsso);
      dispatch(handleSearchAsso(matchSearchAsso));

      if (currentPage !== 1) {
        setCurrentPage(1);
      }
    }

    setSearch("");
  };

  return (
    <div className="row">
      <div className="row mt-3">
        <div className="col-xl-5 col-lg-5 col-md-4 col-sm-4 d-flex">
          <h6 className={classes.boxtitle}>Associate List</h6>

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 ms-3">
            <Select options={pageDataOptions} onChange={handleSelectData} />
          </div>
        </div>

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
