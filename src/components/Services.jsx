import { FaAddressCard } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaRegIdBadge } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services">
      <div className="services-icons">
        <div className="service">
          <FaAddressCard className="icon" />
          <h4>Green Card</h4>
          <p>Gain permanent lawful residence</p>
        </div>
        <div className="service">
          <FaUserCheck className="icon" />
          <h4>Citizenship</h4>
          <p>Become a citizen of the United States </p>
        </div>
        <div className="service">
          <FaShieldAlt className="icon" />
          <h4>Deportation Defense</h4>
          <p>Avoid being deported</p>
        </div>
        <div className="service">
          <FaRegIdBadge className="icon" />
          <h4>Visa</h4>
          <p>Work Legally in the U.S.</p>
        </div>
      </div>
      <div className="services-text">
        <div className="section-header">
          <p>Practice Areas</p>
          <h2>How we can help</h2>
        </div>
        <p>
          If you or a loved one does not have any legal status in the United
          States, our dedicated immigration attorneys can help you make sure
          that your petition or other application is done correctly.
        </p>
        <p>
          Over the last few years, the United States immigration policies have
          substantially changed. We recommend that you <strong>NOT</strong> try
          and navigate this process without an experienced attorney by your
          side.
        </p>
        <p>
          The immigation process is tricky at every stage. If, for some reason,
          you do not complete the forms correctly or you submit the wrong
          documentation, <strong>you could be deported</strong>.
        </p>
      </div>
    </section>
  );
}
