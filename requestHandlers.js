var exec = require("child_process").exec;

function start() {
  console.log("Request handler 'start' was called");
  var content = "empty";
  function sleep(milliSeconds){
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds);
  }
  sleep(10000);

  exec("ls -lah", function(error,stdout,stderr){
    content = stdout;
  })
  return content;
}

function upload() {

  console.log("Request hanlder 'upload' was called.");
  return 'hello upload';
}

exports.start = start;
exports.upload = upload;
