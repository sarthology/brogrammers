let start = document.getElementById("start");
let addGif = document.getElementById("exercise-gif");
let alert = document.getElementById("alert");

let audio = new Audio("../assets/alert.mp3");

let exercise = ["burpees", "crunches", "highknees", "jumping", "lunges"];

start.onclick = () => {
  setRandomChallenge();
};

let setRandomInterval = () => {
  let randomDelay = (Math.floor(Math.random() * 15) + 60 + 1) * 1000;

  setTimeout(() => {
    setRandomChallenge();
  }, randomDelay);
};

let setRandomChallenge = () => {
  if (document.visibilityState === "hidden") alert.play();
  let newGifUrl =
    "./img/" + exercise[Math.floor(Math.random() * exercise.length)] + ".gif";
  addGif.setAttribute("src", newGifUrl);
  setRandomInterval();
};

window.addEventListener("focus", () => {
  alert.pause();
});
