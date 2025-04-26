const startGameButton = document.getElementById("startGameButton");
const tutorialButton = document.getElementById("tutorialButton");

startGameButton.addEventListener("click", () => {
  window.location.href = "game.html";
});

tutorialButton.addEventListener("click", () => {
  window.location.href = "tutorial.html";
});
