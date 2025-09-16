
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const fullTitle = 'Para o Meu Girassol,';

  useEffect(() => {
    let index = 0;
    setTitle('');
    const interval = setInterval(() => {
      if (index < fullTitle.length) {
        setTitle((prev) => prev + fullTitle.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center z-10 relative">
      <div className="bg-black/60 p-8 rounded-3xl shadow-2xl max-w-2xl w-full border border-white/10">
        <h1 className="font-dancing text-yellow-300 text-5xl md:text-7xl mb-4 h-24 border-r-4 border-yellow-300 animate-typing overflow-hidden whitespace-nowrap mx-auto">
            {title}
            <style>{`
                @keyframes typing {
                    from { width: 0 }
                    to { width: 100% }
                }
                @keyframes blink-caret {
                    from, to { border-color: transparent }
                    50% { border-color: #FBBF24; }
                }
                .animate-typing {
                    animation: typing 3s steps(30, end) forwards, blink-caret .75s step-end infinite;
                    display: inline-block;
                }
            `}</style>
        </h1>
        <h2 className="text-xl md:text-3xl text-blue-200 mb-8">
            Minha história favorita começa e recomeça em você.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/notes" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-2xl text-lg shadow-lg transition-transform transform hover:scale-105">
                Ver Notas de Amor 💌
            </Link>
            <Link to="/game" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-800 font-bold py-3 px-8 rounded-2xl text-lg shadow-lg transition-transform transform hover:scale-105">
                Momento de Calma 🧘
            </Link>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
