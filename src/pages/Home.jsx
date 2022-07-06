import CTA from "../components/CTA";
import About from "../components/About";
import Awards from "../components/Awards";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.3 } }}>
        <About />
        <Awards />
        <Services />
        <CTA />
        <Testimonials />
      </motion.div>
    </>
  );
}
