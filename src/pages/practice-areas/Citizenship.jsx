import Sidebar from "../../components/Sidebar";
import Testimonials from "../../components/Testimonials";

import { motion } from "framer-motion";
export default function Citizenship() {
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
            Citizenship
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
            <h2>Citizenship & Naturalization</h2>
          </header>
          <p className="practice-area__paragraph">
            If you are at least 18 years or older, have been living in the
            United States as a lawful permanent resident for more than three
            years, if you are married to a United States citizen, or five years,
            if you are not, are able to demonstrate that you have good moral
            character and willing to take an Oath of Allegiance to the United
            States, you are likely eligible to apply to become a citizen. Unless
            you meet one of the exemptions, you must also be able to read and
            speak English and demonstrate a knowledge and understanding of U.S.
            government and history.
          </p>
        </motion.section>
        <Sidebar />
      </main>
      <Testimonials />
    </>
  );
}
