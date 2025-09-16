
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import type { NoteData } from '../types';

interface NoteCardProps {
  note: NoteData;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current && contentRef.current) {
      gsap.to(cardRef.current, {
        height: isActive ? contentRef.current.offsetHeight + 40 : 150, // 40px for padding
        duration: 0.5,
        ease: 'power3.inOut',
      });
    }
  }, [isActive]);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      ref={cardRef}
      className="note-card bg-stone-100 text-gray-800 rounded-2xl shadow-lg p-5 overflow-hidden cursor-pointer h-[150px]"
      onClick={toggleActive}
    >
      <div ref={contentRef}>
        <p className="text-lg mb-4 text-center">{note.main}</p>
        {note.secondary && <p className="text-md text-center italic text-gray-600">{note.secondary}</p>}
      </div>
    </div>
  );
};

export default NoteCard;
