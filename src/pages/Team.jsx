import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Team() {
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
            Team
          </motion.h1>
        </div>
      </div>
      <main id="team">
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
          className="team team-one"
        >
          <div className="team-text">
            <header className="section-header">
              <p>Managing Attorney</p>
              <h2>Ali Crocker Russell</h2>
              <ul className="team-socials">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
              </ul>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quam, similique laudantium sequi vel inventore laboriosam! Impedit
              laborum reprehenderit vel corporis cumque deleniti animi?
              Temporibus sequi aut consectetur nulla quis!
            </p>
            <p>
              Adipisci provident porro omnis iure quos aut, ipsa eius fugit
              blanditiis est eligendi tempora ipsum qui autem quis. Officia,
              libero molestiae! Eos. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <div className="team-quote">
              "Our objective is to provide every client with the best
              representation possible so you can get the results you desire."
            </div>
            {/* <div className="team-signature"></div> */}
          </div>
          <div className="team-image"></div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            opacity: {
              ease: "linear",
              duration: 0.5,
              delay: 0.4,
            },
            y: {
              ease: "easeOut",
              duration: 0.4,
              delay: 0.4,
            },
          }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="team team-two"
        >
          <div className="team-image"></div>
          <div className="team-text">
            <header className="section-header">
              <p>Associate Attorney</p>
              <h2>Some Other Lady</h2>
              <ul className="team-socials">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
              </ul>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quam, similique laudantium sequi vel inventore laboriosam! Impedit
              laborum reprehenderit vel corporis cumque deleniti animi?
              Temporibus sequi aut consectetur nulla quis!
            </p>
            <p>
              Adipisci provident porro omnis iure quos aut, ipsa eius fugit
              blanditiis est eligendi tempora ipsum qui autem quis. Officia,
              libero molestiae! Eos. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <div className="team-quote">
              "Our objective is to provide every client with the best
              representation possible so you can get the results you desire."
            </div>
            {/* <div className="about-signature"></div> */}
          </div>
        </motion.section>
      </main>
    </>
  );
}
