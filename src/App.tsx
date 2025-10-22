import React from 'react';
import Hero from './components/Hero';
import Company from './components/Company';
import Services from './components/Services';
import UsefulLinks from './components/UsefulLinks';
import DigitalCertificate from './components/DigitalCertificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Company />
      <Services />
      <UsefulLinks />
      <DigitalCertificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
