const sounds = [
  new Audio("../src/assets/audio/cartoon-hammer.mp3"),
  new Audio("../src/assets/audio/squeak-toy.mp3"),
  new Audio("../src/assets/audio/pan.mp3")
];

document.addEventListener("mousedown", () => {
  document.documentElement.classList.add("hammer-active");
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const sound = sounds[randomIndex];

  sound.currentTime = 0;
  sound.play();
});

document.addEventListener("mouseup", () => {
  setTimeout(() => {
    document.documentElement.classList.remove("hammer-active");
  }, 100);
});
