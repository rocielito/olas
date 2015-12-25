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
    // Añadimos las playas al menu
    // Creamos un array que contiene todas las regiones ordenadas
    var lista = [];
    $.each(data.playas, function (i, playa) {
      if ($.inArray(playa.region, lista) == -1) {
        lista.push(playa.region);
      }
    });
    lista.sort();
    // Sustituimos cada región por un objeto al que añadirle playas
    for (var i in lista) {
      var region = {
        region: lista[i],
        playas: []
      }
      lista[i] = region;
    }
    // A cada región le añadimos sus playas correspondientes
    $.each(data.playas, function (i, playa) {
      for (var j in lista) {
        if (lista[j].region == playa.region) {
          lista[j].playas.push(playa.nombre);
          lista[j].playas.sort();
        }
      }
    });
    console.log(lista);

    // Añadimos los marcadores
    $.each(data.playas, function (i, playa) {
      var nombre = playa.nombre;
      var coordenadas = [playa.coordenadas[0], playa.coordenadas[1]];
      var hashtag = playa.hashtag;
      var id = playa.id;
      var windguru = playa.windguru;
      var surfForecast = playa.surfForecast;

      var contenido = '<b>Playa de ' + nombre + '</b>';
      contenido += '<br><a href="#" onClick="cargarInfo(\'' + hashtag + '\', \'' + id + '\')">+Info (Twitter)</a>';
      contenido += '<br><a href="' + windguru + '" target="_blank">Windguru</a>';
      contenido += '<br><a href="' + surfForecast + '" target="_blank">Surf Forecast</a>';
      L.marker(coordenadas).addTo(map).bindPopup(contenido);
    });
  });
});
