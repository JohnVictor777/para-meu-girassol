
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const breathingCycle = [
  { text: 'Inspire...', duration: 4000, animation: 'animate-expand' },
  { text: 'Segure', duration: 4000, animation: 'animate-hold' },
  { text: 'Expire...', duration: 4000, animation: 'animate-shrink' },
  { text: 'Pausa', duration: 4000, animation: 'animate-hold-small' },
];

const AnxietyGame: React.FC = () => {
  const [cycleIndex, setCycleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCycleIndex((prevIndex) => (prevIndex + 1) % breathingCycle.length);
    }, breathingCycle[cycleIndex].duration);

    return () => clearTimeout(timer);
  }, [cycleIndex]);

  const currentCycle = breathingCycle[cycleIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
       <Link to="/" className="absolute top-6 left-6 text-yellow-300 hover:text-yellow-400 transition-colors text-lg z-10">
         &larr; Voltar
      </Link>
      <h1 className="font-dancing text-4xl md:text-5xl text-yellow-300 mb-4">Momento de Calma</h1>
      <p className="text-blue-200 mb-12 max-w-md">
        Concentre-se na sua respiração. Siga o círculo e as instruções para encontrar um ritmo relaxante.
      </p>

      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className={`absolute w-full h-full bg-blue-400 rounded-full transition-transform duration-[4000ms] ease-in-out ${currentCycle.animation}`}>
             <style>{`
                .animate-expand { transform: scale(1); opacity: 0.7; }
                .animate-hold { transform: scale(1); opacity: 0.7; }
                .animate-shrink { transform: scale(0.5); opacity: 0.4; }
                .animate-hold-small { transform: scale(0.5); opacity: 0.4; }
            `}</style>
        </div>
        <span className="relative text-2xl font-bold text-white z-10">{currentCycle.text}</span>
      </div>
    </div>
  );
};

export default AnxietyGame;
