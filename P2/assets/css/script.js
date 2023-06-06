
<script>
$(document).ready(function() {
  $('.overlay-trigger').click(function(e) {
    e.preventDefault();
    var imageUrl = $(this).find('img').attr('src');
    $('#overlay-image').attr('src', imageUrl);
    $('#overlay').fadeIn();
  });

  $('#overlay').click(function() {
    $(this).fadeOut();
  });
});

</script>
