// Sample local scores (replace this with actual fetch from DB later)
const scoreDisplay = document.getElementsByClassName("score");

let score = 0;

export function handleBeaverClick() {
  if (!gameOver) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }
  this.classList.remove("beaver");
}

let highScores = [
  { name: "Tom", score: 20 },
  { name: "Ann", score: 18 },
  { name: "Bob", score: 15 },
];

// Function to render scores
export function renderHighScores() {
  const highScoresList = document.getElementsByClassName("highScoresList");

  highScoresList.innerHTML = "";
  highScores
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .forEach((score) => {
      const li = document.createElement("li");
      li.textContent = `${score.name.padEnd(6, " ")} - ${score.score}`;
      highScoresList.appendChild(li);
    });
}

renderHighScores();
