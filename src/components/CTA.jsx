import { Link } from "react-scroll";

export default function CTA() {
  return (
    <section id="cta">
      <div className="cta-overlay">
        <div className="cta-container">
          <h3>Do I Really Need An Immigration Lawyer?</h3>
          <p>
            Unfortunately, immigrants are not eligible for free legal
            representation from the U.S. government.
          </p>
          <p>
            Studies show that you are 10 times more likely to lawfully remain in
            the United States with proper legal representation.
          </p>
          <Link
            href="#contact"
            to="contact"
            smooth={true}
            offset={-85}
            duration={850}
          >
            Free Case Review
          </Link>
        </div>
      </div>
    </section>
  );
}
