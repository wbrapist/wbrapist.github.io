'use strict';

openNavMenu();

function openNavMenu() {
  var navMenuButton = document.getElementsByClassName('nav-button')[0];
  var content = document.getElementsByClassName('content')[0];
  var mobileMenu = document.getElementsByClassName('mobile-version')[0];
  var mobileMenuHeight = getComputedStyle(mobileMenu).height;

  navMenuButton.onclick = function() {
    var isContentHidden = content.className.indexOf('hide');

    if (isContentHidden != -1) {
      content.className = 'content' + ' show';
      mobileMenu.style.height = 'auto';
    }
    else if (isContentHidden == -1) {
      content.className = 'content' + ' hide';
      mobileMenu.style.height = mobileMenuHeight;
    }
  };
}