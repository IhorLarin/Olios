window.onload = function () {


  var hamburger = document.querySelector('.hamburger');
  var navbar = document.querySelector('.navbar');
  var menuLink = document.querySelectorAll('.navbar .menu-list__link');

  function menuToggle() {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
  }

  hamburger.onclick = menuToggle;
  for (var i = 0; menuLink.length; i++) {
    menuLink[i].onclick = function () {
      menuToggle();
    };
  }

};



