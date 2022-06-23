import Contact from "./Contact";
import About from "./About";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import News from "./News";
import Footer from "./Footer";
import Awards from "./Awards";
import Services from "./Services";
import Hero from "./Hero";
import Header from "./Header";

import "../style.css";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Awards />
      <Services />
      <CTA />
      <Testimonials />
      <Contact />
      <News />
      <Footer />
    </>
  );
}
