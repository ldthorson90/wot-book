var wpi = require('../lib/exports');

wpi.setup();

var pin = 9;

wpi.pinMode(pin, wpi.modes.OUTPUT);

var value = 1;

setInterval(function() {
  wpi.digitalWrite(pin, value);
  value = +!value;
}, 500);

process.on('SIGINT', function () {
    clearInterval(interval)
