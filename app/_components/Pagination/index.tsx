import React from 'react'

import { Chevron } from '@/app/_components/Chevron';

export const Pagination: React.FC<{
  page: number
  totalPages: number
  onClick: (page: number) => void
  className?: string
}> = props => {
  const { page, totalPages, onClick, className } = props
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  return (
    <div className={['',  className].filter(Boolean).join(' ')}>
      <button
        type="button"
        disabled={!hasPrevPage}
        onClick={() => {
          onClick(page - 1)
        }}
      >
        <Chevron rotate={90} />
      </button>
      <div>
        <span>
          Page {page} of {totalPages}
        </span>
      </div>
      <button
        type="button"
        disabled={!hasNextPage}
        onClick={() => {
          onClick(page + 1)
        }}
      >
        <Chevron rotate={-90} />
      </button>
    </div>
  )
}