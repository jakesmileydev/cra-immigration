import CTA from "../components/CTA";
import About from "../components/About";
import Awards from "../components/Awards";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <About />
      <Awards />
      <Services />
      <CTA />
      <Testimonials />
    </>
  );
}
