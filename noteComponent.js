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
    main: "Meu mundo gira em torno da sua existência. Seus olhos são meu norte, sua voz é minha canção favorita e seu amor é o alicerce que sustenta tudo o que sou. Você é, e sempre será, o meu universo particular.",
    secondary: null,
  },
  {
    main: "Não há palavras que captem a dimensão do que você representa para mim. Você é a resposta para perguntas que eu nem sabia que tinha, o brilho que afasta qualquer escuridão e a pessoa que me faz acreditar em um futuro sem fim ao seu lado.",
    secondary: null,
  },
  {
    main: "Se me perguntassem o que é o amor, eu diria seu nome. Se me pedissem para descrever a felicidade, eu falaria sobre cada momento ao seu lado. ",
    secondary:
      "Você é a definição de tudo o que eu busco e a única razão para eu querer ser melhor a cada dia!",
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
