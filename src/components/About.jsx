import signature from "../images/signature.png";

export default function About() {
  return (
    <section id="about">
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
          "We'll Lawyer the shit out of those motherfuckers!"
        </div>
        {/* <div className="about-signature"></div> */}
        <img
          src={signature}
          className="about-signature"
          alt="ali crocker russell signature"
        />
      </div>
      <div className="about-image"></div>
    </section>
  );
}
