function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function beaverSelection() {
  let beaverHTML = "";
  switch (getRandomNumber(1, 9)) {
    case 1:
      beaverHTML = "<button class='hole hole-a' id='hole1'></button>";
      break;
    case 2:
      beaverHTML = "<button class='hole hole-b' id='hole2'></button>";
      break;
    case 3:
      beaverHTML = "<button class='hole hole-c' id='hole3'></button>";
      break;
    case 4:
      beaverHTML = "<button class='hole hole-d' id='hole4'></button>";
      break;
    case 5:
      beaverHTML = "<button class='hole hole-e' id='hole5'></button>";
      break;
    case 6:
      beaverHTML = "<button class='hole hole-f' id='hole6'></button>";
      break;
    case 7:
      beaverHTML = "<button class='hole hole-g' id='hole7'></button>";
      break;
    case 8:
      beaverHTML = "<button class='hole hole-h' id='hole8'></button>";
      break;
    case 9:
      beaverHTML = "<button class='hole hole-i' id='hole9'></button>";
      break;
    default:
      beaverHTML = "";
  }
  return beaverHTML;
}

function repeatSwitch() {
  console.log(beaverSelection());
}

const myInterval = setInterval(repeatSwitch, 1000);

setTimeout(() => {
  clearInterval(myInterval);
}, 15000);
