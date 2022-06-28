import teamOne from "../images/team.jpg";
import teamTwo from "../images/team-2.jpg";
import teamThree from "../images/team-3.jpg";
import teamFour from "../images/team-4.jpg";

export default function Team() {
  return (
    <section id="team">
      <header className="section-header">
        <p>Expert Attorneys</p>
        <h2>Meet The Team</h2>
      </header>

      <div className="team-cards">
        <div className="team-card">
          <img src={teamThree} alt="team member one" className="card-image" />
          <span className="card-shape"></span>
          <p className="card-name">Ali Crocker Russell</p>
          <p className="card-title">Managing Attorney</p>
        </div>
        <div className="team-card">
          <img src={teamOne} alt="team member one" className="card-image" />
          <span className="card-shape"></span>
          <p className="card-name">Steve Harrington</p>
          <p className="card-title">Associate Attorney</p>
        </div>
        <div className="team-card">
          <img src={teamFour} alt="team member one" className="card-image" />
          <span className="card-shape"></span>
          <p className="card-name">Winona Ryder</p>
          <p className="card-title">Associate Attorney</p>
        </div>
        <div className="team-card">
          <img src={teamTwo} alt="team member one" className="card-image" />
          <span className="card-shape"></span>
          <p className="card-name">Joe Mama</p>
          <p className="card-title">Paralegal</p>
        </div>

        {/* <div className="card card-four">
          <div className="card-image"></div>
          <div className="card-text">
            <p className="card-name">Ali Crocker Russell</p>
            <p className="card-title">Managing Attorney</p>
          </div>
        </div>

        <div className="card card-one">
          <div className="card-image"></div>
          <div className="card-text">
            <p className="card-name">Steve Harrington</p>
            <p className="card-title">Associate</p>
          </div>
        </div>

        <div className="card card-three">
          <div className="card-image"></div>
          <div className="card-text">
            <p className="card-name">Betty White</p>
            <p className="card-title">Associate</p>
          </div>
        </div>
        <div className="card card-two">
          <div className="card-image"></div>
          <div className="card-text">
            <p className="card-name">Jack Sparrow</p>
            <p className="card-title">Associate</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
