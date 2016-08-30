var hotspot = require('node-hotspot');

var opts = {
    ssid: 'hotspot name',
    password: '66ahhhs641jk',
    force: true, // (optional)  if hosting a network already turn it off and run ours.
    adaptor: 'Ethernet' // (optional / false) name of adaptor to have ICS (Internet Connection Sharing) share internet from, passing false disables ICS all together - if non givin node-hotspot will attempt to find currently connected adaptor automatically
};

hotspot.enable(opts)
    .then(function() {
        console.log('Hotspot Enabled')
    })
    .catch(function(e) {
        Console.log('Something went wrong; Perms?', e)
    });

hotspot.disable(opts)
    .then(function() {
        console.log('Hotspot disabled')
    })
    .catch(function(e) {
        Console.log('Something went wrong; Perms?', e)
    });

hotspot.stats(opts)
    .then(function(status) {
        console.log('Hotspot status: ' + status) //status contains clients object and state
    });
