// noteComponent.js

/**
 * Função para criar um elemento de nota (componente).
 * @param {string} textContent - O texto principal da nota.
 * @param {string | null} secondaryTextContent - Opcional: um segundo parágrafo de texto para a nota.
 * @returns {HTMLElement} O elemento <div> completo da nota.
 */
function createNoteComponent(textContent, secondaryTextContent = null) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note", "js-note");

  const noteTextDiv = document.createElement("div");
  noteTextDiv.classList.add("note__text");

  const paragraph1 = document.createElement("p");
  paragraph1.textContent = textContent;
  noteTextDiv.appendChild(paragraph1);

  if (secondaryTextContent) {
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = secondaryTextContent;
    noteTextDiv.appendChild(paragraph2);
  }

  noteDiv.appendChild(noteTextDiv);

  return noteDiv;
}

// Array com os textos das suas notas
const notesData = [
  {
    main: "Feliz 3 meses, meu amor! Parece que foi ontem que tudo começou, e cada dia ao seu lado é uma nova descoberta. Você me faz sorrir, me acalma e torna minha vida muito mais feliz.",
    secondary: null,
  },
  {
    main: "Hoje celebramos 3 meses de uma história que eu quero que dure a vida inteira. Você é a pessoa que eu sempre sonhei em encontrar e a razão do meu sorriso mais sincero.",
    secondary: null,
  },
  {
    main: "A cada dia que passa, tenho mais certeza de que você é a mulher da minha vida. Feliz 3 meses para a pessoa mais incrível que eu já conheci. Estar com você é viver o amor de verdade.",
    secondary: "Você é meu presente e tudo o que eu preciso para ser feliz. Te amo cada dia mais!",
  },
];
// Onde as notas serão inseridas no HTML
document.addEventListener("DOMContentLoaded", () => {
  const loveNotesContainer = document.getElementById("bilhete");

  if (loveNotesContainer) {
    notesData.forEach((note) => {
      const newNote = createNoteComponent(note.main, note.secondary);
      loveNotesContainer.appendChild(newNote);
    });
  } else {
    console.error(
      'Elemento com ID "bilhete" não encontrado. As notas não puderam ser adicionadas.'
    );
  }
});
