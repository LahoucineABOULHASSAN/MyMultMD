// get the DOM items
const topNav = document.querySelector(".topnav");
const responsiveBtn = document.querySelector(".responsive-btn");
// menun bar code responsiveness
function displayMenu() {
  topNav.classList.toggle("responsive");
  responsiveBtn.classList.toggle("times");
  responsiveBtn.classList.toggle("bars");
}
