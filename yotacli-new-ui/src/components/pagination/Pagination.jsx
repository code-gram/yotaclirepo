import React from 'react'
import styles from "../../components/pagination/Pagination.module.css"
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        onPageChange(Math.max(currentPage - 1, 1));
    }
        const handleNext = () => {
            onPageChange(Math.min(currentPage + 1, totalPages));
        };

        const handlePageClick = (pageNumber) => {
            onPageChange(pageNumber);
        };

    return (
        <div className={styles["pagination"]}>
        <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => handlePageClick(index + 1)} className={currentPage === index + 1 ?  styles["active"] : ''}>{index + 1}</button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
    );
  };

export default Pagination;
