import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Article from "./pages/Article";
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
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchData = async () => {
    try {
      await fetch(".netlify/functions/fetchBlog")
        .then((res) => res.json())
        .then((data) => setBlogPosts(data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const blogRouteElements = blogPosts.map((post) => {
    return (
      <Route
        exact
        key={post.id}
        path={`/blog/article/${post.id}`}
        element={<Article post={post} />}
      />
    );
  });

  return (
    <>
      <ScrollToTop />

      <Header location={location} />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/blog" element={<Blog blogPosts={blogPosts} />} />
          {blogRouteElements}
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
