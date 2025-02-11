import { useDispatch, useSelector } from "react-redux";
import { TableHeader } from "../../components/table-component/TableHeader";
import { TableBody } from "../../components/table-component/TableBody";
import styles from "../../pages/associates/AllAssociates.module.css";
import Card from "../../components/Card/Card";
import { fetchAllAssociatesByStatus } from "../../features/associates/associateAction";
import { useEffect } from "react";
import Pagination from "../../components/pagination/Pagination";
import { useState } from "react";
export const AssociatesList = () => {
    const { associates } = useSelector((state) => state.associates);
    const {totalPages} = useSelector((state) => state.associates);
    const { token } = useSelector((state) => state.auth.userData);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowPerPage, setRowPerPage] = useState(5);
   
    const indexOfLastItem = currentPage * rowPerPage;
    const indexOfFirstItem = indexOfLastItem - rowPerPage;
   
    const currentItem = associates?.slice(indexOfFirstItem, indexOfLastItem);
    const dispatch = useDispatch();
    // table
    const theadData = ["Emp ID", "Name", "Email"];

    useEffect(() => {
        if (token) dispatch(fetchAllAssociatesByStatus({currentPage,rowPerPage}));
    }, [dispatch, token,currentPage,rowPerPage]);

    const showData = () => {
        return (
            <>
                <Card className={styles["users-list"]}>
                    <div>
                        <table className="table table-bordered table-striped table-hover mt-2">
                            <TableHeader theadData={theadData} />
                            <tbody>
                                {
                                    associates.map((response, key) => (
                                        <tr key={key}>                                           
                                            <td>{response.empId}</td>
                                            <td>{response.fullName}</td>
                                            <td>{response.emailAdd}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}/>
                    </div>
                </Card>
            </>
        )
    }

    const showErrorMessage = () => {
        return (
            <div className={styles["custom-text-center"]}>
                <b>No associates found with the approved status..</b>
            </div>
        )
    }

    return (
        <div>
            <h6>Approved Associates List</h6>
            {associates.length > 0 ? showData() : showErrorMessage()}
        </div>
    )
}