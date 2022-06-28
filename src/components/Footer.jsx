import React from "react";
import { Link } from "react-scroll";

// import logo from "../images/cra-transparent.png";
import logo from "../images/cra-again.png";

import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdMail } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgChevronUp } from "react-icons/cg";

export default function Footer() {
  const [buttonOpen, setButtonOpen] = React.useState({
    hoursButton: false,
    contactButton: false,
    linksButton: false,
  });

  const handleClick = function (e) {
    const button = e.target.classList[0];
    setButtonOpen((prevState) => {
      const newState = {
        ...prevState,
        [button]: !prevState[button],
      };
      console.log(newState);
      return newState;
    });
  };
  return (
    <footer id="footer">
      <div className="footer-logo">
        <img src={logo} alt="CRA immigration logo" />
        <div className="footer-socials">
          <a
            aria-label="facebook"
            href="https://www.facebook.com/craimmigration"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="social-icon" />
          </a>
          <a
            aria-label="instagram"
            href="https://www.instagram.com/craimmigration"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            aria-label="twitter"
            href="https://www.twitter.com/craimmigration"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
      <div className={`hours ${buttonOpen.hoursButton ? "open" : ""}`}>
        <p className="hoursButton footer-title" onClick={handleClick}>
          Hours
          <CgChevronUp className="arrow" />
        </p>
        <div>
          <p>Monday - Friday:</p>
          <p> 8:30am - 5:30pm</p>
          <p>Saturday & Sunday: </p>
          <p>Closed</p>
        </div>
      </div>
      <div className={`contact ${buttonOpen.contactButton ? "open" : ""}`}>
        <p className="contactButton footer-title" onClick={handleClick}>
          Contact
          <CgChevronUp className="arrow" />
        </p>
        <ul>
          <li>
            <a href="tel:18006666">
              <MdCall />
              1-800-6666
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/Crocker+Russell+%26+Associates/@32.6075827,-97.1558186,17z/data=!4m12!1m6!3m5!1s0x864e63df1e496743:0xac92bdccd1479d3b!2sCrocker+Russell+%26+Associates!8m2!3d32.6075876!4d-97.1533429!3m4!1s0x864e63df1e496743:0xac92bdccd1479d3b!8m2!3d32.6075876!4d-97.1533429"
              target="_blank"
              rel="noreferrer"
            >
              <MdLocationPin />
              Directions
            </a>
          </li>
          <li>
            <Link to="contact" href="#contact" smooth={true} offset={-85}>
              <MdMail />
              @cralawfirm.com
            </Link>
          </li>
        </ul>
      </div>
      <nav className={`footer-links ${buttonOpen.linksButton ? "open" : ""}`}>
        <p className="linksButton footer-title" onClick={handleClick}>
          Links
          <CgChevronUp className="arrow" />
        </p>
        <ul>
          <li>
            {/* eslint-disable-next-line */}
            <Link to="hero" href="#home" smooth={true} duration={850}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              href="#about"
              smooth={true}
              offset={-85}
              duration={850}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              href="#services"
              smooth={true}
              offset={-85}
              duration={850}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              href="#testimonials"
              smooth={true}
              offset={-85}
              duration={850}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              href="#contact"
              smooth={true}
              offset={-85}
              duration={850}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <p className="copy">
        © Crocker Russell and Associates Immigration 2022. All rights reserved.
      </p>
    </footer>
  );
}
