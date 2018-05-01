// Control variables
var eventUpcoming = true;
var eventName = "Muttertag"

if (eventUpcoming == true) {
  $(".currentEvent").html(eventName);
  $(".currentEvent").css("display", "block");
}
else {
  $(".currentEvent").css("display", "none");
}
