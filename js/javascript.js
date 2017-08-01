openNavMenu();

function openNavMenu() {
  var navMenuButton = document.getElementsByClassName('nav-button')[0];
  var content = document.getElementsByClassName('content')[0];
  var mobileMenu = document.getElementsByClassName('mobile-version')[0];

  navMenuButton.onclick = function() {
    var isContentHide = content.className.indexOf('hide');

    if (isContentHide != -1) {
      content.className = 'content' + ' show';
      mobileMenu.style.height = 'auto';
    }
    else if (isContentHide == -1) {
      content.className = 'content' + ' hide';
      mobileMenu.style.height = '60px'; // width of nav.mobile-version
    }
  };
}