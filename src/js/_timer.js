let sec = 60;
export function timer() {
  document.querySelector(".time").innerHTML = "Time: " + sec;
  const timer = setInterval(function () {
    document.querySelector(".time").innerHTML = "Time: " + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      document.querySelector(".time").innerHTML = "Time: 0";
      //   Hier moet nog logica komen voor het scorebord te openen
    }
  }, 1000);
}
