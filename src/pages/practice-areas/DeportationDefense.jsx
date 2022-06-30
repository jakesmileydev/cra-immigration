import { Link } from "react-router-dom";

export default function DeportationDefense() {
  return (
    <>
      <div className="banner">
        <div className="banner-overlay">
          <h1>Deportation Defense</h1>
        </div>
      </div>
      <main className="practice-area">
        <section>
          <header className="section-header">
            <p>Practice Areas</p>
            <h2>Deportation Defense</h2>
          </header>
        </section>
        <aside>
          <h3>Immigration Services</h3>
          <ul>
            <li>
              <Link to="/visa">Visa</Link>
            </li>
            <li>
              <Link to="/green-card">Green Card</Link>
            </li>
            <li>
              <Link to="/deportation-defense">Deportation Defense</Link>
            </li>
            <li>
              <Link to="/citizenship">Citizenship</Link>
            </li>
          </ul>
        </aside>
      </main>
    </>
  );
}
