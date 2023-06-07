$(document).ready(function() {
  $(".rcloud1, .rcloud2, .rcloud3, .rcloud4, .rcloud5, .rcloud6, .rcloud7, .rcloud8, .rcloud9").click(function() {
    var $this = $(this);
    var imageSrc = $this.attr("src");
    var text = $this.siblings(".rcloud-text").text();

    var overlayText = $this.closest(".cloud-container2").data("text");

    $("#overlay-image").attr("src", imageSrc);
    $("#overlay-message").text(overlayText);
    $("#overlay-subtext").text(text);
    $("#overlay").fadeIn();
  });

  $("#overlay").click(function() {
    $("#overlay").fadeOut();
  });

  $("#overlay-button").click(function() {
    window.location.href = 'https://www.youtube.com/watch?v=I9SMuho4RlI';
   });
});