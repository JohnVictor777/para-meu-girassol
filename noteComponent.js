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
    main: "Cada detalhe em você me encanta, do seu sorriso ao jeito como olha para o mundo. Estar ao seu lado me faz acreditar que o amor é a coisa mais verdadeira que existe.",
    secondary: null,
  },
  {
    main: "Com você, até os dias mais simples ganham cor e significado. Seu abraço é o meu refúgio, e seu amor é a minha força para seguir em frente.",
    secondary: null,
  },
  {
    main: "Você é o meu equilíbrio, minha paz e também o meu maior sonho. Amar você é o capítulo mais bonito da minha vida, e eu não quero que ele termine nunca.",
    secondary: "Eu te escolho hoje, amanhã e sempre. Obrigado por existir e me fazer tão feliz. ❤️🌹",
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
