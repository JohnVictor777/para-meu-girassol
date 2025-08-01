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
    main: "Feliz Dia da Namorada, meu amor! Ter você ao meu lado é o melhor presente que a vida me deu. Seu olhar me inspira, sua voz me acalma e seu amor me transforma todos os dias.",
    secondary: null,
  },
  {
    main: "Hoje é o seu dia, e eu só consigo agradecer por cada momento ao seu lado. Você é o amor que eu sempre sonhei, a parceira que me completa e a razão do meu sorriso mais sincero.",
    secondary: null,
  },
  {
    main: "Feliz Dia da Namorada para a mulher mais incrível que eu conheço. Estar com você é viver o amor de verdade, é encontrar paz no caos, é ter certeza de que o futuro será lindo porque é com você.",
    secondary:
      "Você é meu presente, meu futuro e tudo o que eu preciso para ser feliz. Te amo cada dia mais!",
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
