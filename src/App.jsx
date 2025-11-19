import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingIcons from './components/FloatingIcons';
// import FeaturedProducts from './components/FeaturedProducts';
// import TrustedCompanies from './components/TrustedCompanies';
// import BlogSection from './components/BlogSection';
// import WhyNudura from './components/WhyNudura';
// import Testimonials from './components/Testimonials';
// import Certifications from './components/Certifications';
// import WhyChoose from './components/WhyChoose';
// import Footer from './components/Footer';
import './App.css';

/**
 * Main App Component
 * Layout matches Figma design with exact measurements
 * Includes Header, Hero, Featured Products, and Floating Icons
 */
function App() {
  return (
    <div className="app-container">
      <div className="app-layout">
        <Header />
        <Hero />
        <FloatingIcons />
      </div>
      {/* <FeaturedProducts />
      <TrustedCompanies />
      <BlogSection />
      <WhyNudura />
      <Testimonials />
      <Certifications />
      <WhyChoose />
      <Footer /> */}
    </div>
  );
}

export default App;
