
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import NotesScreen from './components/NotesScreen';
import AnxietyGame from './components/AnxietyGame';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#690035] to-[#38026b] min-h-screen text-white relative overflow-hidden">
      <ParticleBackground />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/notes" element={<NotesScreen />} />
          <Route path="/game" element={<AnxietyGame />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
