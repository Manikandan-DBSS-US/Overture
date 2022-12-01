import { Loading } from "../../components/Sidebar/Loading";
import { MessagePagination } from "./MessagePagination";

export const MessageModal = ({
  message,
  loading,
  messagePerPage,
  totalMessage,
  paginate,
  maxPageNumberLimit,
  minPageNumberLimit,
  handleNextBtn,
  handlePrevBtn,
  currentPage,
  setCurrentPage
}) => {
  return (
    <div>
      <div
        class="modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ width: "100%" }}
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Messages Lists
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <div className="text-center">{loading && <Loading />}</div>

              <div className="card-body">
                <div>
                  <div className="list-group">
                    {message.map((ele) => {
                      return (
                        <div
                          href=""
                          className="list-group-item list-group-item-action flex-column align-items-start"
                        >
                          <div className="p-0 d-flex justify-content-between">
                            <p style={{ fontSize: "15px" }}>
                              {ele.messageText}
                            </p>

                            <span
                              className="d-flex flex-column"
                              style={{ fontSize: "10px" }}
                            >
                              {ele.candidateInfo.firstName}
                              {ele.candidateInfo.lastName}
                              <span>{ele.messageDateTime}</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination Box */}
            <div className="">
            <MessagePagination
              messagePerPage={messagePerPage}
              totalMessage={totalMessage}
              paginate={paginate}
              maxPageNumberLimit={maxPageNumberLimit}
              minPageNumberLimit={minPageNumberLimit}
              handleNextBtn={handleNextBtn}
              handlePrevBtn={handlePrevBtn}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
