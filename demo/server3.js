var http = require('http');

function onRequest(request, response){
  console.log('request: ' + request);
  console.log('response: ' + response);
  console.log('Request recieved!');
  response.writeHead(200,{"content-type":"text/plain"});
  response.write('Hello World');
  response.end();
}

http.createServer(onRequest).listen(8888);
console.log('Server has started.');
