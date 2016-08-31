var httpProxy = require('http-proxy');
var MyIISProxy = require('./myiisproxy');
var LocalProxy = require('./localproxy');

var myiisproxy = new MyIISProxy("hulltrains.co.uk.local:80 to 5051");
var myiisproxy = new MyIISProxy("v7.hillarys.local.dev:81 to 5052");

var rules = {
  'hillarys.*/': 'http://localhost:5052/', // Rule (1)
  'hull.*/': 'http://localhost:5051/' // Rule (2)
};
var defaultUrl = 'http://localhost:5052/';
var localproxy = new LocalProxy(rules, defaultUrl, 8000);
