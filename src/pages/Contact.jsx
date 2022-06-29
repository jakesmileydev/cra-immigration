export default function Contact() {
  return (
    <main id="contact">
      <div className="banner">
        <div className="banner-overlay">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-container">
        <form name="contact-form" method="POST" data-netlify="true">
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
