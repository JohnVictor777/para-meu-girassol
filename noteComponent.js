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
main: "Hoje completamos 4 meses! Parece que foi ontem que tudo começou, e cada dia ao seu lado é uma nova aventura. Seu sorriso ilumina minha vida, e seu amor me inspira a ser alguém melhor.",
secondary: null,
},
{
main: "Nesses 4 meses, construímos algo lindo. Seu abraço se tornou meu porto seguro, e cada momento com você me mostra que estamos no caminho certo. Obrigado por me fazer a pessoa mais feliz do mundo.",
secondary: null,
},
{
main: "Você é o meu equilíbrio, a minha paz e o meu maior sonho. Amar você é a melhor parte da minha vida, e esses 4 meses são apenas o começo de uma história que eu quero que dure para sempre.",
secondary: "Eu te escolho hoje, amanhã e sempre. Feliz 4 meses! ❤️🌹",
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
