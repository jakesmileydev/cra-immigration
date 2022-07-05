import Sidebar from "../../components/Sidebar";
import Testimonials from "../../components/Testimonials";
import { motion } from "framer-motion";

export default function GreenCard() {
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
            Green Card
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
            <h2>Green Card (Lawful Permanent Residence)</h2>
          </header>
          <p className="practice-area__paragraph">
            If you are a U.S. citizen, you may file a petition for (1) your
            spouse; (2) unmarried children under 21; (3) you unmarried sons or
            daughter 21 years old or older; (4) married sons or daughters of any
            age; (5) brother or sisters, if you are 21 or older; or (6) your
            mother or father, if you are 21 or older.
          </p>

          <p className="practice-area__paragraph">
            If you are in the United States or wanting lawful status in the
            United States, call our office (817) 482-6570 to schedule an
            appointment to speak with our immigration attorneys.
          </p>
        </motion.section>
        <Sidebar />
      </main>
      <Testimonials />
    </>
  );
}
