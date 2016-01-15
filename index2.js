var server2 = require('./server2');
var router2 = require('./router2');
var requestHandlers2 = require('./requestHandlers2');

var handle={};
handle['/']=requestHandlers2.start;
handle['/start']=requestHandlers2.start;
handle['/upload']=requestHandlers2.upload;

server2.start(router2.route,handle);
