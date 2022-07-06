import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function CTA() {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.7, delay: 0.1 },
      }}
      viewport={{ once: true }}
    >
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
          <Link to="/contact">Free Case Review</Link>
        </div>
      </div>
    </motion.section>
  );
}
