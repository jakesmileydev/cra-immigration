import { MdFormatQuote } from "react-icons/md";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <header className="section-header">
        <p>Testimonials</p>
        <h2>Just ask our clients</h2>
      </header>
      <div className="reviews">
        <div className="review">
          <MdFormatQuote className="quote-icon" />
          <p className="review-text">
            Ali is the best!!! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem praesentium, ipsam quasi ut laboriosam laborum
            aspernatur id dolores cupiditate aut corrupti, tempore temporibus
            repellat recusandae voluptates alias maxime tempora vero.
          </p>
          <p className="review-author">- Steve Harrington</p>
        </div>
        <div className="review">
          <MdFormatQuote className="quote-icon" />
          <p className="review-text">
            Ali is the best!!! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. aspernatur id dolores cupiditate aut corrupti,
            tempore temporibus repellat recusandae voluptates alias maxime
            tempora vero.
          </p>
          <p className="review-author">- Joe Mama</p>
        </div>
        <div className="review">
          <MdFormatQuote className="quote-icon" />
          <p className="review-text">
            Ali is the best!!! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem praesentium, ipsam quasi ut laboriosam laborum
            aspernatur id dolores cupiditate aut corrupti, tempore temporibus
            repellat recusandae voluptates alias maxime tempora vero.
          </p>
          <p className="review-author">- Boba Fett</p>
        </div>
      </div>
    </section>
  );
}
