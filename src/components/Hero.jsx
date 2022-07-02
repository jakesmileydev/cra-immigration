import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section id="hero">
      <div className="overlay">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            opacity: {
              ease: "linear",
              duration: 0.4,
            },
            x: {
              ease: "easeOut",
              duration: 0.3,
            },
          }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <div className="pre-header">FEELING OVERWHELMED?</div>
          <h1>We're here to help.</h1>
          <p>
            Let our experienced team of immigration attorneys guide you through
            this difficult time.
            <br></br>
          </p>
          <Link to="/contact">Free Consultation</Link>
        </motion.div>
      </div>
    </section>
  );
}
