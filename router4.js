function route(handle,pathname, response, request){

  if(typeof handle[pathname] === 'function'){
    handle[pathname](response,request);
  }else {
    response.writeHead(404, {"content-type":"text/plain"});
    response.write('404 not Found');
    response.end();
  }
};

exports.route = route;
