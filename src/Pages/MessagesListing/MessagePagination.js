export const MessagePagination = ({
  messagePerPage,
  totalMessage,
  paginate,
  maxPageNumberLimit,
  minPageNumberLimit,
  handleNextBtn,
  handlePrevBtn,
  currentPage,
}) => {
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
            class={` page-link text-dark ${
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

  return (
    <div className="text-center d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <button
            class="page-item border-0"
            disabled={currentPage == pageNumbers[0] ? true : false}
            onClick={handlePrevBtn}
          >
            <a class="page-link text-dark" href="#">
              Previous
            </a>
          </button>
          {pages}
          <button
            class="page-item border-0"
            onClick={handleNextBtn}
            disabled={
              currentPage == pageNumbers[pageNumbers.length - 1] ? true : false
            }
          >
            <a class="page-link text-dark" href="#">
              Next
            </a>
          </button>
        </ul>
      </nav>
    </div>
  );
};
