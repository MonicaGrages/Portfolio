$(document).ready (function() {

  $('.page-header').on('mouseout', function(event) {
    $('.header-nav-link').removeClass("nav-link-blue");
  });

  $('.page-header').on('mouseover', function() {
    $('.header-nav-link').addClass("nav-link-blue");
  });

});


