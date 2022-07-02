import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Team from "./pages/Team";
// import Success from "./pages/Success";

import Citizenship from "./pages/practice-areas/Citizenship";
import DeportationDefense from "./pages/practice-areas/DeportationDefense";
import GreenCard from "./pages/practice-areas/GreenCard";
import Visa from "./pages/practice-areas/Visa";

import Footer from "./components/Footer";
import Header from "./components/Header";

import ScrollToTop from "./helpers/ScrollToTop";

import "./style.css";

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />

      <Header location={location} />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/success" element={<Success />} /> */}
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/green-card" element={<GreenCard />} />
          <Route exact path="/citizenship" element={<Citizenship />} />
          <Route exact path="/visa" element={<Visa />} />
          <Route
            exact
            path="/deportation-defense"
            element={<DeportationDefense />}
          />

          {/* Default Route for wrong pathname */}
          <Route path="/*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}
