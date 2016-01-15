var server3 = require('./server3');
var router3 = require('./router3');
var requestHandlers3 = require('./requestHandlers3');

var handle={};
handle['/']=requestHandlers3.start;
handle['/start']=requestHandlers3.start;
handle['/upload']=requestHandlers3.upload;

server3.start(router3.route,handle);
