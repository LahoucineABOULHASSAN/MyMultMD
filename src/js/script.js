// get the DOM items
const playBtn = document.querySelector(".huge");
const topNav = document.querySelector(".topnav");
const responsiveBtn = document.querySelector(".responsive-btn");
// Event Listeners
playBtn.addEventListener("click", togglePlayPause);
// menun bar code responsiveness
function togglePlayPause() {
  playBtn.classList.toggle("play");
  playBtn.classList.toggle("pause");
}
function displayMenu() {
  topNav.classList.toggle("responsive");
  responsiveBtn.classList.toggle("times");
  responsiveBtn.classList.toggle("bars");
}
