import React from "react";
import { Link } from "react-scroll";

// import logo from "../images/cra-transparent.png";
import darkLogo from "../images/cra-dark.png";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const toggleMobileNav = function () {
    setIsMobileOpen(!isMobileOpen);
  };

  // change nav color when scrolling
  const [color, setColor] = React.useState(false);
  const changeColor = () => {
    if (window.scrollY >= 85) setColor(true);
    else setColor(false);
  };
  window.addEventListener("scroll", changeColor);
  return (
    <header className={`header ${color ? "header-bg" : ""}`}>
      <Link to="hero" smooth={true} duration={850} className="logo">
        <img src={darkLogo} alt="Crocker Russell and Associates logo"></img>
      </Link>
      <nav className={`nav ${isMobileOpen ? "nav--open" : ""}`}>
        <ul>
          <li>
            {/* eslint-disable-next-line */}
            <Link
              to="hero"
              smooth={true}
              duration={850}
              onClick={() => setIsMobileOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-85}
              duration={850}
              onClick={() => setIsMobileOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              offset={-85}
              duration={850}
              onClick={() => setIsMobileOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-85}
              duration={850}
              onClick={() => setIsMobileOpen(false)}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-85}
              duration={850}
              onClick={() => setIsMobileOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="team"
              smooth={true}
              offset={-85}
              duration={850}
              onClick={() => setIsMobileOpen(false)}
            >
              Team
            </Link>
          </li>
        </ul>
      </nav>
      <button className="mobile-nav-btn-wrapper" onClick={toggleMobileNav}>
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
