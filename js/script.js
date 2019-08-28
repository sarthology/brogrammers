// let start = document.getElementById("start");
// let addGif = document.getElementById("exercise-gif");
// let alert = document.getElementById("alert");
let view = document.getElementById("view");
let timeClock = document.getElementById("timeClock");
let exercise = document.getElementById("exercise");
let search = document.getElementById("search");

let timer = new easytimer.Timer();

// const template = Handlebars.compile(landing, { strict: true });
// const result = template();
// view.innerHTML = result;

timer.start({ countdown: true, startValues: { seconds: 10 } });

timeClock.innerHTML = timer.getTimeValues().toString();

timer.addEventListener("secondsUpdated", function(e) {
  timeClock.innerHTML = timer.getTimeValues().toString();
});

timer.addEventListener("targetAchieved", function(e) {
  search.style = "display:none";
  exercise.style = "display:grid";
});
// let audio = new Audio("../assets/alert.mp3");

// let exercise = ["burpees", "crunches", "highknees", "jumping", "lunges"];

// start.onclick = () => {
//   setRandomChallenge();
// };

// let setRandomInterval = () => {
//   let randomDelay = (Math.floor(Math.random() * 15) + 60 + 1) * 1000;

//   setTimeout(() => {
//     setRandomChallenge();
//   }, randomDelay);
// };

// let setRandomChallenge = () => {
//   if (document.visibilityState === "hidden") alert.play();
//   let newGifUrl =
//     "./img/" + exercise[Math.floor(Math.random() * exercise.length)] + ".gif";
//   addGif.setAttribute("src", newGifUrl);
//   setRandomInterval();
// };

// window.addEventListener("focus", () => {
//   alert.pause();
// });
