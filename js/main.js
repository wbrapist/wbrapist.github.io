var content = document.getElementsByClassName('content')[0];
var compContent = getComputedStyle(content);
var compContentHeight = parseFloat(compContent.height);

var nav = document.getElementsByTagName('nav')[0];
var compNav = getComputedStyle(nav);
var compNavHeight = parseFloat(compNav.height);

var maxHeight = '600px';

nav.onmouseover = function() {
  if ( compContentHeight >= (600 - compNavHeight) ) {
    this.style.height = maxHeight;
    content.style.height = maxHeight;
  }
  else
    this.style.height = compContentHeight + compNavHeight + 'px';
}
nav.onmouseout = function() {
  this.style.height = compNavHeight + 'px';
}