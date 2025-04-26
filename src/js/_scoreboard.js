const highScoresKey = "highScores";

// LocalStorage
let highScores = JSON.parse(localStorage.getItem(highScoresKey)) || [];

function saveHighScores() {
  localStorage.setItem(highScoresKey, JSON.stringify(highScores));
}

export function renderHighScores() {
  const highScoresList = document.querySelector(".highScoresList");
  if (!highScoresList) return;

  highScoresList.innerHTML = "";

  function getRankSuffix(rank) {
    if (rank === 1) return "1st";
    if (rank === 2) return "2nd";
    if (rank === 3) return "3rd";
    return `${rank}th`;
  }

  // Get top 10
  highScores
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .forEach((entry, index) => {
      const tr = document.createElement("tr");

      const rankCell = document.createElement("td");
      rankCell.textContent = getRankSuffix(index + 1);

      const nameCell = document.createElement("td");
      nameCell.textContent = entry.name;

      const scoreCell = document.createElement("td");
      scoreCell.textContent = entry.score;

      tr.appendChild(rankCell);
      tr.appendChild(nameCell);
      tr.appendChild(scoreCell);

      highScoresList.appendChild(tr);
    });
}

export function getPlayerRank(score) {
  const allScores = [...highScores, { name: "temp", score }];
  allScores.sort((a, b) => b.score - a.score);
  const rank = allScores.findIndex((entry) => entry.score === score) + 1;
  return rank <= 10 ? rank : null;
}

// Add a new score
export function addHighScore(name, score) {
  const playerName = name.substring(0, 6).toUpperCase();

  const existingIndex = highScores.findIndex(
    (entry) => entry.name === playerName
  );

  if (existingIndex >= 0) {
    if (score > highScores[existingIndex].score) {
      highScores[existingIndex].score = score;
    }
  } else {
    highScores.push({ name: playerName, score });
  }

  saveHighScores();
  renderHighScores();
}