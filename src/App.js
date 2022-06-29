import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Media";
import Team from "./pages/Team";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./style.css";

export default function App() {
  const location = useLocation();
  return (
    <>
      <Header location={location} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/media" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}
