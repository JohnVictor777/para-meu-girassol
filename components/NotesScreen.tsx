
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { notesData } from '../constants';
import NoteCard from './NoteCard';
import Toast from './Toast';
import { downloadAllNotes } from '../services/exportService';

const NotesScreen: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadAll = async () => {
    setIsDownloading(true);
    setToastMessage('Preparando para baixar todas as notas...');
    await downloadAllNotes(() => {
        setToastMessage('Downloads concluídos!');
        setTimeout(() => setToastMessage(null), 3000);
        setIsDownloading(false);
    });
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 relative">
      <Toast message={toastMessage} />
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
            <Link to="/" className="text-yellow-300 hover:text-yellow-400 transition-colors text-lg">
                &larr; Voltar
            </Link>
            <h1 className="font-dancing text-4xl md:text-5xl text-yellow-300 text-center">Notas de Amor</h1>
            <button
                onClick={handleDownloadAll}
                disabled={isDownloading}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
                {isDownloading ? 'Baixando...' : 'Baixar Todas ⬇️'}
            </button>
        </header>

        <div id="notes-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notesData.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default NotesScreen;
