$(document).ready(function() {
  $(".rcloud1, .rcloud2, .rcloud3, .rcloud4, .rcloud5, .rcloud6, .rcloud7, .rcloud8, .rcloud9").click(function() {
    var $this = $(this);
    var imageSrc = $this.attr("src");
    var text = $this.next(".overlay-text");

    $("#overlay-image").attr("src", imageSrc);
    text.css("opacity", "1");

    $("#overlay").fadeIn();
  });

  $("#overlay").click(function() {
    $(".overlay-text").css("opacity", "0");
    $("#overlay").fadeOut();
  });
});