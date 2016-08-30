var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxy();

var options = {
  'www.abc.com': 'http://192.168.37.1:5051',
};

require('http').createServer(function(req, res) {
  proxy.web(req, res, {
    target: options[req.headers.host]
  });
}).listen(8000);
