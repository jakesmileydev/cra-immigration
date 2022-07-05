import Sidebar from "../../components/Sidebar";
import Testimonials from "../../components/Testimonials";
import { motion } from "framer-motion";

export default function Visa() {
  return (
    <>
      <div className="banner">
        <div className="banner-overlay">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: {
                ease: "linear",
                duration: 0.5,
              },
              x: {
                ease: "easeOut",
                duration: 0.4,
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            Visa
          </motion.h1>
        </div>
      </div>
      <main className="practice-area">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            opacity: {
              ease: "linear",
              duration: 0.5,
              delay: 0.2,
            },
            y: {
              ease: "easeOut",
              duration: 0.4,
              delay: 0.2,
            },
          }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <header className="section-header">
            <p>Practice Areas</p>
            <h2>Visa</h2>
          </header>
          <p className="practice-area__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur labore tempore quo adipisci quidem eos provident dicta,
            architecto id cum. Voluptatum ut commodi eum, iure asperiores
            ratione illum nulla autem?
          </p>

          <p className="practice-area__paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            odit laborum illum quisquam nesciunt optio voluptates temporibus
            dicta fuga, voluptatibus dolore a cupiditate molestiae itaque illo
            nisi dolorum, molestias maiores!
          </p>
        </motion.section>
        <Sidebar />
      </main>
      <Testimonials />
    </>
  );
}
