import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { domMax, LazyMotion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

import './App.css';

const Services = lazy(() =>
  import('./components/Services').then((m) => ({ default: m.Services })),
);
const About = lazy(() =>
  import('./components/About').then((m) => ({ default: m.About })),
);

const App = () => {
  return (
    <LazyMotion features={domMax}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Suspense
            fallback={<div className="h-96 bg-gray-50 animate-pulse" />}
          >
            <Services />
          </Suspense>
          <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
            <About />
          </Suspense>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </LazyMotion>
  );
};

export default App;
