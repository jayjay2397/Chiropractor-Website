import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import MeetTheDoctor from './components/MTD';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Services />
      <MeetTheDoctor />
      <Footer />
    </div>
  );
}

export default App;