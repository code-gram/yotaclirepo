import React, { useEffect, useState } from "react";
import Card from "../../../ui/card/Card";
import Pagination from "../../../ui/pagination/Pagination";
import HeaderItem from "./HeaderItem";
import ListClientItem from "./ListClientItem";

const ListClient = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const [dataPerPage, setDataPerPage] = useState(5); 
  return (
    <div className="col-12">
      <Card>
        <HeaderItem 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setDataPerPage={setDataPerPage}
        />
        <hr />
        <ListClientItem
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

export default ListClient;
