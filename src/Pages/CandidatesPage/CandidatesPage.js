import React, { useState, useEffect } from "react";
import "../../styles/candidatesStyle.css";
import axios from "axios";
import { Loading } from "../../common/Loading";
import ScrollToTop from "../../components/ScrollToTop";

const CandidatesPage = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  const url =
    "https://overtureapidev.azurewebsites.net/api/Messages/GetMessageListtoGrid";

  const getData = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(url, {
        page: 1,
        pageSize: pageNum * 10,
        sortOrder: null,
        sortColumn: null,
        candidateUniqueId: "2a50ead6-7d06-44c3-a3da-ce92d2311ec3",
        jobUniqueId: null,
        employerUniqueId: null,
        webPageId: 0,
      });
      setUserData(data?.data);
    } catch (error) {
      setErrorMsg(error.response.statusText);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(url);
  }, [pageNum]);

  return (
    <div style={{width:"100%"}}>
      <section className="content-page ">
        <ScrollToTop />
        <div className="inner-content">
          <h5>Candidates</h5>
          <div className="candidates-container">
            <div className="candidates-item">
              {userData &&
                userData?.candidateMessages?.map((user) => (
                  <li key={user?.messageId} className="candidates-list">
                    <p className="list-text">{user?.messageText}</p>
                    <p className="list-sender">
                      <span className="list-sender-name">
                        {user?.senderName}
                      </span>
                      <span className="list-sender-date">
                        {user?.messageDateTime}
                      </span>
                    </p>
                  </li>
                ))}
              {isLoading && <Loading />}
            </div>
            <div className="btn-container">
              {/* Custom css */}
              <button
                disabled={isLoading}
                className="btn-load"
                role="button"
                onClick={() => setPageNum((prev) => prev + 1)}
              >
                Loadmore
              </button>
              {/* bootstrap css
            <button
              disabled={isLoading}
              className={`btn btn-primary my-4`}
              role="button"
              onClick={() => setPageNum((prev) => prev + 1)}
            >
              Loadmore
            </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CandidatesPage;
