import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section id="hero">
      <div className="overlay">
        <div className="hero-text">
          <motion.div
            className="pre-header"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: {
                ease: "linear",
                duration: 0.8,
                delay: 0.1,
              },
              x: {
                ease: "easeOut",
                duration: 0.6,
                delay: 0.1,
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            Feeling Overwhelmed?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: {
                ease: "easeInOut",
                duration: 0.8,
                delay: 0.4,
              },
              x: {
                ease: "easeOut",
                duration: 0.6,
                delay: 0.4,
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <h1>We're here to help.</h1>
            <p>
              Let our experienced team of immigration attorneys guide you
              through this difficult time.
              <br></br>
            </p>

            <Link to="/contact">Free Consultation</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
