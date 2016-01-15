var server4 = require('./server4');
var router4 = require('./router4');
var requestHandlers4 = require('./requestHandlers4');

var handle = {};
handle["/"] = requestHandlers4.start;
handle["/start"] = requestHandlers4.start;
handle["/upload"] = requestHandlers4.upload;
handle["/show"] = requestHandlers4.show;

server4.start(router4.route, handle);
