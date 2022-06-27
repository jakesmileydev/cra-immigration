import { Link } from "react-scroll";

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
          <Link
            href="#contact"
            to="contact"
            smooth={true}
            offset={-85}
            duration={850}
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
