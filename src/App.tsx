import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import CodeRain from './components/CodeRain';

function App() {
  return (
    <div className="bg-background text-on-background min-h-screen font-sans selection:bg-primary selection:text-on-primary">
      <CursorGlow />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <div className="h-16 md:h-24" />{/* Safe gap */}
        <TechStack />
        
        <div className="relative w-full overflow-hidden">
          <CodeRain />
          <div className="relative z-10 pointer-events-auto">
            <Experience />
            <div className="h-16 md:h-24" />
            <Services />
          </div>
        </div>

        <Projects />
        <CompetitiveProgramming />
        <Contact />
      </main>
    </div>
  );
}

export default App;
