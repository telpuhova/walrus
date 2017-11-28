$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });
  $(".clickable2").click(function() {
    $("#faded").fadeToggle();
    $("#not-faded").fadeToggle();
  });
  $(".clickable3").click(function() {
    $("#slide").slideToggle();
    $("#no-slide").slideToggle();
  });
});
