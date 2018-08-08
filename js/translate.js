// Variables for txt
const english_h2 = "Up to 20 different nations visit our Service on a regular basis.";
const english = "Because of this we offer simultaneous translation throughout the whole Sermon. <br> With headphones our guests are able to participate in their own Language. <br> Currently we offer translations in <strong>Spanish</strong>, <strong>Portugese</strong>, <strong>English</strong>, and <strong>French</strong>.";

const spanish_h2 = "Hasta 20 diferentes Naciones visitan regularmente nuestro culto.";
const spanish = "Por esa razón ofrecemos una traducción simultánea durante todo el evento. Por medio de Auriculares pueden nuestros invitados participar. Momentáneamente les ofrecemos una traducción en <strong>español</strong> , <strong>portugués</strong>, <strong>inglés</strong>  y <strong>francés </strong> <br> </p>";

const portugese_h2 = "Até 20 diferentes nações visitam nosso culto regularmente.";
const portugese = "É por isso que oferecemos tradução simultânea durante todo o evento. Com fones de ouvido, nossos visitantes podem participar em seu próprio idioma. Atualmente oferecemos tradução em espanhol, português, inglês e francês.";

const german_h2 = "Bis zu 20 verschiedene Nationen besuchen regelmäßig unseren Gottesdienst.";
const german = "Deshalb bieten wir simultane Übersetzung während der gesamten Veranstaltung an. <br> Mit Kopfhörern können unsere Besucher in ihrer Sprache teilnehmen.<br> Momentan bieten wir <strong>Spanisch</strong>, <strong>Portugiesisch</strong>, <strong>Englisch</strong> und <strong>Französisch</strong> Übersetzung an.";

const french_h2 = "Des quatre coins du monde, des personnes viennent régulièrement assister a notre culte.";
const french = "C'est pour cela que nous avons mus à votre disposition une traduction pour que vous puissiez suivre le culte a l'aide de casque. A l'heure actuel on propose comme traduction du <strong>espagnol</strong>, <strong>portugais</strong>, <strong>anglais</strong> et <strong>français</strong>.";

//Event Handlers
$("#translate_es").click(function () {
  $(".main_headline").html("Traducción");
  $("#translate_h2").html(spanish_h2);
  $("#translate_p").html(spanish);
})
$("#translate_pt").click(function () {
  $(".main_headline").html("Tradução");
  $("#translate_h2").html(portugese_h2);
  $("#translate_p").html(portugese);
})
$("#translate_eng").click(function () {
  $(".main_headline").html("Translation");
  $("#translate_h2").html(english_h2);
  $("#translate_p").html(english);
})
$("#translate_fr").click(function () {
  $(".main_headline").html("Traduction");
  $("#translate_h2").html(french_h2);
  $("#translate_p").html(french);
})
$("#translate_de").click(function () {
  $("#translate_h2").html(german_h2);
  $("#translate_p").html(german);
})
