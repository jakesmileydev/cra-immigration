import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Team() {
  return (
    <>
      <div className="banner">
        <div className="banner-overlay">
          <h1>Team</h1>
        </div>
      </div>
      <main id="team">
        <section className="team team-one">
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
        </section>
        <section className="team team-two">
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
        </section>
      </main>
    </>
  );
}
