const songsArray = [
  "Egiye-De.mp3",
  "Maahi-Ve(Highway).mp3",
  "Mukhtasar-Teri-Meri-Kahaani.mp3",
  "Rap-God.mp3",
  "Saajna.mp3",
  "Samjhawan(Unplugged).mp3",
  "Sheetolo-Batashe-Dekhechi.mp3",
];
const player = document.getElementById("player");
// songsArray.forEach((song) => {
//   const songList = `<li>${song}</li>`;
//   allSongs.insertAdjacentHTML("beforeend", songList);
// });

(function () {
  // display all songs**********************************
  const allSongs = document.getElementById("allSongs");
  songsArray.forEach((song) => {
    const songList = `<li>${song}</li>`;
    allSongs.insertAdjacentHTML("beforeend", songList);
  });

  // add current song when clicked**************************
  const songItem = document.querySelectorAll("#allSongs li");
  songItem.forEach((song) => {
    song.addEventListener("click", (e) => {
      const currentSongName = document.querySelector(".currentSong p");
      const currentSongSource = document.getElementById("source");
      currentSongSource.src = `./songs/${e.target.innerHTML}`;
      currentSongName.innerHTML = e.target.innerHTML;

      player.load();
      player.play();
    });
  });

  // end
})();

// play button
function playAudio() {
  if (player.readyState) {
    player.play();
  }
}

// pause Button
function pauseAudio() {
  player.pause();
}

// volume slider
const volumeSlider = document.querySelector("#volumeSlider");
volumeSlider.addEventListener("input", (e) => {
  const playerVolume = e.target.value;
  player.volume = playerVolume;
});

// progress bar
function updateProgress() {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById("progressBar");
    progressBar.value = (player.currentTime / player.duration) * 100;

    console.log(progressBar.value);
  }
}
