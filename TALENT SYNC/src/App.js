import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Hero from './components/Hero/Hero.js';
import Sponsor from './components/Sponsors/Sponsors.js';
import WhyChoose from './components/WhyChoose/WhyChoose.js';
import Testimonials from './components/Testimonials/Testimonials.js';
import Faq from './components/Faq/Faq.js';
import FreeTrial from './components/FreeTrial/FreeTrail.js';
import Footer from "./components/Footer/Footer.js";
import Date from './components/Date/Date.js';

function App() {
  return (
    <Router>
        <div className="App">
      <Navbar/>
      <Hero/>
      <Sponsor/>
      <WhyChoose/>
      <Testimonials/>
      <Faq/>
      <FreeTrial/>
      <Footer/>
      <Date/>
    </div>
  </Router>
  );
}

export default App;
