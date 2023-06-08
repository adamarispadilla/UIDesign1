$(document).ready(function() {
  $(".rcloud1, .rcloud2, .rcloud3, .rcloud4, .rcloud5, .rcloud6, .rcloud7, .rcloud8, .rcloud9").click(function() {
    var $this = $(this);
    var imageSrc = $this.attr("src");
    var text = $this.siblings(".rcloud-text").text();

    var overlayText = $this.closest(".cloud-container2").data("text");
    var overlayButtonLink = $this.closest(".cloud-container2").data("link"); // Add this line

    $("#overlay-image").attr("src", imageSrc);
    $("#overlay-message").text(overlayText);
    $("#overlay-subtext").text(text);
    $("#overlay-button").attr("href", overlayButtonLink); 
    $("#overlay").fadeIn();
  });

  $("#overlay").click(function() {
    $("#overlay").fadeOut();
  });
  var button = document.getElementById("button-external");
  button.addEventListener("click", function() {
  window.location.href = "https://adamarispadilla.github.io/UIDesign1/";
  });
});
