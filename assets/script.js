

console.log('dark mode');

$(document).ready(function(){
     $('.item').click(function(){
          $(this).toggleClass('active');
     });

     //------------------------------------
     // adds a a darkmode class to the body
     //------------------------------------
     $("#darkmode").click(function(){
          $('body').toggleClass('darkmode');
     });

});