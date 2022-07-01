import { Link } from "react-router-dom";

export default function DeportationDefense() {
  return (
    <>
      <div className="banner">
        <div className="banner-overlay">
          <h1>Deportation Defense</h1>
        </div>
      </div>
      <main className="practice-area">
        <section>
          <header className="section-header">
            <p>Practice Areas</p>
            <h2>Deportation Defense</h2>
          </header>
        </section>
        <aside>
          <h3>Immigration Services</h3>
          <ul>
            <li>
              <Link to="/visa">Visa</Link>
            </li>
            <li>
              <Link to="/green-card">Green Card</Link>
            </li>
            <li>
              <Link to="/deportation-defense">Deportation Defense</Link>
            </li>
            <li>
              <Link to="/citizenship">Citizenship</Link>
            </li>
          </ul>
          <form
            name="contact-form"
            action="/success"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
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
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required={true}
                ></input>
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
        </aside>
      </main>
    </>
  );
}
