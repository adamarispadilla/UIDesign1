$(document).ready(function() {
  $(".rcloud1, .rcloud2, .rcloud3,.rcloud4, .rcloud5, .rcloud6, .rcloud7, .rcloud8, .rcloud9").click(function() {
    var imageSrc = $(this).attr("src");
    $("#overlay-image").attr("src", imageSrc);
    $("#overlay").fadeIn();
  });

  $("#overlay").click(function() {
    $("#overlay").fadeOut();
  });
});