import { SpeedInsights } from '@vercel/speed-insights/react';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';

import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default App;
