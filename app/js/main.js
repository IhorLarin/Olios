var hamburger = document.querySelector('.hamburger');
var navbar = document.querySelector('.navbar');
var menuLink = document.querySelectorAll('.navbar .menu-list__link');
var searchIcon = document.querySelector('.src-icn');
var searchSection = document.querySelector('.search-section');
var searchClose = document.querySelector('.search-form .close');
var searchInput = document.querySelector('.search-input');
var labelSRC = document.querySelector('.search-form label.src');

function menuToggle() {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
}

function menuRemove() {
  hamburger.classList.remove('active');
  navbar.classList.remove('active');
}

function searchSectionAdd() {
  if (searchSection.style.display === 'none') {
    searchSection.style.display = 'flex';
  }
  setTimeout(function () {
    searchSection.classList.add('active');
    searchIcon.classList.add('active');
  }, 50);
}

function searchSectionRemove() {
  searchSection.classList.remove('active');
  searchIcon.classList.remove('active');
  setTimeout(function () {
    searchSection.style.display = 'none';
  }, 500);
  searchInput.value = '';
  labelSRC.classList.remove('focus');
};

searchIcon.onclick = function () {
  searchSectionAdd();
  menuRemove();
};

searchClose.onclick = function () {
  searchSectionRemove();
};

hamburger.onclick = function () {
  menuToggle();
  searchSectionRemove();
};

searchInput.onfocus = function () {
  labelSRC.classList.add('focus');
};

searchInput.onblur = function () {
  if (searchInput.value === '') {
    labelSRC.classList.remove('focus');
  }
};



// якась хуйня
for (var i = 0; menuLink.length; i++) {
  menuLink[i].onclick = function () {
    menuToggle();
  };
}





