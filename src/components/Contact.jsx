export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-overlay">
        <div className="contact-container">
          <header className="section-header">
            <p>Se Habla Español</p>
            <h2>Free Consultation</h2>
          </header>
          <form>
            <div className="form-row">
              <div>
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
        </div>
      </div>
    </section>
  );
}
