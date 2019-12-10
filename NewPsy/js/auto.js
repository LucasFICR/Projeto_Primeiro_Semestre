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
//Slider
// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 600,
  transition: 500,
  interval: 10000
});

//AutoComplete

$(document).ready(function() {
  $("input.autocomplete").autocomplete({
    data: {
      "Ana Clara - Psicologa": null,
      "Carlos Santiago - Psicologo": null,
      "Daniel Marinho - Psicologo": null,
      "Nome_SobreN - Psicolog@": null
    }
  });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  ga("send", "event", "galeria", "next_prev", "Titulo da página");
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/***/
