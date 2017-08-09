'use strict';

setMobileContent();
openNavMenu();
hideMobileMenuAfterScroll();

function setMobileContent() {
  var mobileContent = document.getElementsByClassName('content')[0];
  var computerContent = document.getElementsByClassName('computer-version')[0];
  var content = computerContent.innerHTML;

  mobileContent.innerHTML = content;
}

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

function hideMobileMenuAfterScroll() {
  var lastScrollTop = 0;  

  window.onscroll = function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var mobileMenu = document.getElementsByClassName('mobile-version')[0];

    if (st > lastScrollTop) {
      mobileMenu.style.height = "0px";
      mobileMenu.style.borderColor = "transparent";
    } else {
      mobileMenu.style.height = "60px";
      mobileMenu.style.borderColor = "#373737";
    }

    lastScrollTop = st;
  };
}