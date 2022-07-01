import { FaMobileAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <main id="contact">
      <div className="banner">
        <div className="banner-overlay">
          <h1>Contact Us</h1>
        </div>
      </div>
      <h2>Crocker Russell & Associates Immigration</h2>
      <div className="contact-icons-container">
        <div className="contact-icons">
          <div>
            <FaMobileAlt className="icon" />
            <p className="icon-title">Phone</p>
            <p className="icon-value">
              <a href="tel:8174826570">817-482-6570</a>
            </p>
          </div>
          <div>
            <FaMapMarkerAlt className="icon" />
            <p className="icon-title">Address</p>
            <p className="icon-value">
              {" "}
              <a
                href="https://www.google.com/maps/place/Crocker+Russell+%26+Associates/@32.6075827,-97.1558186,17z/data=!4m12!1m6!3m5!1s0x864e63df1e496743:0xac92bdccd1479d3b!2sCrocker+Russell+%26+Associates!8m2!3d32.6075876!4d-97.1533429!3m4!1s0x864e63df1e496743:0xac92bdccd1479d3b!8m2!3d32.6075876!4d-97.1533429"
                target="_blank"
                rel="noreferrer"
              >
                2401 Callender Road Suite 103 Mansfield, TX 76063
              </a>
            </p>
          </div>
          <div>
            <MdMailOutline className="icon" />
            <p className="icon-title">Email</p>
            <p className="icon-value">email@cralawfirm.com</p>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div>
          <header className="section-header">
            <p>Se Habla Español</p>
            <h3>Get your free consultation</h3>
          </header>
          <div className="contact-description">
            <p>
              We look forward to hearing from you to discuss how we can give you
              the outstanding legal representation you deserve. We proudly serve
              clients all throughout Fort Worth, Mansfield, Arlington, and the
              surrounding area.
            </p>
            <p>
              For immediate assistance, please call our office number at{" "}
              <a href="tel:8174826570">817-482-6570</a>, and our administrative
              assistant will be happy to help.
            </p>
          </div>
        </div>
        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          action="/success"
        >
          <div className="form-row">
            <div>
              <input type="hidden" name="form-name" value="contact-form" />
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required={true}
              ></input>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required={true}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" id="phone" required={true}></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required={true}
              ></input>
            </div>
          </div>
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message"></textarea>

          <button>Send Message</button>
        </form>
      </div>
    </main>
  );
}
