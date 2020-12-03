import { extendWith } from 'lodash';
import React from 'react';
import './pagination.css';

export const Pagination = ({ dataPerPage, totaldata, paginate,currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totaldata / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className='pagination'>
        <a href="#">&laquo;</a>
        {pageNumbers.map((number, index) => {
            const applyStyle = [];
            if (index === currentPage - 1)  applyStyle.push('active')
            return(
                <a className={applyStyle.join(" ")}  key={number} onClick={() => paginate(number)} href='!#'>
                {number}
              </a>
            )
        })}
        <a href="#">&raquo;</a>
      </div>
    </nav>
  );
};