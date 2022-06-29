import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero">
      <div className="overlay">
        <div className="hero-text">
          <div className="pre-header">FEELING OVERWHELMED?</div>
          <h1>We're here to help.</h1>
          <p>
            Let our experienced team of immigration attorneys guide you through
            this difficult time.
            <br></br>
          </p>
          <Link to="/contact">Free Consultation</Link>
        </div>
      </div>
    </section>
  );
}
