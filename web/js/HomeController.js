// When a hand enter and then leave the leap range it opens the game page.
var flag = true;
var homeLeap = function homeLeap() {
  setTimeout (function() {
    var controller = new Leap.Controller({ enableGestures: false });
    controller.use('handEntry')
    // Here comes the Hand little darling.
    controller.on('handLost', function(hand) {
      if (flag == true) {
        $.post("http://127.0.0.1:8080/go");
        flag = false;
      }
    });
    controller.connect();
  }, 2500);
}
