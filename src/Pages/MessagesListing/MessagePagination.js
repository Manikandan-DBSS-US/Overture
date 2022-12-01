import { useState } from "react";

export const MessagePagination = ({
  messagePerPage,
  totalMessage,
  paginate,
  maxPageNumberLimit,
  minPageNumberLimit,
  handleNextBtn,
  handlePrevBtn,
  currentPage,
  setCurrentPage,
}) => {
  const [formPage, setFormPage] = useState("");

  // Page Numbers
  const pageNumbers = [];

  // Total Pages / Messages Per Page
  for (let i = 1; i <= Math.ceil(totalMessage / messagePerPage); i++) {
    pageNumbers.push(i);
  }

  // Maping the pages
  const pages = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li class="page-item">
          <a
            class={` page-link text-dark shadow-none ${
              number === currentPage && "bg-secondary"
            }`}
            href="#"
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        </li>
      );
    } else {
      return null;
    }
  });

  const pageLength = pages.length;

  const handleSubmitPage = (e) => {
    e.preventDefault();
    if (formPage > pageLength) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(parseInt(formPage));
    }
  };

  console.log(typeof formPage);

  return (
    <div className="d-flex justify-content-between gap-4 mx-5">
      <div className="d-flex gap-2 mt-2">
        <span>{currentPage}</span>
        <span>of</span>
        <span> {pageLength} </span>
      </div>

      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <button
              className="page-item border-0 "
              disabled={currentPage == pageNumbers[0] ? true : false}
              onClick={handlePrevBtn}
            >
              <button className="page-link text-dark shadow-none">
                Previous
              </button>
            </button>
            {pages}
            <button
              class="page-item border-0 shadow-none"
              onClick={handleNextBtn}
              disabled={
                currentPage == pageNumbers[pageNumbers.length - 1]
                  ? true
                  : false
              }
            >
              <button class="page-link text-dark shadow-none" href="#">
                Next
              </button>
            </button>
          </ul>
        </nav>
      </div>

      <div className="mt-1">
        <form className="d-flex gap-1" onSubmit={handleSubmitPage}>
          <input
            className="pagination-input-box text-center"
            onChange={(e) => setFormPage(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-outline-secondary pagination-btn"
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
};
