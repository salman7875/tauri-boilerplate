import React from "react";
import "./pagination.module.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  page,
  totalPages,
  total,
  setPage,
}: PaginationProps) {
  return (
    <div className="pagination-container">
      <p className="pagination-info">
        Page {page} of {totalPages} — {total} users total
      </p>
      <div className="pagination-buttons">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="pagination-button"
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
