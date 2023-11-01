import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../../ui/card/Card";
import HeaderRecord from "./HeaderRecord";
import ListRecord from "./ListRecord";
import RecordTechDetails from "./RecordTechDetails";
import Pagination from "../../../ui/pagination/Pagination";

const RecordTechnology = () => {
  const [currentPage, setCurrentPage] = useState(1); //Pagination
  const [dataPerPage, setDataPerPage] = useState(5); //Pagination
  const [toggleRecord, setToggleRecord] = useState(true); //Pagination

  const { name } = useParams();
  console.log("UseParam name in Record Technology.js", name);

  return (
    <div className="col-12">
      <Card>
        <HeaderRecord />
        <hr />
        {name ? (
          <RecordTechDetails />
        ) : (
          <ListRecord currentPage={currentPage} dataPerPage={dataPerPage} />
        )}
      </Card>
      {typeof name === "undefined" && (
        <Pagination
          dataPerPage={dataPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          toggleRecord={toggleRecord}
        />
      )}
    </div>
  );
};

export default RecordTechnology;
