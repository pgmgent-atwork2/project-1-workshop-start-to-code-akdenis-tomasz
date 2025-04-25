document.addEventListener("mousedown", (e) => {
  document.body.classList.add("hammer-active");
});

document.addEventListener("mouseup", () => {
  document.body.classList.remove("hammer-active");
});