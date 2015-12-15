// Return to homepage after X milliseconds
var idleTimeout = function idleTimeout(milliseconds) {
  setTimeout(function() {
    window.open('../html/home.html', '_self');
  }, milliseconds);
}

var fadeIn = function animation() {
  $('body').fadeIn('fast'); // Fade in
  $('body').css('cursor', 'none');
}
