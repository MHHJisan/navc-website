// JavaScript code here

// Get the navbar element
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.scrollY > sticky) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
}

// Event listener for scrolling
window.onscroll = function () {
  scrollFunction();
};
