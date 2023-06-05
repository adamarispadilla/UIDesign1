

$(document).ready(function() {
  $('rcloud1.png').click(function(e) {
    e.preventDefault();
    var imageUrl = $(this).attr('src');
    $('#overlay-image').attr('src', imageUrl);
    $('#overlay').fadeIn();
  });

  $('#overlay').click(function() {
    $(this).fadeOut();
  });
});