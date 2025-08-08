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
    main: "Meu amor, sei que ultimamente temos nos desentendido, mas quero que você saiba que nada disso diminui o que sinto por você. Cada dia ao seu lado é uma nova descoberta, e você continua sendo quem me faz sorrir, me acalma e enche minha vida de alegria.",
    secondary: null,
  },
  {
    main: "Mesmo com nossos altos e baixos, você é a pessoa que sempre sonhei em encontrar e a razão do meu sorriso mais sincero. Meu amor por você é maior que qualquer diferença entre nós.",
    secondary: null,
  },
  {
    main: "Até nos momentos mais difíceis, tenho certeza de que você é a mulher da minha vida. Estar com você é viver o amor verdadeiro.",
    secondary: "Você é meu presente, minha paz e tudo o que preciso para ser feliz. Te amo com toda a minha alma, e nada pode mudar isso!",
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
