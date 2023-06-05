$(document).ready(function() {
  $('.cloud-image').click(function(e) {
    e.preventDefault();
    var imageUrl = $(this).attr('src');
    $('#overlay-image').attr('src', imageUrl);
    $('#overlay').fadeIn();
  });

  $('#overlay').click(function() {
    $(this).fadeOut();
  });
});