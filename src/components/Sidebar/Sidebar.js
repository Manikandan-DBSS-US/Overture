import React, { useState } from "react";
import "./index.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "../../Pages/Home";
import { Gallery } from "../../Pages/Gallery";
import { Navbar } from "./Navbar";
import logo3 from "../../assets/logo-3.png";
import logo2 from "../../assets/logo-2.png";
import { FiHome } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import { FaUsers } from "react-icons/fa";

import { Task1 } from "../../Pages/Task1/Task1";
import { MessageListing } from "../../Pages/MessagesListing/MessageListing";
import CandidatesPage from "../../Pages/CandidatesPage/CandidatesPage";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <Navbar show={show} setShow={setShow} />
      </header>
      <div>
        <aside className={`sidebar ${show ? "show" : null}`}>
          <nav className="nav">
            <div className="">
              <Link to="/" className="nav-logo border-bottom">
                {show ? (
                  <div>
                    <img className="mx-5" src={logo3} />{" "}
                  </div>
                ) : (
                  <div>
                    {" "}
                    <img className="w-25" src={logo2} />{" "}
                  </div>
                )}
              </Link>

              <div className="nav-list">
                <Link to="/" className="p-2">
                  {show ? (
                    <button className="btn border-0 mx-2">
                      <sapn className="mx-2">
                        <FiHome />
                      </sapn>{" "}
                      Dashboard
                    </button>
                  ) : (
                    <sapn className="mx-3" style={{ fontSize: "20px" }}>
                      {" "}
                      <FiHome />
                    </sapn>
                  )}
                </Link>
              </div>
              <div className="nav-list">
                <Link to="/gallery" className="p-2">
                  {show ? (
                    <button className="btn border-0 mx-2">
                      <sapn className="mx-2">
                        <ImStack />
                      </sapn>{" "}
                      Profile Builder
                    </button>
                  ) : (
                    <sapn className="mx-3" style={{ fontSize: "20px" }}>
                      {" "}
                      <ImStack />
                    </sapn>
                  )}
                </Link>
              </div>
              <div className="nav-list">
                <Link to="/task1" className="p-2">
                  {show ? (
                    <button className="btn border-0 mx-2">
                      <sapn className="mx-2">
                        <ImStack />
                      </sapn>{" "}
                      Task - 1
                    </button>
                  ) : (
                    <sapn className="mx-3" style={{ fontSize: "20px" }}>
                      {" "}
                      <ImStack />
                    </sapn>
                  )}
                </Link>
              </div>
              <div className="nav-list">
                <Link to="/messageListing" className="p-2">
                  {show ? (
                    <button className="btn border-0 mx-2">
                      <sapn className="mx-2">
                        <ImStack />
                      </sapn>{" "}
                      Message Listing
                    </button>
                  ) : (
                    <sapn className="mx-3" style={{ fontSize: "20px" }}>
                      {" "}
                      <ImStack />
                    </sapn>
                  )}
                </Link>
              </div>
              {/* Candidates */}
              <div className="nav-list">
                <Link to="/candidates" className="p-2">
                  {show ? (
                    <button className="btn border-0 mx-2">
                      <sapn className="mx-2">
                        <FaUsers />
                      </sapn>{" "}
                      Candidates{" "}
                    </button>
                  ) : (
                    <sapn className="mx-3" style={{ fontSize: "20px" }}>
                      {" "}
                      <FaUsers />
                    </sapn>
                  )}
                </Link>
              </div>
            </div>
          </nav>
        </aside>
      </div>
      <div></div>
      {show ? (
        <div className="content-page-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/task1" element={<Task1 />} />
            <Route
              path="/messageListing"
              element={<MessageListing show={show} />}
            />
            {/* Candidates */}
            <Route path="/candidates" element={<CandidatesPage />} />
          </Routes>
        </div>
      ) : (
        <div className="content-page-1">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/task1" element={<Task1 />} />
            <Route
              path="/messageListing"
              element={<MessageListing show={show} />}
            />
            {/* Candidates */}
            <Route path="/candidates" element={<CandidatesPage />} />
          </Routes>
        </div>
      )}
    </main>
  );
};

export default Sidebar;
