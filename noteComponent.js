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
    main: "A sua força me inspira, sua bondade me acalma e sua presença ilumina a minha vida. Você é a minha maior aventura e o lugar onde eu sempre quero estar. Com você, cada momento se torna uma memória preciosa.",
    secondary: null,
  },
  {
    main: "Não há distância ou tempo que possa diminuir o que sinto por você. Meus pensamentos estão sempre em você, e o meu desejo é que o nosso amor continue a florescer, forte e resiliente, para sempre.",
    secondary: null,
  },
  {
    main: "Você não é só a pessoa que eu amo, você é a minha parceira, a minha melhor amiga e a razão pela qual eu acredito no amor. Com você, eu me sinto livre para ser quem eu sou, sem medo.",
    secondary: "Obrigado por ser a melhor parte do meu dia, todos os dias. Você é o meu maior presente. ✨💞",
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
