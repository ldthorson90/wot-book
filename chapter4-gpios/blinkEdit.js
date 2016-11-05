var gpio = require("../pi-gpio");
var pin = 9;
var pinState = false;

gpio.setup(pin, gpio.DIR_OUT, write);

function writeOn() {
  pinState = true;
  gpio.write(pin, pinState, function(err) {
    if (err) throw err;
    console.log("Pin state changed to " + pinState);
  });
}

function pause() {
  setTimeout(

function writeOff() {
  pinState = false;
  gpio.write(pin, pinState, function(err) {
    if (err) throw err;
    counsole.log("Pin turned to " + pinState);
  });
}

setInterval(function() {
  wpi.digitalWrite(pin, value);
  value = +!value;
}, 500);

process.on('SIGINT', function () {
    clearInterval(interval)
