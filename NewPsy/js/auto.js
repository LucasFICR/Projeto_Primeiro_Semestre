M.AutoInit();
//DROPDOWN
$(".dropdown-trigger").dropdown();
//SIDENAV
$(document).ready(function() {
  $(".sidenav").sidenav();
});
// SIDEBAR
$(document).ready(function() {
  $(".collapsible").collapsible();
});
//MenuScroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroll-nav").style.top = "0px";
  } else {
    document.getElementById("scroll-nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};
