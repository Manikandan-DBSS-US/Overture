import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { MessageModal } from "./MessageModal";
import "../MessagesListing/MessageListing.css";

export const MessageListing = ({ show }) => {
  // Initial message state
  const [message, setMessages] = useState([]);
  // Loading state
  const [loading, isLoading] = useState(true);
  // Current page
  const [currentPage, setCurrentPage] = useState(1);
  // Message per page
  const [messagePerPage] = useState(5);
  // Total message
  const totalMessage = 200;
  // Page number limit from pagination Box
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  // Max page number limit form pagination Box
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  // Min page number limit from pagination Box
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // send post values
  const values = {
    page: 2,
    pageSize: totalMessage,
    sortOrder: null,
    sortColumn: null,
    candidateUniqueId: "2a50ead6-7d06-44c3-a3da-ce92d2311ec3",
    jobUniqueId: null,
    employerUniqueId: null,
    webPageId: 0,
  };

  // form handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // API post data
    const { data } = await axios.post(
      "https://overtureapidev.azurewebsites.net/api/Messages/GetMessageListtoGrid",
      values
    );
    setMessages(data.data.candidateMessages);
    isLoading(false);
  };

  // render
  useEffect(() => {
    handleSubmit();
  }, []);

  // get current messages
  const indexOfLastMessage = currentPage * messagePerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagePerPage;
  const currentMessage = message.slice(indexOfFirstMessage, indexOfLastMessage);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // handle change in next page button
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  // handle change in prev page button
  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      <div className="inner-content">
        <h5>Message Listing</h5>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleSubmit()}
          >
            Show Messages
          </button>
        </form>
        {/* Message Modal Box */}
        <div>
          <MessageModal
            message={currentMessage}
            loading={loading}
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
  );
};
