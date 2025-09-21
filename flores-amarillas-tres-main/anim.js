var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Tú y yo no tenemos nada en común", time: 0 },        // 0.01 → 0
  { text: "Tan solo las palabras", time: 5.07 },                // 5.07 → 3.07
  { text: "Tú dices que yo no pienso igual que tú", time: 9.92 },
  { text: "Y yo digo lo mismo de ti", time: 16.92 },
  { text: "Es una coincidencia", time: 22.64 },
  { text: "Que me hace muy feliz", time: 28.66 },
  { text: "", time: 31.27 },

  { text: "Qué aburrido es el mundo tan igual", time: 42.07 },
  { text: "De las almas gemelas", time: 48.79 },
  { text: "Yo pienso que es mucho mejor", time: 53.18 },
  { text: "Complementarse como lo hacemos nosotros", time: 57.62 },
  { text: "Y así es parte de un balance", time: 64.43 },
  { text: "Tenerte cerca a mí", time: 72.39 },
  { text: "Hay un mundo que es", time: 80.18 },
  { text: "Perfecto para los dos", time: 84.10 },
  { text: "Hay una canción", time: 91.60 },
  { text: "Perfecta para los dos", time: 95.86 },
  { text: "No puedo soportar al estúpido de Cupido", time: 104.63 },
  { text: "Que dice que tú y yo somos una rareza", time: 111.06 },
  { text: "Voy a disfrutar verlo en la mañana cuando tú", time: 116.72 },
  { text: "Le des un golpe mientras cortas fresas", time: 123.55 },
  { text: "", time: 127.71 },

  { text: "Tú y yo no tenemos nada en común", time: 138.65 },
  { text: "Tan solo las palabras", time: 145.78 },
  { text: "Hay un mundo que es", time: 150.37 },
  { text: "Perfecto para los dos", time: 154.56 },
  { text: "Hay una canción", time: 161.97 },
  { text: "Perfecta para los dos", time: 166.16 },
  { text: "No puedo soportar al estúpido de Cupido", time: 174.92 },
  { text: "Que dice que tú y yo somos una rareza", time: 181.31 },
  { text: "Voy a disfrutar verlo en la mañana cuando tú", time: 186.95 },
  { text: "Le des un golpe mientras cortas fresas", time: 193.94 },
  { text: "Mientras cortas fresas", time: 201.38 },
  { text: "Mientras cortas", time: 206.95 },
  { text: "Mientras tú", time: 213.39 },
  { text: "", time: 219.53 }
];


function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (!titulo) return;
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

// Opcional: oculta el título ~5 s después de la última línea (221.53 s)
setTimeout(ocultarTitulo, 226500); // 221.53s + ~5s ≈ 226.5s