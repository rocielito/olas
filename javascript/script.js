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
  });

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
    $('#mapa').find('.ocultar').click();
  };
});
