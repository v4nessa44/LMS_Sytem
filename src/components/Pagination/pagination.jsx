import React from "react";
import "./pagination.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPaginationRange = () => {
    const range = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if totalPages is less than or equal to maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      // Always include the first, last, and current page's range
      const left = Math.max(2, currentPage - 2);
      const right = Math.min(totalPages - 1, currentPage + 2);

      range.push(1); // First page

      if (left > 2) range.push("..."); // Ellipsis before the left range

      for (let i = left; i <= right; i++) {
        range.push(i);
      }

      if (right < totalPages - 1) range.push("..."); // Ellipsis after the right range

      range.push(totalPages); // Last page
    }

    return range;
  };

  const handlePageClick = (page) => {
    if (page !== "..." && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      {getPaginationRange().map((page, index) =>
        page === "..." ? (
          <span key={index} className="pagination-ellipsis">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`pagination-btn ${currentPage === page ? "active" : ""}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        )
      )}
      <button
        className="pagination-btn"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
