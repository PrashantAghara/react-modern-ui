import React from "react";
import "./App.css";

import {
  Blog,
  WhatGPT3,
  Footer,
  Header,
  Features,
  Possibility,
} from "./containers";

import { CTA, Navbar, Brand } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
