import { CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
      <div className="services-container">
        <h3>Immigration Services</h3>
        <ul>
          <li>
            <Link to="/visa">
              <CgChevronRight />
              Visa
            </Link>
          </li>
          <li>
            <Link to="/green-card">
              <CgChevronRight />
              Green Card
            </Link>
          </li>
          <li>
            <Link to="/deportation-defense">
              <CgChevronRight />
              Deportation Defense
            </Link>
          </li>
          <li>
            <Link to="/citizenship">
              <CgChevronRight />
              Citizenship
            </Link>
          </li>
        </ul>
      </div>
      <div className="form-container">
        <h3>Speak With An Attorney</h3>
        <form
          name="contact-form"
          action="/success"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required={true}
          ></input>

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required={true}
          ></input>

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" required={true}></input>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required={true}></input>

          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </aside>
  );
}
