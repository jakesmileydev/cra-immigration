import Sidebar from "../../components/Sidebar";
import Testimonials from "../../components/Testimonials";
import { motion } from "framer-motion";

export default function DeportationDefense() {
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
            Deportation
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
            <h2>Deportation Defense (Removal Proceedings)</h2>
          </header>
          <p className="practice-area__paragraph">
            If you or your loved one entered the United States without proper
            documentation, you or your loved one were likely issued a Notice to
            Appear (NTA). The NTA may already have a court date where you are
            required to appear or the court may issue the court date at a later
            time. During the removal proceeding, you must always appear at every
            single court hearing or{" "}
            <strong>
              you will be ordered deported from the United States.
            </strong>{" "}
            You must also always inform the Court if you have changed your
            address. Failure to update the Court of your new address could also
            lead you to be{" "}
            <strong>ordered deported from the United States.</strong>
          </p>
          <p className="practice-area__paragraph">
            Depending on a variety of factors (if you're married to a citizen or
            lawful permanent resident, if you have U.S. citizen children or U.S.
            citizen parents, etc.), you may qualify to submit an application
            wherein you are asking the court to either not deport you from the
            United States or grant you lawful permanent residency status. Some
            of the relief you may qualify for is (1) Cancellation of Removal for
            Non-Permanent Residents; (2) Cancellation of Removal for Permanent
            Residents; (3) Asylum; (4) Withholding of Removal; or (5) Adjustment
            of Status.
          </p>
          <p className="practice-area__paragraph">
            Statistically, you have a higher probability of getting your
            application granted if you are represented by an attorney. If
            possible, retain an attorney as soon as you receive the Notice to
            Appear. Our immigration attorney will attend every hearing with you
            and be with you through out every step of this stressful process.
          </p>
        </motion.section>
        <Sidebar />
      </main>
      <Testimonials />
    </>
  );
}
