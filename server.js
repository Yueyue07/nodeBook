var http = require('http');
var url = require('url');

var start = function(route,handle) {
  function onRequest(request,response) {
    console.log('request url ' + request.url);
    console.log('parse request url ' + url.parse(request.url));
    console.log('request url pathname ' + url.parse(request.url).pathname);
    var pathname = url.parse(request.url).pathname;
    var content = route(handle,pathname);
    response.writeHead(200,{"content-type":"text/plain"});
    response.write(content);
    response.end();
  }
  console.log('created response')
  http.createServer(onRequest).listen(8888);
}

console.log('server started');
exports.start=start;
