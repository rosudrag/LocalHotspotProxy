function IISProxy(args){
  var myArgs = args.split(" ");

  var os = require('os'),
      proxy = require('http-proxy'),
      pkg = require('./package');

  var exit = function() {
    console.log("exiting...");
    process.exit();
  };

  var argumentsInvalid = myArgs.length != 3 || myArgs[1].toLowerCase() !== 'to';
  if (argumentsInvalid) {
    exit();
  }

  var source = myArgs[0].match(/^(https?:\/\/)?(.+?)(?:\:(\d+))$/);
  var protocolPrefix = 'http://',
      host = 'localhost',
      port, proxyPort;

  if (source === null) {
    port = parseInt(myArgs[0], 10);
  } else {
    protocolPrefix = source[1] || 'http://';
    host = source[2];
    port = parseInt(source[3], 10);
  }
  proxyPort = parseInt(myArgs[2], 10);

  if (isNaN(port) || isNaN(proxyPort)) {
    exit();
  }

  console.log('Proxying %s%s:%d to network interfaces:', protocolPrefix, host, port);

  var interfaces = os.networkInterfaces();

  Object.keys(interfaces).forEach(function(name) {
    interfaces[name].filter(function(item) {
      return item.family == 'IPv4' && !item.internal;
    }).forEach(function(item) {
      console.log("\t%s: %s:%s", name, item.address, proxyPort);
    });
  });

  var target = protocolPrefix + host + ':' + port;
  proxy.createProxyServer({
    target: target,
    changeOrigin: true
  }).listen(proxyPort, function() {
    console.log('IIS Proxy started, listening on', proxyPort, target);
  }).on('error', function (err, req, res) {
    console.log(err.stack);
    console.log('Listening... [press Control-C to exit]');
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end('Aw snap! Something went wrong. Check your console to see the error.');
  });
}

module.exports = IISProxy;
