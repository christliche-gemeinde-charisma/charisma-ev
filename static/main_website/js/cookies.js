/* Functions for working with cookies */

// cookieName = Name of cookie; cookieValue = Value to be stored; daysToExpire = Number of days until the cookie expires
function setCookie(cookieName , cookieValue, daysToExpire) {
  var d = new Date(); //Create Date() instance
  d.setTime(d.getTime() + (daysToExpire*24*60*60*1000)); //set the time of Date object to date for expiration
  var expires = "expires="+ d.toUTCString(); //set expiration parameter
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/"; //set cookie with passed name, value and expiration
  console.log("Cookie set!")
}

// Get value from cookie
function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function resetVisit() {
    document.cookie = 'visit =; Max-Age=-99999999;';
    console.log('Reset visit');
}
