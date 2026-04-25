import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="bg-background text-on-background min-h-screen font-sans selection:bg-primary selection:text-on-primary">
      <Navbar />
      <main className="flex flex-col gap-[10rem] pb-32">
        <Hero />
        <TechStack />
        <Projects />
        <CompetitiveProgramming />
      </main>
    </div>
  );
}

export default App;
