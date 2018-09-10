// Control variables
var eventUpcoming = true;
var eventName = "Fest der Nationen"

//Events
if (eventUpcoming) {
  $(".currentEvent").html(eventName);
  $(".currentEvent").css("display", "block");
}
else {
  $(".currentEvent").css("display", "none");
}

//Mobile
navOpen = false;
function RevealNav() {
  if (navOpen == true) {
    $("#mobileOptions").css("display", "none");
    navOpen = false;
  }
  else {
    $("#mobileOptions").css("display", "block");
    navOpen = true;
  }
}

//Clööb
//$(".toggle").hide();

//cafeteria
$("table#gerichte").hide();



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 