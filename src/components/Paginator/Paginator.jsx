import { PagesContext } from "../../pages/Citizens/Citizens";
import "./Paginator.scss";
import { useContext, useEffect } from "react";
import { Icon } from "./../Icon/Icon";

export const Paginator = () => {
  const { currentPage, setCurrentPage, totalPages } = useContext(PagesContext);
  const pages = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else if (totalPages > 7 && currentPage - 1 <= 3) {
    for (let i = 1; i <= 5; i++) {
      pages.push(i);
    }
    pages.push("...");
    pages.push(totalPages);
  } else if (totalPages > 7 && totalPages - currentPage <= 3) {
    pages.push(1);
    pages.push("...");
    for (let i = totalPages - 4; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    pages.push("...");
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      pages.push(i);
    }
    pages.push("...");
    pages.push(totalPages);
  }

  return (
    <>
      <div className="paginator">
        <button
          className="paginator__button paginator__button--left"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Icon className={"paginator__button__img"} iconName={"arrow-right"} />
        </button>

        {pages.map((page, index) =>
          page === "..." ? (
            <span key={index} className="paginator__ellipsis">
              ...
            </span>
          ) : (
            <button
              key={index}
              className={`paginator__button ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          )
        )}

        <button
          className="paginator__button paginator__button--right"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Icon className={"paginator__button__img"} iconName={"arrow-right"} />
        </button>
      </div>
    </>
  );
};
