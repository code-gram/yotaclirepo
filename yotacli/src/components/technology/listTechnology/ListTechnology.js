// import React from "react";
import React, { useEffect, useState } from "react";
import Card from "../../../ui/card/Card";
import Pagination from "../../../ui/pagination/Pagination";
import ListTechnologyItem from "./ListTechnologyItem";
import HeaderItem from "./HeaderItem";

const ListTechnology = () => {
  const [currentPage, setCurrentPage] = useState(1); //Pagination
  const [dataPerPage, setDataPerPage] = useState(5); //Pagination

  return (
    <div className="col-12">
      <Card>
        <HeaderItem
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setDataPerPage={setDataPerPage}
        />
        <hr />
        <ListTechnologyItem
          currentPage={currentPage}
          dataPerPage={dataPerPage}
        />
      </Card>
      <Pagination
        dataPerPage={dataPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ListTechnology;
