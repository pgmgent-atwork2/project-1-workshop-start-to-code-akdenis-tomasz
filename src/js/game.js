export function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function beaverSelection() {
  let beaverHTML = "";
  switch (getRandomNumber(1, 9)) {
    case 1:
      beaverHTML = "<button class='beaver hole-a' id='hole1'></button>";
      break;
    case 2:
      beaverHTML = "<button class='beaver hole-b' id='hole2'></button>";
      break;
    case 3:
      beaverHTML = "<button class='beaver hole-c' id='hole3'></button>";
      break;
    case 4:
      beaverHTML = "<button class='beaver hole-d' id='hole4'></button>";
      break;
    case 5:
      beaverHTML = "<button class='beaver hole-e' id='hole5'></button>";
      break;
    case 6:
      beaverHTML = "<button class='beaver hole-f' id='hole6'></button>";
      break;
    case 7:
      beaverHTML = "<button class='beaver hole-g' id='hole7'></button>";
      break;
    case 8:
      beaverHTML = "<button class='beaver hole-h' id='hole8'></button>";
      break;
    case 9:
      beaverHTML = "<button class='beaver hole-i' id='hole9'></button>";
      break;
    default:
      beaverHTML = "";
  }
  return beaverHTML;
}

export function refreshHtml() {
  const $gameContainer = document.querySelector(".fullwidth");
  $gameContainer.innerHTML = beaverSelection();

  addEventListener();
}

const myInterval = setInterval(refreshHtml, 1000);

setTimeout(() => {
  clearInterval(myInterval);
}, 18000);

function addEventListener() {
  const $beaver = document.querySelector(".beaver");

  $beaver.addEventListener("click", function (event) {
    $beaver.classList.add("clicked");
  });
}
