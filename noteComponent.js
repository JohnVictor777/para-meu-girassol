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
    main: "A cada dia que passa, meu amor por você só cresce. É incrível como sua presença transforma tudo em algo mais bonito e significativo. Você é a minha paz, a minha alegria e a razão do meu sorriso.",
    secondary: null,
  },
  {
    main: "Olho para nós e sei que encontrei o meu lar em você. Sua risada, seu olhar e a forma como me abraça são o meu refúgio e o que me faz sentir completo. O meu coração é seu, hoje e sempre.",
    secondary: null,
  },
  {
    main: "Você é a melodia que faltava na minha vida, a poesia que me inspira e a mulher que eu sempre sonhei em ter ao meu lado. Não importa o tempo, o meu amor por você é eterno e incondicional.",
    secondary: "Prometo cuidar do seu coração e fazê-la feliz em todos os dias que tivermos juntos. Te amo mais do que palavras podem expressar. ❤❤❤🌻",
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
