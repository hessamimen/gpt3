import React from "react";
//Style
import "./App.css";

// components
import Navbar from "./components/navbar/Navbar";
import Header from "./conrainers/header/Header";
import Brand from "./components/brand/Brand";
import WhatGPT3 from "./conrainers/whatGPT3/WhatGPT3";
import Features from "./conrainers/features/Features";
import Possibilities from "./conrainers/possibility/Possibilities";
import CTA from "./components/cta/CTA";
import Blog from "./conrainers/blog/Blog";
import Footer from "./conrainers/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
