var exec = require("child_process").exec;

function start() {
  console.log("Request handler 'start' was called");
  var content = 'start empty';

  // function sleep(ms) {
  //   var startTime = new Date().getTime();
  //   while(new Date().getTime() < startTime + ms);
  // }
  // sleep(10000);
  // console.log('after sleep');
  exec("ls -lah", function(error,stdout,stderr){
    console.log(stdout);
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
