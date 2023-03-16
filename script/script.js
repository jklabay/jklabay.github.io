$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar-scroll').addClass('navbar-scrolled');
    } else {
      $('.navbar-scroll').removeClass('navbar-scrolled');
    }
  });