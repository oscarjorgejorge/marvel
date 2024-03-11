import { FC } from "react";
import { Link } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  rowsPerPage: number;
  totalPages: number;
  path: string;
}

export const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
  const { currentPage, rowsPerPage, totalPages, path } = props;

  return (
    <div className="flex justify-center">
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index;
        if (
          pageNumber === 0 ||
          pageNumber === totalPages - 1 ||
          (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
        ) {
          return (
            <Link
              to={`${path}?offset=${index * rowsPerPage}&limit=${rowsPerPage}`}
              key={index}
              className={`mx-1 rounded px-3 py-1 ${
                currentPage === pageNumber
                  ? "rounded-full bg-primary px-1 py-0.5 text-white"
                  : ""
              }`}
            >
              {pageNumber + 1}
            </Link>
          );
        } else if (
          (pageNumber === 1 && currentPage > 4) ||
          (pageNumber === totalPages - 2 && currentPage < totalPages - 3)
        ) {
          return <span key={index}>...</span>;
        }
      })}
      {totalPages > 5 && currentPage < totalPages - 2 && <span>...</span>}
      {totalPages > 5 && (
        <Link
          to={`${path}?offset=${totalPages * rowsPerPage}&limit=${rowsPerPage}`}
          className={`mx-1 rounded px-2 py-1 ${
            currentPage === totalPages
              ? "rounded-full bg-primary px-1 py-0.5 text-white"
              : ""
          }`}
        >
          {Math.floor(totalPages + 1)}
        </Link>
      )}
    </div>
  );
};
