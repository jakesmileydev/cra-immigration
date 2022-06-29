import React from "react";
import { Link } from "react-router-dom";

import { CgChevronDown } from "react-icons/cg";

// import logo from "../images/cra-transparent.png";
import logo from "../images/cra-again.png";

export default function Header(props) {
  // Open and close mobile nav on clicking button
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const toggleMobileNav = function () {
    setIsMobileOpen(!isMobileOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const toggleDropdown = function () {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // change nav color from transparent to black after scrolling
  // const [color, setColor] = React.useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 85) setColor(true);
  //   else setColor(false);
  // };
  // window.addEventListener("scroll", changeColor);
  return (
    <header className={`header`}>
      <img src={logo} alt="Crocker Russell and Associates logo"></img>

      <nav className={`nav ${isMobileOpen ? "nav--open" : ""}`}>
        <ul>
          <li>
            {/* eslint-disable-next-line */}
            <Link
              to="/"
              className="hover-underline-animation"
              onClick={() => setIsMobileOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <button
              to="/"
              className=" practice-areas-link"
              onClick={toggleDropdown}
            >
              Practice Areas
              <CgChevronDown className="practice-areas-link-icon" />
            </button>
            <ul
              className={`practice-areas-dropdown ${
                isDropdownOpen ? "dropdown-open" : ""
              }`}
            >
              <li>
                <Link to="/visa" className="hover-underline-animation">
                  Visa
                </Link>
              </li>
              <li>Green Card</li>
              <li>Deportation Defense</li>
              <li>Citenzship</li>
            </ul>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover-underline-animation"
              onClick={() => setIsMobileOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              className="hover-underline-animation"
              onClick={() => setIsMobileOpen(false)}
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="hover-underline-animation"
              onClick={() => setIsMobileOpen(false)}
            >
              Team
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="mobile-nav-btn-wrapper"
        aria-label="mobile navigation"
        onClick={toggleMobileNav}
      >
        <div
          className={`mobile-nav-btn ${
            isMobileOpen ? "mobile-nav-btn--open" : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </header>
  );
}
