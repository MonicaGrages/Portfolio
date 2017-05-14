$(document).ready (function() {


$('.page-header').on('mouseout', function(event) {
  $('.header-nav').remove();
  $('.page-header').css('justify-content','center');
});

$('.page-header').on('mouseover', function() {
  if ($('.page-header').children().length === 1) {
    $('.page-header').append("<ul class='header-nav'><li><a href='#' class='clicked'>Projects</a></li><li><a href='https://www.linkedin.com/in/monicagrages/'>LinkedIn</a></li><li><a href='https://github.com/MonicaGrages'>Github</a></li><li><a href='mailto:mgrages1@gmail.com?Subject=Web%20Development%20Inquiry'target='_top'>Email Me</a></li></ul>");
  };
  $('.page-header').css('justify-content', 'space-between');
});
//on hover change screenshots from grayscale to color and use animate to change opacity over a few ms?























});

