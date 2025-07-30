// service-card.js

// Verifica se o dispositivo é mobile ou tablet
const mobileMediaQuery = window.matchMedia("(max-width: 400px)");
const tabletMediaQuery = window.matchMedia(
  "(min-width: 400px) and (max-width: 600px)"
);

// --- ATENÇÃO: A variável 'notes' agora será definida APÓS as notas serem criadas ---
let notes; // Declare 'notes' aqui, mas não a inicialize ainda

// Função que reseta o tamanho das notas
function resizeNotes() {
  // Verifique se 'notes' já foi populada
  if (!notes) {
    notes = document.querySelectorAll(".js-note"); // Popula 'notes' na primeira vez que for chamada
  }

  notes.forEach((note) => {
    if (note.classList.contains("active")) {
      note.classList.remove("active");
      gsap.set(note, {
        height: "30%",
        clearProps: "all",
      });
    }
  });
}

// Música de fundo
const musicTracks = [
  "assets/musica/Fly Me To The Moon - Lofi.mp3",
  "assets/musica/Lo-fi Type Beat - Lonely Nights.mp3",
];

const audio = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");

// Seleciona uma música aleatória
const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];
audio.querySelector("source").src = randomTrack;
audio.load();

let isPlaying = false;

// Reproduz ou pausa a música ao clicar no botão
musicButton.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    musicButton.textContent = "🎵 Play Música";
  } else {
    audio.play();
    musicButton.textContent = "⏸️ Pause Música";
  }
  isPlaying = !isPlaying;
});

// Define um background aleatório
const backgrounds = ["assets/images/imagem-1-o-dia-que-eu-passei.png"];
const randomBackground =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];
document.body.style.backgroundImage = `url('${randomBackground}')`;

// Função principal para ativar as notas
function notesReady() {
  // Agora inicialize 'notes' aqui, pois as notas já devem ter sido adicionadas pelo 'noteComponent.js'
  notes = document.querySelectorAll(".js-note");

  gsap.to(".js-envelop-content", {
    height: "100%",
    duration: 0.5,
  });

  notes.forEach((note, index) => {
    note.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // Reseta todas as notas antes de aplicar nova animação
      resizeNotes(); // Agora resizeNotes já tem acesso a 'notes' populada

      if (!isActive) {
        this.classList.add("active");

        // Define altura conforme tipo de tela
        let newHeight = "100%";
        if (mobileMediaQuery.matches) {
          newHeight = `${80 + 40 * index}%`;
        } else if (tabletMediaQuery.matches) {
          newHeight = `${80 + 21 * index}%`;
        } else {
          newHeight = `${70 + 20 * index}%`;
        }

        gsap.set(this, { height: newHeight });
      }
    });
  });
}

// Função que configura o "papel" do envelope
function setUpPaper() {
  const clipArr = [0, 0, 100, 0, 50, 61];
  gsap.set(".js-up-paper", {
    bottom: "97%",
    rotation: 180,
    zIndex: 200,
    clipPath: `polygon(${clipArr[0]}% ${clipArr[1]}%, ${clipArr[2]}% ${clipArr[3]}%, ${clipArr[4]}% ${clipArr[5]}%)`,
    onComplete: notesReady, // 'notesReady' será chamada quando esta animação terminar
  });
}

// Função que inicia a transição do envelope
function envelopeTransition() {
  gsap.to(".js-up-paper", {
    bottom: "1%",
    duration: 0.25,
    onComplete: setUpPaper,
  });
  const upPaper = document.querySelector(".js-up-paper");
  upPaper.removeEventListener("click", envelopeTransition);
  upPaper.classList.remove("cursor");
}

// Função que "corta o selo" do envelope
function cutSticker() {
  gsap.set(".js-sticker", { width: "20%", left: "-80%" });
  document.body.classList.remove("scissors");

  const stickerEl = document.querySelector(".js-sticker");
  const upPaper = document.querySelector(".js-up-paper");

  stickerEl.removeEventListener("click", cutSticker);
  upPaper.addEventListener("click", envelopeTransition);
  upPaper.classList.add("cursor");
}

// Evento ao clicar no selo
document.querySelector(".js-sticker").addEventListener("click", cutSticker);

// Redimensiona as notas ao mudar o tamanho da janela
// O listener é adicionado globalmente e 'resizeNotes' será capaz de acessar 'notes'
window.onresize = resizeNotes;

// Botões de download e compartilhamento
const shareButton = document.getElementById("share-button");
// const envelopeElement = document.querySelector(".envelop"); // Essa variável não está sendo usada

// Compartilha a imagem
shareButton.addEventListener("click", async () => {
  const textoBilhete = document.getElementById("bilhete").innerText;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Minha Carta de Amor 💌",
        text: textoBilhete,
      });
    } catch (err) {
      alert("Erro ao compartilhar: " + err);
    }
  } else {
    alert(
      "O compartilhamento não é suportado neste dispositivo. Copie o texto manualmente: \n\n" +
        textoBilhete
    );
  }
});
