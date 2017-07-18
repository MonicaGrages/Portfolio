$(document).ready (function() {

  $('.nav').on('mouseout', function(event) {
    $('.header-nav-link').removeClass("nav-link-blue");
  });

  $('.nav').on('mouseover', function() {
    $('.header-nav-link').addClass("nav-link-blue");
  });

  $('.image-container').on('mouseover', function(event) {
      var parent = $(this).parent();
      $('.nav').addClass('visibility-hidden');
      // parent.siblings().addClass('short-header');

    });

  $('.image-container').on('mouseout', function(event) {
    $('.nav').removeClass("visibility-hidden");
  });

  $('#about-me-link').on('mouseover', function() {
    $('.home_page_scroll_tag').addClass("green-scroll-tag");
  });

  $('#about-me-link').on('mouseout', function() {
    $('.home_page_scroll_tag').removeClass("green-scroll-tag");
  });

});


