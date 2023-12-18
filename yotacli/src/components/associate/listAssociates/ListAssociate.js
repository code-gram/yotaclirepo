import React, { useState } from "react";
import ListAssociateItem from "./ListAssociateItem";
import Card from "../../../ui/card/Card";
import HeaderItem from "./HeaderItem";
import AssociatePagination from "../../../ui/pagination/AssociatePagination";

const ListAssociate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  return (
    <div className="col-12 ">
      <Card>
        <HeaderItem
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setDataPerPage={setDataPerPage}
        />
        <hr />
        <ListAssociateItem
          currentPage={currentPage}
          dataPerPage={dataPerPage}
        />
      </Card>
      <AssociatePagination
        dataPerPage={dataPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ListAssociate;
