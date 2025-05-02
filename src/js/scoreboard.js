import { renderHighScores } from "./leaderboard.js";

renderHighScores();

// Buttons
const restartBtn = document.getElementById("restart-btn");
const exitBtn = document.getElementById("exit-btn");
const tutorialBtn = document.getElementById("tutorial-btn");

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    window.location.href = "game.html?countdown=true";
  });
}

if (exitBtn) {
  exitBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

if (tutorialBtn) {
  tutorialBtn.addEventListener("click", () => {
    window.location.href = "tutorial.html";
  });
}
