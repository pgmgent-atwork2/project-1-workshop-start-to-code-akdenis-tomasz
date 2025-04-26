document.addEventListener("mousedown", () => {
  document.documentElement.classList.add("hammer-active");
});

document.addEventListener("mouseup", () => {
  setTimeout(() => {
    document.documentElement.classList.remove("hammer-active");
  }, 100);
});