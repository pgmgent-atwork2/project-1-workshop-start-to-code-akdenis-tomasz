import "./cursor.js";
import { addHighScore, getPlayerRank } from "./leaderboard.js";

// --- GAME VARIABLES ---
let score = 0;
let timeLeft = 18; // Total game time in seconds

const $timeDisplay = document.getElementById("time-remaining");
const $scoreDisplay = document.querySelector(".score");

// --- SCORE & BEAVER ---
function updateScore() {
  $scoreDisplay.innerHTML = `Score: ${score}`;
}

function addBeaverClickListener() {
  const $beaver = document.querySelector(".beaver");
  if ($beaver) {
    $beaver.addEventListener("click", () => {
      $beaver.classList.add("clicked");
      score++;
      updateScore();
    });
  }
}

function beaverSelection() {
  let beaverHTML = "";
  switch (getRandomNumber(1, 10)) {
    case 1:
      beaverHTML = "<button class='beaver hole-a'></button>";
      break;
    case 2:
      beaverHTML = "<button class='beaver hole-b'></button>";
      break;
    case 3:
      beaverHTML = "<button class='beaver hole-c'></button>";
      break;
    case 4:
      beaverHTML = "<button class='beaver hole-d'></button>";
      break;
    case 5:
      beaverHTML = "<button class='beaver hole-e'></button>";
      break;
    case 6:
      beaverHTML = "<button class='beaver hole-f'></button>";
      break;
    case 7:
      beaverHTML = "<button class='beaver hole-g'></button>";
      break;
    case 8:
      beaverHTML = "<button class='beaver hole-h'></button>";
      break;
    case 9:
      beaverHTML = "<button class='beaver hole-i'></button>";
      break;
    default:
      beaverHTML = "";
  }
  return beaverHTML;
}

function refreshHtml() {
  const $gameContainer = document.querySelector(".fullwidth");
  $gameContainer.innerHTML = beaverSelection();
  addBeaverClickListener();
}

// --- GAME START ---
const urlParams = new URLSearchParams(window.location.search);
const countdownNeeded = urlParams.get("countdown") === "true";

if (countdownNeeded) {
  startCountdown(startGame);
} else {
  startGame();
}

function startCountdown(callback) {
  const $gameContainer = document.querySelector(".fullwidth");
  let countdown = 3;
  const countdownDisplay = document.createElement("div");
  countdownDisplay.classList.add("countdown");
  $gameContainer.appendChild(countdownDisplay);

  const countdownInterval = setInterval(() => {
    if (countdown > 0) {
      countdownDisplay.textContent = countdown;
      countdown--;
    } else {
      countdownDisplay.textContent = "GO!";
      clearInterval(countdownInterval);
      setTimeout(() => {
        countdownDisplay.remove();
        callback();
      }, 1000);
    }
  }, 1000);
}

// --- GAME LOOP ---
function startGame() {
  updateScore();
  if ($timeDisplay) $timeDisplay.textContent = timeLeft;

  const gameInterval = setInterval(refreshHtml, 1000);
  const timerInterval = setInterval(() => {
    timeLeft--;
    if ($timeDisplay) {
      $timeDisplay.textContent = timeLeft;
    }
    if (timeLeft <= 0) {
      endGame(gameInterval, timerInterval);
    }
  }, 1000);
}

function endGame(gameInterval, timerInterval) {
  clearInterval(gameInterval);
  clearInterval(timerInterval);

  const modal = document.getElementById("score-modal");
  const finalScore = document.getElementById("final-score");
  const saveButton = document.getElementById("save-score");

  finalScore.textContent = score;
  modal.style.display = "flex";

  const newSaveButton = saveButton.cloneNode(true);
  saveButton.parentNode.replaceChild(newSaveButton, saveButton);

  newSaveButton.addEventListener("click", () => {
    const playerNameInput = document.getElementById("player-name");
    let playerName = playerNameInput.value.trim().substring(0, 6);
    if (playerName) {
      const rank = getPlayerRank(score);
      if (rank) {
        alert(`Congrats! You’re ranked ${rank} out of 10!`);
      }
      addHighScore(playerName, score);
      window.location.href = "scoreboard.html";
    }
  });
}

// --- UTILS ---
function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
