import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-bg">
      <div className="footer-wrapper">
        <div className="container-fluid">
          <div className="footer-section">
            <div className="">
              <img
                src="imgHome1/Footer Logo.png"
                alt="Footer Logo"
                className="footer-logo"
              />
              <div className="footer-group">
                <p className="footer-text1">
                  <strong className="highlight-text">Beautice</strong> is a
                  Beauty Clinic WordPress Theme.
                </p>
                <p className="footer-text">
                  Baker Steet 101, NY, United States.
                </p>
                <div className="footer-text-wrapper">
                  <p className="footer-text2">+521 569 8966</p>
                  <p className="footer-text">
                    <u>mail@company.com</u>
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-list-col">
              <ul className="footer-list1">
                <li className="footer-list-item1">Pages</li>
                <li className="footer-list-item home-item home">
                  <FontAwesomeIcon icon={faCaretRight} className="icon" /> Home
                </li>
                <li className="footer-list-item about-item about">
                  <FontAwesomeIcon icon={faCaretRight} className="icon" /> About
                </li>
                <li className="footer-list-item services">
                  <FontAwesomeIcon icon={faCaretRight} className="icon" />{" "}
                  Services
                </li>
                <li className="footer-list-item gallery">
                  <FontAwesomeIcon icon={faCaretRight} className="icon" />{" "}
                  Gallery
                </li>
                <li className="footer-list-item team">
                  <FontAwesomeIcon icon={faCaretRight} className="icon" /> Team
                </li>
              </ul>
            </div>
            <div className=" footer-list-col">
              <ul className="footer-list">
                <li className="footer-list-item1">Informations</li>
                <li className="footer-list-item">
                  <FontAwesomeIcon icon={faCaretRight} className="icon" /> Terms
                  & conditions
                </li>
                <li className="footer-list-item">
                  <FontAwesomeIcon icon={faCaretRight} className="icon" />{" "}
                  Privacy policy
                </li>
                <li className="footer-list-item">
                  <FontAwesomeIcon icon={faCaretRight} className="icon" /> Blog
                </li>
                <li className="footer-list-item">
                  <FontAwesomeIcon icon={faCaretRight} className="icon" />{" "}
                  Contact
                </li>
              </ul>
            </div>
          </div>
          <button className="scroll-to-top-button" onClick={scrollToTop}>
            <img src="imgHome1/ToTop Button.png" alt="Scroll to Top" />
          </button>
          <div className="footer-bottom">
            <img
              src="imgHome1/Social Media.png"
              alt="Social Media"
              className="social-media-icon"
            />
            <p className="footer-copy">
              &copy; AltDesain Studio 2021 - All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
