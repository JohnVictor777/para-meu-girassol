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
main: "Sinto que a nossa história está apenas começando, mas cada dia com você já é um capítulo inesquecível. Seu amor me dá força e me mostra que a felicidade mora nas coisas mais simples, como no seu abraço ou no som da sua risada.",
secondary: null,
},
{
main: "Meu amor por você é a única certeza que eu tenho. Ele me guia, me acalma e me faz querer ser melhor a cada manhã. Não existe lugar no mundo que eu prefira estar do que ao seu lado.",
secondary: null,
},
{
main: "Você chegou e bagunçou tudo, mas de uma forma que colocou cada pedacinho da minha vida no lugar. Meu coração te escolheu e hoje, mais do que nunca, eu sei que não poderia ter feito escolha melhor. ❤️❤️",
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
