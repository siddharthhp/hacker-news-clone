/* eslint-disable react/prop-types */
import React from 'react'
import {PaginationRow} from './Pagination'

const Pagination = ({currentPage, totalPages}) => {
  const onClickPrev = () => {
    if (!(currentPage === 1)) {
      this.props.loadPreviousPage()
    }
  }
  const onClickNext = () => {
    if (!(currentPage === totalPages)) {
      this.props.loadNextPage()
    }
  }
  return (
    totalPages > 1 && (
      <PaginationRow>
        <a
          disabled={currentPage === 1}
          onClick={onClickPrev}
          className="prev"
          aria-label="Navigate to previous page"
        >
          Previous
        </a>
        <a
          disabled={currentPage === totalPages}
          onClick={onClickNext}
          aria-label="Navigate to next page"
        >
          Next
        </a>
      </PaginationRow>
    )
  )
}

export default Pagination
