import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
// import Services from './components/services/Services'
import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from './components/testimonials/Testimonials'
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <div>
      <SpeedInsights />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
