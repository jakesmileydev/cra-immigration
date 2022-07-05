import signature from "../images/signature.png";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.7, delay: 0.3 },
      }}
      viewport={{ once: true }}
    >
      <div className="about-text">
        <header className="section-header">
          <p>About</p>
          <h2>Crocker Russell and Associates Immigration</h2>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam,
          similique laudantium sequi vel inventore laboriosam! Impedit laborum
          reprehenderit vel corporis cumque deleniti animi? Temporibus sequi aut
          consectetur nulla quis!
        </p>
        <p>
          Adipisci provident porro omnis iure quos aut, ipsa eius fugit
          blanditiis est eligendi tempora ipsum qui autem quis. Officia, libero
          molestiae! Eos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <div className="about-quote">
          "Our objective is to provide every client with the best representation
          possible so you can get the results you desire."
        </div>
        {/* <div className="about-signature"></div> */}
        <img
          src={signature}
          className="about-signature"
          alt="ali crocker russell signature"
        />
      </div>
      <div className="about-image"></div>
    </motion.section>
  );
}
