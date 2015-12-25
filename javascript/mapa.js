$(function () {
  // Definimos un mapa con su posición inicial y su escala
  var map = L.map('map').setView([43.3693, -8.4099], 13);

  // Añadimos la fuente del mapa y sus propiedades
  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Obtenemos las playas y añadimos los marcadores
  $.getJSON('./playas.json', function (data) {
    $.each(data.playas, function (i, playa) {
      var nombre = playa.nombre;
      var coordenadas = [playa.coordenadas[0], playa.coordenadas[1]];
      var hashtag = playa.hashtag;
      var id = playa.id;
      var windguru = playa.windguru;
      var surfForecast = playa.surfForecast;

      var contenido = '<b>Playa de ' + nombre + '</b>';
      contenido += '<br><a href="#" onClick="cargarInfo(\'' + hashtag + '\', \'' + id + '\')">Info</a>';
      //      contenido += '<br><a href="' + windguru + '" target="_blank">Windguru</a>';
      //      contenido += '<br><a href="' + surfForecast + '" target="_blank">Surf Forecast</a>';
      L.marker(coordenadas).addTo(map).bindPopup(contenido);
    });
  });
});
