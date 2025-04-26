// main.js or a separate _home-page.js
const homeScreen = document.querySelector(".home-screen");
const gameSection = document.querySelector("#game-link");
const tutorialSection = document.querySelector("#tutorial-link");
const startGameButton = document.getElementById("startGameButton");
const tutorialButton = document.getElementById("tutorialButton");

// if (startGameButton) {
//   startGameButton.addEventListener("click", () => {
//     homeScreen.style.display = "none";
//     gameSection.style.display = "block";
//   });
// }
if (tutorialButton) {
  tutorialButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    tutorialSection.innerHTML = "<h2>How to Play</h2><p>Whack the moles!</p>";
    tutorialSection.style.display = "block";
  });
}
