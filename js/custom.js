// Koba js
  $('#username').focus();

  $('#submit').click(function() {

      event.preventDefault(); // prevent PageReLoad

      var ValidEmail = $('#username').val() === 'nathan'; // User validate
      var ValidPassword = $('#password').val() === 'allsumm'; // Password validate

      if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
          window.location = "http://www.kobakhit.com/allsum/loggedin.html"; // go to home.html
      }
      else {
          $('#loginErrorMsg').removeClass('hide'); // show error msg
      }
  });

// Closes the sidebar menu
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Map scrolling behaviour
$(document).ready(function() {
  $('#map_iframe').addClass('scrolloff');
  $('#map').on('click', function () {
    $('#map_iframe').removeClass('scrolloff');
  });

  $('#map_iframe').mouseleave(function  () {
    $('#map_iframe').addClass('scrolloff');
  });
});