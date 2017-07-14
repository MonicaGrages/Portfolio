$(document).ready (function() {

  $('.page-header').on('mouseout', function(event) {
    $('.header-nav-link').removeClass("nav-link-blue");
  });

  $('.page-header').on('mouseover', function() {
    $('.header-nav-link').addClass("nav-link-blue");
  });

  $('.image-container').on('mouseover', function(event) {
    // $('.header-nav-link').addClass("nav-link-blue");
//make the other ones small and the target big
      console.log(event.target);

    });
});


