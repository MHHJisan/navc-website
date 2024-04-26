// JavaScript code here

// Get the navbar element
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Function to add the 'navbar-scrolled' class to the navbar when scrolled
// function scrollFunction() {
//     var scrollPosition = window.scrollY; 

//     if (scrollPosition >= sticky) {
//         navbar.classList.add("navbar-scrolled");
//     } else {
//         navbar.classList.remove("navbar-scrolled");
//     }
// }

var prevScrollPos = window.scrollY;

function scrollFunction() {
    var currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        navbar.classList.add("navbar-scrolled");
    } else {
        // Scrolling up
        navbar.classList.remove("navbar-scrolled");
    }

    prevScrollPos = currentScrollPos;
}

// Event listener for scrolling
window.onscroll = function() { scrollFunction() };
