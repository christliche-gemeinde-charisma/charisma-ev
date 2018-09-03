var links = [
  'http://charisma-ev.de/img/events/festDerNationenFront.jpg',
  'http://charisma-ev.de/img/events/festDerNationenBack.jpg'
];

function downloadAll(urls) {
  var link = document.createElement('a');

  link.setAttribute('download', null);
  link.style.display = 'none';

  document.body.appendChild(link);

  for (var i = 0; i < urls.length; i++) {
    link.setAttribute('href', urls[i]);
    link.click();
  }

  document.body.removeChild(link);
}
