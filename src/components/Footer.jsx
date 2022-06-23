import logo from "../images/cra-transparent.png";
import darkLogo from "../images/cra-dark.png";

import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdMail } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-logo">
        <img src={darkLogo} alt="CRA immigration logo" />
        <div className="footer-socials">
          <a
            href="https://www.facebook.com/craimmigration"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/craimmigration"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.twitter.com/craimmigration"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
      <div className="hours">
        <h5>Business Hours</h5>
        <div>
          <p>Monday - Friday:</p>
          <p> 8:30am - 5:30pm</p>
          <p>Saturday & Sunday: </p>
          <p>Closed</p>
        </div>
      </div>
      <div className="contact">
        <h5>Contact Us</h5>
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
            <a href="mailto:micala@cralawfirm.com">
              <MdMail />
              @cralawfirm.com
            </a>
          </li>
        </ul>
      </div>
      <nav className="footer-links">
        <h5>Links</h5>
        <ul>
          <li>
            {/* eslint-disable-next-line */}
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <p className="copy">
        © Crocker Russell and Associates Immigration 2022. All rights reserved.
      </p>
    </footer>
  );
}
