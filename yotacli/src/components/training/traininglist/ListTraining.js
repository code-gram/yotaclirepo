import React from "react";
import Card from "../../../ui/card/Card";
import ListTrainingItem from "./ListTrainingItem";
import HeaderItem from "./HeaderItem";
import Pagination from "../pagination/Pagination";
import { useRef,useState } from "react";
const ListTraining = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const [dataPerPage, setDataPerPage] = useState(5); 
  return (
    <div className="justify-content-centre ">
      <Card>
        <HeaderItem 
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         setDataPerPage={setDataPerPage}
        />
        <hr />
        <ListTrainingItem 
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

export default ListTraining;
