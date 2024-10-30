// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ page, setPage }) => (
  <div className="pagination">
    <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
      Previous
    </button>
    <span>Page {page}</span>
    <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
  </div>
);

export default Pagination;
