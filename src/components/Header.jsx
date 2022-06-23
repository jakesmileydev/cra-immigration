import logo from "../images/cra-transparent.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Crocker Russell and Associates logo"></img>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
