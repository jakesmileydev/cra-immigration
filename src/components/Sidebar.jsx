import { CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Sidebar() {
  return (
    <aside>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: {
            ease: "linear",
            duration: 0.5,
            delay: 0.4,
          },
          y: {
            ease: "easeOut",
            duration: 0.4,
            delay: 0.4,
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="services-container"
      >
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: {
            ease: "linear",
            duration: 0.5,
            delay: 0.6,
          },
          y: {
            ease: "easeOut",
            duration: 0.4,
            delay: 0.6,
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="form-container"
      >
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
      </motion.div>
    </aside>
  );
}
