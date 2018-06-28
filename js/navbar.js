// Control variables
var eventUpcoming = true;
var eventName = "Be the light"

//Events
if (eventUpcoming == true) {
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
$(".toggle").hide();