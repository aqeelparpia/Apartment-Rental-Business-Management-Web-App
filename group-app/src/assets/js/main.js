jQuery(document).ready(function($) {
  // DM Top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('.dmtop').css({
        bottom: "25px"
      });
    } else {
      $('.dmtop').css({
        bottom: "-100px"
      });
    }
  });

  $('.dmtop').click(function() {
    $('html, body').animate({
      scrollTop: '0px'
    }, 800);
    return false;
  });

  // DM Menu
  $('#nav').affix({
    offset: {
      top: $('#nav').offset().top
    }
  });
  $().jetmenu();
});
