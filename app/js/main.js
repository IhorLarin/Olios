
var hamburger = document.querySelector('.hamburger');
var navbar = document.querySelector('.navbar');

hamburger.onclick = function() {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
};