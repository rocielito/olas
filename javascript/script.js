$(function () {

  //Manejadores de botones

  // Controlador del evento que oculta y muestra los paneles generales
  $('.ocultar').click(function () {
    var clase = $(this).find('.glyphicon').attr('class');
    if (clase == 'glyphicon glyphicon-minus') {
      $(this).closest('.panel').find('.panel-body').hide();
      $(this).find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
      $(this).closest('.panel').find('.panel-body').show();
      $(this).find('.glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
    // Conmutador para que no se muestren los 2 paneles a la vez
    var panel = $(this).closest('.panel').attr('id');
    if (panel == 'mapa' && (($('#mapa').find('.glyphicon').attr('class') == 'glyphicon glyphicon-minus' && $('#info').find('.glyphicon').attr('class') == 'glyphicon glyphicon-minus') || ($('#mapa').find('.glyphicon').attr('class') == 'glyphicon glyphicon-plus' && $('#info').find('.glyphicon').attr('class') == 'glyphicon glyphicon-plus'))) {
      $('#info').find('.ocultar').click();
    } else if (panel == 'info' && (($('#mapa').find('.glyphicon').attr('class') == 'glyphicon glyphicon-minus' && $('#info').find('.glyphicon').attr('class') == 'glyphicon glyphicon-minus') || ($('#mapa').find('.glyphicon').attr('class') == 'glyphicon glyphicon-plus' && $('#info').find('.glyphicon').attr('class') == 'glyphicon glyphicon-plus'))) {
      $('#mapa').find('.ocultar').click();
    }
  });

  // Ocultamos el panel de información nada más cargar la página
  $('#info').find('.ocultar').click();

  //Manejadores de twitter
  ! function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = p + "://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }(document, "script", "twitter-wjs");

  this.cargarInfo = function (hashtag, id) {
    $('#info').find('.panel-body').html('<a class="twitter-timeline" href="https://twitter.com/hashtag/' + hashtag + '" data-widget-id="' + id + '"></a>');
    twttr.widgets.load();
    // Ocultamos el mapa
    $('#mapa').find('.ocultar').click();
    // Mostramos la información en caso de que el panel esté oculto
    if ($('#info').find('.glyphicon').attr('class') == 'glyphicon glyphicon-plus') {
      $('#info').find('.ocultar').click();
    }
  };
});
