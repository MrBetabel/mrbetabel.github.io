// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "They call me new thang", time: 24 },
  { text: "신병 왔다 짐을 받어", time: 27 },
  { text: "Whole world, concert", time: 28 },
  { text: "꽤 먹히는 Asiana Asia", time: 29 },
  { text: "You could be my new thang", time: 30 },
  { text: "근무태만 형들 과는 달러", time: 32 },
  { text: "유명인의 하극상 damn", time: 34 },
  { text: "쎈 놈만 덤벼", time: 35 },
  { text: "어떤 이는 내가 이 자릴 쉽게 앉았다고 해", time: 38 },
  { text: "Fuck you 난 성공과", time: 41 },
  { text: "거리가 먼 형들 사이 눈엣가시네", time: 43 },
  { text: "솔직히 싸이하누월 쪽팔려", time: 45 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);