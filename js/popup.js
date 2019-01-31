/* Pop-up to ask for cookie permission */
function openPopup() {
  var popup = document.createElement("div");
  document.body.appendChild(popup);
  popup.setAttribute("id", "popup");
  popup.setAttribute("style", "position:fixed;left:0;right:0;width:99.78%;border:solid 0.1em #F7F7F7;background-color: #2E2E2E;margin:0 auto;text-align:center;");

  var xContainer = document.createElement("div");
  popup.appendChild(xContainer);
  xContainer.setAttribute("style", "float:right;");

  var xImage = document.createElement("img");
  xContainer.appendChild(xImage);
  xImage.setAttribute("onclick", "$('#popup').hide();");
  xImage.setAttribute("src", "img/home/x.png");
  xImage.setAttribute("width", "10");

  popup = $('div#popup');

  var title = $('<h2>Hinweis:</h2>');
  title.attr("class", "color_cloud");
  title.attr("style", "margin-bottom: 0px; padding-bottom: 0px");
  popup.append(title);

  const legalText = "Bei der weiteren Nutzung dieser Seite stimmen Sie zu, dass Daten über ihren Zugriff auf dem Server gespeichert werden. Weiterhin stimmen Sie die Nutzung von Cookies zu. Diese dienen dazu eine bessere Benutzererfahrung zu schaffen. Möchten Sie fortfahren?";
  var legalTextP = $("<p>" + legalText + "</p>");
  legalTextP.attr('class', 'color_cloud');
  legalTextP.attr('style', 'padding: 6px; font-size: 15px; padding-top: 0; margin-top: 0; margin-bottom: 0;');
  popup.append(legalTextP);

  var OKbutton = $('<button>Ja</button>')
  OKbutton.attr('style', 'margin-top: 0; background-color: #132d52; border-style: solid; border-width: 1px; border-radius: 5px;');
  OKbutton.attr('class', 'color_cloud');
  OKbutton.click(function() {
    popup.hide();
    setCookie('visit', 'visited', 90);
  });
  popup.append(OKbutton);
}

//Load Pop-up
if (document.cookie = "") {
 openPopup();
}
else {
  //show no pop-up
}

openPopup();
