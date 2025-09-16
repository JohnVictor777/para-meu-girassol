
import { gsap } from 'gsap';

declare global {
    interface Window {
        html2canvas: any;
    }
}

const downloadURI = (uri: string, name: string) => {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadAllNotes = async (onComplete: () => void) => {
    const notesContainer = document.getElementById('notes-container');
    if (!notesContainer) return;

    const noteCards = Array.from(notesContainer.querySelectorAll('.note-card')) as HTMLElement[];

    for (let i = 0; i < noteCards.length; i++) {
        const card = noteCards[i];
        const content = card.querySelector('div') as HTMLElement;

        // Temporarily expand card for full capture
        await new Promise<void>(resolve => {
            gsap.to(card, {
                height: content.offsetHeight + 40,
                duration: 0.1,
                onComplete: () => resolve(),
            });
        });

        // Wait a bit for render
        await new Promise(resolve => setTimeout(resolve, 100));

        const canvas = await window.html2canvas(card, {
            scale: 2,
            backgroundColor: null, // Transparent background
            useCORS: true
        });

        downloadURI(canvas.toDataURL('image/png'), `nota-de-amor-${i + 1}.png`);
        
        // Restore original height
        await new Promise<void>(resolve => {
            gsap.to(card, {
                height: 150,
                duration: 0.1,
                onComplete: () => resolve(),
            });
        });
    }

    onComplete();
};
