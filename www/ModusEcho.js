var exec = require('cordova/exec');

exports.echo = function(arg0, success, error) {
  exec(success, error, "ModusEcho", "echo", [arg0]);
};

exports.echojs = function(arg0, success, error) {
    // Do something
    success(arg0);
  };