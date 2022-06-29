import React from "react";
import { Link } from "react-router-dom";

// import logo from "../images/cra-transparent.png";
import logo from "../images/cra-again.png";

export default function Header(props) {
  // Open and close mobile nav on clicking button
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const toggleMobileNav = function () {
    setIsMobileOpen(!isMobileOpen);
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
            <Link
              to="/"
              className="hover-underline-animation"
              onClick={() => setIsMobileOpen(false)}
            >
              Services
            </Link>
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
              to="/blog"
              className="hover-underline-animation"
              onClick={() => setIsMobileOpen(false)}
            >
              Blog
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
