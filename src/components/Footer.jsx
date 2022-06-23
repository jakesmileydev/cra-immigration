import logo from "../images/cra-transparent.png";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-logo">
        <img src={logo} alt="CRA immigration logo" />
        <div className="footer-socials">
          <h5>Follow Us</h5>
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
      <nav className="footer-links">
        <h5>Links</h5>
        <ul>
          <li>
            <a href="#home">Home</a>
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
      <div className="contact">
        <h5>Contact Us</h5>
        <ul>
          <li>
            <a href="tel:18006666">1-800-6666</a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/Crocker+Russell+%26+Associates/@32.6075827,-97.1558186,17z/data=!4m12!1m6!3m5!1s0x864e63df1e496743:0xac92bdccd1479d3b!2sCrocker+Russell+%26+Associates!8m2!3d32.6075876!4d-97.1533429!3m4!1s0x864e63df1e496743:0xac92bdccd1479d3b!8m2!3d32.6075876!4d-97.1533429"
              target="_blank"
              rel="noreferrer"
            >
              2401 Calender Rd Suite 103, Mansfield, TX 76063
            </a>
          </li>
          <li>
            <a href="mailto:micala@cralawfirm.com">@cralawfirm.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
