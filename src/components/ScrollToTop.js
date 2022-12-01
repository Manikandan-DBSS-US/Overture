import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/scrollToTopStyle.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const addScroll = () => {
    let hiddenHeight = 200;
    const windowScrollHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScrollHeight > hiddenHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addScroll);
    return () => window.removeEventListener("scroll", addScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <section onClick={scrollToTopHandler} className="scroll-to-top">
          <div className="top-btn">
            <FaArrowUp className="top-btn-icon" />
          </div>
        </section>
      )}
    </>
  );
};

export default ScrollToTop;
