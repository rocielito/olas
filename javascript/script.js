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


});
