$(document).ready(function() {
  $(".rcloud1").click(function() {
    var imageSrc = $(this).attr("src");
    $("#overlay-image").attr("src", imageSrc);
    $("#overlay").fadeIn();
  });

  $("#overlay").click(function() {
    $("#overlay").fadeOut();
  });
});