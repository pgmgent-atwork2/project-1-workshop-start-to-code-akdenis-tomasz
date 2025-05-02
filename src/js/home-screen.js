const startGameButton = document.getElementById("startGameButton");
const tutorialButton = document.getElementById("tutorialButton");

if (startGameButton) {
  startGameButton.addEventListener("click", () => {
    window.location.href = "./public/game.html";
  });
}

if (tutorialButton) {
  tutorialButton.addEventListener("click", () => {
    window.location.href = "./public/tutorial.html";
  });
}
