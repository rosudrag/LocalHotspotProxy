# Local proxy routing to IIS reverse proxy

## Use case

Test websites (IIS sites) in development on mobile devices without relying on opening your ports to the www.

## Solution

We'll create a WiFi hotspot out of our machine in order to create a network space where our mobile devices can access our site. We'll use a reverse proxy on the iis express site to allow it on the localhost of our machine. Finally we'll use proxy rules abstract the ugly urls and have some nice ones instead.


## To start

```
npm install
npm install nodemon -g
nodemon index.js
```

Configure the proxy to your preferences by modifying _index.js_

## To Use
* you have to have access to the proxy from the mobile device
  * you do that by setting up wifi hotspot on your machine and connecting to the hotspot from your mobile device
* setup proxy connection on port 8000 to the wifi hotspot (use Proxy Droid on android for this)

## Resources
### Requirements:
* windows
* node
* network adapter with ```Hosted network supported```

### Links
* [Node Http Proxy](https://github.com/nodejitsu/node-http-proxy)
* [Http Proxy Rules](https://github.com/donasaur/http-proxy-rules)
* [IISExpress - proxy](https://github.com/icflorescu/iisexpress-proxy)
* [Windows Hotspot Script](https://github.com/JamesCullum/Windows-Hotspot)


### Notes:
#### Create a hospot manually

http://www.windowscentral.com/how-turn-your-windows-10-pc-wireless-hotspot

NETSH WLAN show drivers

NETSH WLAN set hostednetwork mode=allow ssid=myssid key=mykey

NETSH WLAN start hostednetwork


#### IIS express proxy
[IISExpress Node Proxy](https://github.com/icflorescu/iisexpress-proxy)

iisexpress-proxy ahostname:80 to 5051
iisexpress-proxy hulltrains.co.uk.local:80 to 5052

#### Change default dhcp ip

http://www.tomshardware.co.uk/faq/id-1925829/change-default-internet-connection-sharing-address-range.html
